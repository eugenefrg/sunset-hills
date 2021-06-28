import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

export const CanvasContent: React.FC = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ x: number; y: number }>({
    x: 500,
    y: 500,
  });
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [towers,setTowers] = useState<{x1:number,x2:number,y1:number,y2:number}[]>([]);
  const canvas: HTMLCanvasElement | undefined = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;


  const handleCanvasSize = useCallback(() => {
    if (containerElement) {
      const containerElementStyle = window.getComputedStyle(containerElement.current as Element, null)
      const paddingY = Number(containerElementStyle.getPropertyValue("padding-top").replace("px",""))
      const paddingX = Number(containerElementStyle.getPropertyValue("padding-left").replace("px",""))
      const containerHeight = Number(containerElementStyle.getPropertyValue("height").replace('px',""));
      const containerWidth = Number(containerElementStyle.getPropertyValue("width").replace('px',""));
      const newSize = {x:containerWidth-(paddingX*2),y:containerHeight-(paddingY*2)};
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


  const drawBoxOn = useCallback((box) => {
    if(!ctx) return false;
    ctx.fillStyle = "red";
    ctx.rect(box.x1, box.y1, (box.x2 - box.x1), (box.y2 - box.y1));
    ctx.lineWidth = box.lineWidth;
    ctx.stroke();
  },[ctx])

  const draw = useCallback(() => {
    if(!ctx) return false;
    for (let i = 0; i < towers.length; i++) {
      drawBoxOn(towers[i]);
    }
  },[ctx,drawBoxOn,towers])

  const startDrawing = useCallback(() => {
    if (ctx) {
      canvas.height = containerSize.y;
      canvas.width = containerSize.x;
      draw()
      // ctx.fillStyle = "red";
      // ctx.fillRect(20, 20, 150, 100);
      // ctx.fillRect(200, 20, 150, 100);
    }
  }, [ctx,canvas,containerSize,draw]);

  const generateTowers = useCallback(()=>{
    setTowers([{x1:10,x2:40,y1:containerSize.y,y2:40}])
  },[setTowers])

  useEffect(generateTowers,[containerSize])
  useEffect(onCanvasLoad, [canvas]);
  useEffect(handleCanvasSize,[containerElement])
  useEffect(startDrawing, [ctx,containerSize]);
  useEffect(() => {
    function handleResize() {
      handleCanvasSize()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)}
  })

  return (
    <div className="h-screen w-screen p-16" id="canvasContainer" ref={containerElement}>
      <canvas style={{ border: "1px solid black" }} id={"canvas"} />
    </div>
  );
};
