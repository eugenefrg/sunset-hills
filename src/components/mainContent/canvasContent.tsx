import React, { useCallback, useEffect, useRef, useState } from "react";
import SunRays from "../../assets/main/sunrays.svg";
import Ground from "../../assets/main/ground.svg";
import Clouds from "../../assets/main/clouds.svg";

export const CanvasContent: React.FC = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<
    { x: number; y: number } | undefined
  >();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const towers = useRef<{ x1: number; x2: number; y1: number; y2: number }[]>(
    []
  );
  const selectedTower = useRef(-1);
  const isMouseDown = useRef(false);
  const canvas: HTMLCanvasElement | undefined = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  const towerMaxSize = 80

  const handleCanvasSize = useCallback(() => {
    if (containerElement) {
      const containerElementStyle = window.getComputedStyle(
        containerElement.current as Element,
        null
      );
      const paddingY = Number(
        containerElementStyle.getPropertyValue("padding-top").replace("px", "")
      );
      const paddingX = Number(
        containerElementStyle.getPropertyValue("padding-left").replace("px", "")
      );
      const containerHeight = Number(
        containerElementStyle.getPropertyValue("height").replace("px", "")
      );
      const containerWidth = Number(
        containerElementStyle.getPropertyValue("width").replace("px", "")
      );
      const newSize = {
        x: containerWidth - paddingX * 2,
        y: containerHeight - paddingY * 2,
      };
      setContainerSize({ ...newSize });
    }
  }, [containerElement]);

  const isOnTowerTop = (x: number) => {
    const selectedTower = -1;
    for (let i = 0; i !== towers.current.length; i++) {
      const { x1, x2 } = towers.current[i];
      if (x >= x1 && x <= x2) {
        return i;
      }
    }
    return selectedTower;
  };

  const handleMouseDown = (event: { offsetX: number }) => {
    const x = event.offsetX;
    selectedTower.current = isOnTowerTop(x);
    isMouseDown.current = true;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleDrag = useCallback(
    (event: { clientY: number }) => {
      if (isMouseDown.current && selectedTower.current !== -1) {
        const rect = canvas.getBoundingClientRect();
        const { y1, y2 } = towers.current[selectedTower.current];
        const mousePositionY =
          ((event.clientY - rect.top) / (rect.bottom - rect.top)) *
          canvas.height;
        if (y1 - y2 >= towerMaxSize && y1 - mousePositionY >= towerMaxSize) {
          towers.current[selectedTower.current].y2 = mousePositionY;
        }
        draw();
      }
    },
    [isMouseDown, selectedTower, ctx, canvas]
  );

  const onCanvasLoad = useCallback(() => {
    if (canvas != null) {
      canvas.onmousedown = handleMouseDown;
      canvas.onmouseup = handleMouseUp;
      canvas.onmouseout = handleMouseUp;
      canvas.onmousemove = handleDrag;
      const newCtx = canvas.getContext("2d");
      handleCanvasSize();
      if (newCtx) {
        setCtx(newCtx);
      }
    }
  }, [setCtx, canvas, handleMouseUp, handleDrag, handleMouseDown]);

  const getShadowOffset = (index: number) => {
    const highestBefore: number = towers.current
      .slice(0, index)
      .sort((a, b) => a.y2 - b.y2)[0].y2;
    const current = towers.current[index];
    if (highestBefore) {
      return highestBefore - current.y2;
    }
    return 0;
  };

  const drawBoxOn = useCallback(
    (box, index) => {
      if (!ctx) return false;
      const x1 = box.x1,
        y1 = box.y1,
        x2 = box.x2 - box.x1,
        y2 = box.y2 - box.y1;
      ctx.beginPath();
      const shineGradient = ctx.createLinearGradient(box.x1, 0, box.x2, 0);
      shineGradient.addColorStop(0, "#FCD161");
      shineGradient.addColorStop(0.16, "#FCA162");
      shineGradient.addColorStop(0.34, "#E7655B");
      shineGradient.addColorStop(0.51, "#9B3467");
      shineGradient.addColorStop(1, "#39193C");

      ctx.fillStyle = shineGradient;
      ctx.fillRect(x1, y1, x2, y2);

      if (index !== 0) {
        ctx.beginPath();
        const shadowOffset = getShadowOffset(index) || 0;
        const shadowGradient = ctx.createLinearGradient(
          x1,
          y1 + y2 + shadowOffset,
          x1,
          y1 + y2 + towerMaxSize + shadowOffset - 60
        );
        shadowGradient.addColorStop(0, "#00000000");
        shadowGradient.addColorStop(0.09, "#39193C");
        ctx.fillStyle = shadowGradient;
        ctx.fillRect(x1, y1, x2, y2);
      }
    },
    [ctx, containerSize]
  );

  const draw = useCallback(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, containerSize?.x || 0, containerSize?.y || 0);

    for (let i = 0; i < towers.current.length; i++) {
      drawBoxOn(towers.current[i], i);
    }
  }, [ctx, drawBoxOn, towers]);

  const startDrawing = useCallback(() => {
    if (ctx && containerSize) {
      canvas.height = containerSize.y;
      canvas.width = containerSize.x;
      draw();
    }
  }, [ctx, canvas, containerSize, draw]);

  const generateTowers = useCallback(() => {
    if (!containerSize) return;
    const startingPoint = 30;
    const towerWidth = 150;
    const space = 30;
    const towerCount = Math.floor(containerSize.x / (towerWidth+space))
    const y1 = containerSize.y
    const y2 = containerSize.y - towerMaxSize
    const newTowers:{x1: number, x2: number, y1: number, y2: number}[] = []
    for (let i = 0; i!==towerCount; i++) {
      const x1 = i===0? startingPoint: startingPoint + newTowers[i-1].x2 + space
      const x2 = i===0? towerWidth+space : towerWidth + x1
      newTowers.push({x1,x2,y1,y2})
    }
    towers.current = newTowers;
  }, [towers, containerSize]);

  useEffect(generateTowers, [containerSize]);
  useEffect(onCanvasLoad, [canvas, ctx]);
  useEffect(handleCanvasSize, [containerElement]);
  useEffect(generateTowers, []);
  useEffect(startDrawing, [ctx, containerSize, towers]);
  useEffect(() => {
    function handleResize() {
      handleCanvasSize();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className="h-screen w-full bg-background1 bg-no-repeat bg-right-top"
      id="canvasContainer"
      style={{backgroundImage:`url(${SunRays})`, backgroundSize:"200% 200%"}}
      ref={containerElement}
    >
      <div className={"absolute w-full pt-32"}>
        <img src={Clouds}/>
      </div>
      <canvas id={"canvas"} style={{backgroundImage:`url(${Ground})`, backgroundSize:"200% 200%"}} className="h-screen bg-right-top absolute" />
    </div>
  );
};
