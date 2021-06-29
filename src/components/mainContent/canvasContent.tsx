import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export const CanvasContent: React.FC = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<
    { x: number; y: number } | undefined
  >();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  // const [towers,setTowers] = useState<{x1:number,x2:number,y1:number,y2:number}[]>([]);
  const towers = useRef<{ x1: number; x2: number; y1: number; y2: number }[]>(
    []
  );
  const selectedTower = useRef(-1);
  const isMouseDown = useRef(false);
  const canvas: HTMLCanvasElement | undefined = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

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

  const isOnTowerTop = (x: number, y: number) => {
    const selectedTower = -1;
    for (let i = 0; i !== towers.current.length; i++) {
      const { x1, x2 } = towers.current[i];
      if (x >= x1 && x <= x2) {
        return i;
      }
    }
    return selectedTower;
  };

  const handleMouseDown = (event: any) => {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
    selectedTower.current = isOnTowerTop(x, y);
    isMouseDown.current = true;
  };

  const handleMouseUp = (event: any) => {
    isMouseDown.current = false;
  };

  const handleDrag = useCallback(
    (event: any) => {
      if (isMouseDown.current && selectedTower.current !== -1) {
        const rect = canvas.getBoundingClientRect();
        const { x1, y1, x2, y2 } = towers.current[selectedTower.current];
        const mousePositionY =
          ((event.clientY - rect.top) / (rect.bottom - rect.top)) *
          canvas.height;
        if (y1 - y2 >= 40 && y1 - mousePositionY >= 40) {
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
    const before = towers.current[index - 1];
    const current = towers.current[index];
    if (before) {
      return before.y2 - current.y2;
    }
    return undefined;
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
      shineGradient.addColorStop(0, "#ffbd00");
      shineGradient.addColorStop(0.16, "#ff5400");
      shineGradient.addColorStop(0.34, "#ff0054");
      shineGradient.addColorStop(0.51, "#9e0059");
      shineGradient.addColorStop(1, "#390099");

      // ctx.fillStyle = shineGradient;
      // ctx.fillRect(x1,y1,x2,y2);

      //drawShadow
      ctx.beginPath();
      // console.log(getShadowOffset(index))
      if (index === 1) console.log(box.y1 - box.y2);
      const shadowGradient = ctx.createLinearGradient(x1,y1,x2,y2-10);
      shadowGradient.addColorStop(0, "#00000000");
      shadowGradient.addColorStop(0.09, "#390099");
      ctx.fillStyle = shadowGradient;
      ctx.fillRect(x1,y1,x2,y2);
    },
    [ctx]
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

    towers.current = [
      { x1: 10, x2: 100, y1: containerSize.y, y2: containerSize.y - 40 },
      { x1: 110, x2: 200, y1: containerSize.y, y2: containerSize.y - 40 },
    ];
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
      className="h-screen w-screen p-16"
      id="canvasContainer"
      ref={containerElement}
    >
      <canvas style={{ border: "1px solid black" }} id={"canvas"} />
    </div>
  );
};
