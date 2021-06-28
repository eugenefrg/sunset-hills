import React, {MouseEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

export const CanvasContent: React.FC = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ x: number; y: number }|undefined>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [towers,setTowers] = useState<{x1:number,x2:number,y1:number,y2:number}[]>([]);
  const selectedTower = useRef(-1)
  const isMouseDown = useRef(false)
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

  const isOnTowerTop = (x:number,y:number) => {
    const selectedTower = -1
    for (let i = 0; i!==towers.length; i++) {
      const {x1,x2} = towers[i]
      if(x >= x1 && x <= x2) {
        return i
      }
    }
    return selectedTower
  }

  const handleMouseDown = (event:any) => {
    const x = event.offsetX
    const y = event.offsetY;
    selectedTower.current = isOnTowerTop(x,y);
    isMouseDown.current = true
  }

  const handleMouseUp = (event:any) => {
    isMouseDown.current = false
  }

  const handleDrag = useCallback((event:any) => {
    if(isMouseDown.current) {
      //do stuff here, idk
    }
  },[isMouseDown,selectedTower])

  const onCanvasLoad = useCallback(() => {
    if (canvas != null) {
      canvas.onmousedown = handleMouseDown
      canvas.onmouseup = handleMouseUp
      canvas.onmousemove = handleDrag
      const newCtx = canvas.getContext("2d");
      handleCanvasSize()
      if (newCtx) {
        setCtx(newCtx);
      }
    }
  }, [setCtx, canvas,handleMouseUp,handleDrag,handleMouseDown]);


  const drawBoxOn = useCallback((box) => {
    if(!ctx) return false;
    ctx.fillStyle = "red";
    ctx.rect(box.x1, box.y1, (box.x2 - box.x1), (box.y2 - box.y1));
    ctx.lineWidth = box.lineWidth;
    ctx.stroke();
  },[ctx])

  const draw = useCallback(() => {
    if(!ctx) return;
    for (let i = 0; i < towers.length; i++) {
      drawBoxOn(towers[i]);
    }
  },[ctx,drawBoxOn,towers])

  const startDrawing = useCallback(() => {
    if (ctx && containerSize) {
      canvas.height = containerSize.y;
      canvas.width = containerSize.x;
      draw()
    }
  }, [ctx,canvas,containerSize,draw]);

  const generateTowers = useCallback(()=>{
    if(!containerSize) return;
    setTowers([{x1:10,x2:100,y1:containerSize.y,y2:containerSize.y-40}])
  },[setTowers,containerSize])


  useEffect(generateTowers,[containerSize])
  useEffect(onCanvasLoad, [canvas]);
  useEffect(handleCanvasSize,[containerElement])
  useEffect(generateTowers,[])
  useEffect(startDrawing, [ctx,containerSize,towers]);
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
      <canvas style={{ border: "1px solid black" }} id={"canvas"}/>
    </div>
  );
};
