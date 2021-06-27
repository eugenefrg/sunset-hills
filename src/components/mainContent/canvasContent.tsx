import React, { useCallback, useEffect, useRef, useState } from "react";

export const CanvasContent: React.FC = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ x: number; y: number }>({
    x: 500,
    y: 500,
  });
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const canvas: HTMLCanvasElement | undefined = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  const handleCanvasSize = useCallback(() => {
    if (containerElement) {
      const containerHeight = containerElement.current!.offsetHeight;
      const containerWidth = containerElement.current!.offsetWidth;
      const newSize = {x:containerWidth,y:containerHeight};
      setContainerSize({...newSize})
    }
  }, [containerElement]);

  const onCanvasLoad = useCallback(() => {
    if (canvas != null) {
      const newCtx = canvas.getContext("2d");
      handleCanvasSize()
      if (newCtx) {
        setCtx(newCtx);
      }
    }
  }, [setCtx, canvas]);

  const startDrawing = useCallback(() => {
    if (ctx) {
      canvas.height = containerSize.y;
      canvas.width = containerSize.x;

      ctx.fillStyle = "red";
      ctx.fillRect(20, 20, 150, 100);
      ctx.fillRect(200, 20, 150, 100);
    }
  }, []);


  useEffect(onCanvasLoad, []);
  useEffect(handleCanvasSize,[])
  useEffect(startDrawing, []);

  return (
    <div className="h-screen w-screen p-16" ref={containerElement}>
      <canvas style={{ border: "1px solid black" }} id={"canvas"} />
    </div>
  );
};
