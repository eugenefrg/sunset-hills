import React, { useCallback, useEffect, useRef, useState } from "react";
import Ground from "../../assets/main/ground.svg";
import "../common.scss";
import "./clouds.scss";

export const MainContent: React.FC = () => {
  const [isOnDemo, setIsOnDemo] = useState<boolean>(false);
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
  const towerMaxSize = 80;

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

  const handleTouchStart = (event: any) => {
    const x = event.targetTouches[0].clientX;
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

  const handleTouchMove = (event: any) => {
    if (isMouseDown.current && selectedTower.current !== -1) {
      window.ontouchmove = (e) => e.preventDefault;
      const clientY = event.targetTouches[0].clientY;
      const rect = canvas.getBoundingClientRect();
      const { y1, y2 } = towers.current[selectedTower.current];
      const mousePositionY =
        ((clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
      if (y1 - y2 >= towerMaxSize && y1 - mousePositionY >= towerMaxSize) {
        towers.current[selectedTower.current].y2 = mousePositionY;
      }
      draw();
    }
  };

  const onCanvasLoad = useCallback(() => {
    if (canvas != null) {
      canvas.onmousedown = handleMouseDown;
      canvas.ontouchstart = handleTouchStart;
      canvas.onmouseup = handleMouseUp;
      canvas.ontouchend = handleMouseUp;
      canvas.onmouseout = handleMouseUp;
      canvas.onmousemove = handleDrag;
      canvas.ontouchmove = handleTouchMove;
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
    const isMobile = containerSize.x < 640;
    const startingPoint = 30;
    const towerWidth = isMobile ? 75 : 150;
    const space = isMobile ? 15 : 30;
    const towerCount = Math.floor(containerSize.x / (towerWidth + space));
    const y1 = containerSize.y;
    const y2 = containerSize.y - towerMaxSize;
    const newTowers: { x1: number; x2: number; y1: number; y2: number }[] = [];
    for (let i = 0; i !== towerCount; i++) {
      const x1 =
        i === 0 ? startingPoint : startingPoint + newTowers[i - 1].x2 + space;
      const x2 = i === 0 ? towerWidth + space : towerWidth + x1;
      newTowers.push({ x1, x2, y1, y2 });
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
      className="h-screen w-full bg-background1 overlayed grid align-center relative overflow-hidden"
      id="canvasContainer"
      ref={containerElement}
    >
      <svg
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full"
      >
        <g clipPath="url(#clip0)">
          <path
            opacity="0.21"
            d="M-0.500797 1370C144.471 1370 262 1252.47 262 1107.5C262 962.525 144.471 845 -0.500797 845C-145.475 845 -263 962.525 -263 1107.5C-263 1252.47 -145.475 1370 -0.500797 1370Z"
            fill="#F28F46"
          />
          <path
            opacity="0.21"
            d="M-0.501667 1662C305.733 1662 554 1413.74 554 1107.5C554 801.257 305.733 553 -0.501667 553C-306.743 553 -555 801.257 -555 1107.5C-555 1413.74 -306.743 1662 -0.501667 1662Z"
            fill="#F28F46"
          />
          <path
            opacity="0.21"
            d="M-0.00286153 2053C519.685 2053 941 1629.91 941 1108C941 586.089 519.685 163 -0.00286153 163C-519.702 163 -941 586.089 -941 1108C-941 1629.91 -519.702 2053 -0.00286153 2053Z"
            fill="#F28F46"
          />
          <path
            opacity="0.21"
            d="M-0.504166 2490C775.162 2490 1404 1858.49 1404 1079.5C1404 300.5 775.162 -331 -0.504166 -331C-776.187 -331 -1405 300.5 -1405 1079.5C-1405 1858.49 -776.187 2490 -0.504166 2490Z"
            fill="#F28F46"
          />
          <path
            opacity="0.21"
            d="M-0.505224 2841C967.904 2841 1753 2052.57 1753 1079.99C1753 107.423 967.904 -681 -0.505224 -681C-968.935 -681 -1754 107.423 -1754 1079.99C-1754 2052.57 -968.935 2841 -0.505224 2841Z"
            fill="#F28F46"
          />
          <path
            className="cloud1"
            opacity="0.6"
            d="M1486.9 438.3C1502.6 438.3 1517.5 442.2 1530.5 449.1C1553.5 409.6 1596.3 383 1645.3 383C1687.1 383 1724.4 402.4 1748.7 432.6C1758 429.9 1767.8 428.4 1777.9 428.4C1819.7 428.4 1855.6 453.3 1871.8 489H1404C1419.5 458.9 1450.8 438.3 1486.9 438.3Z"
            fill="white"
          />
          <path
            className="cloud2"
            opacity="0.6"
            d="M138.9 165.3C154.6 165.3 169.5 169.2 182.5 176.1C205.5 136.6 248.3 110 297.3 110C339.1 110 376.4 129.4 400.7 159.6C410 156.9 419.8 155.4 429.9 155.4C471.7 155.4 507.6 180.3 523.8 216H56C71.5 185.9 102.8 165.3 138.9 165.3Z"
            fill="white"
          />
          <path
            className="cloud3"
            opacity="0.6"
            d="M773.9 293.3C789.6 293.3 804.5 297.2 817.5 304.1C840.5 264.6 883.3 238 932.3 238C974.1 238 1011.4 257.4 1035.7 287.6C1045 284.9 1054.8 283.4 1064.9 283.4C1106.7 283.4 1142.6 308.3 1158.8 344H691C706.5 313.9 737.8 293.3 773.9 293.3Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute w-full pt-32">
        <p className="text-white text-lg md:text-4xl text-center font-bold">
          Drag the top of any structure to resize
        </p>
      </div>
      <canvas
        id={"canvas"}
        style={{
          backgroundImage: `url(${Ground})`,
          backgroundSize: "200% 200%",
        }}
        className="h-screen bg-right-top absolute"
      />
      {/*isOnDemo*/}
      <div
        className={`${
          !isOnDemo ? "absolute" : "hidden"
        } lg:hidden w-full h-screen flex items-center justify-center`}
        style={{ backgroundColor: "#000000bf" }}
      >
        <button
          onClick={() => {
            setIsOnDemo(true);
            containerElement.current?.scrollIntoView({behavior:"smooth"})
            document.querySelector("body")!.style.touchAction = "none";
          }}
          className="text-white font-semibold bg-background1 p-5 h-16 rounded-md"
        >
          <p>Start Demo</p>
        </button>
      </div>
      <div
        className={`${
          isOnDemo ? "absolute" : "hidden"
        } lg:hidden w-full flex items-center justify-center pt-4`}
      >
        <button
          onClick={() => {
            setIsOnDemo(false);
            document.querySelector("body")!.style.touchAction = "auto";
          }}
          className="text-white font-semibold bg-background1 p-5 h-16 rounded-md"
        >
          <p>End Demo</p>
        </button>
      </div>
    </div>
  );
};
