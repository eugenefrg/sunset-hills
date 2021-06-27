import React, {useRef, useState} from "react";
import {Rnd} from "react-rnd";
import {Resizable} from "react-resizable"

export const MainContent: React.FC = () => {
    const containerElement = useRef<HTMLDivElement>(null)
    const towerWidth = 100;
    const towerHeight = 20;
    const containerHeight = containerElement?.current?.offsetHeight || 500
    // console.log(containerElement?.current?.innerHeight)
    const towerCount = 5
    const towers: number[] = new Array(towerCount).fill(towerHeight);
    const [towerData, setTowerData] = useState(towers);
    const [yPositions,setYPositions] = useState(new Array(towerCount).fill(containerHeight*2))
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#f0f0f0",
        margin:0
    };
    console.log(containerElement)
    const highestBeforeTower = (index: number) => {
        return towerData.slice(0, index).sort((a, b) => b - a)[0];
    };

    const generateLightingStyle = (index: number) => {
        const highest = highestBeforeTower(index);
        const currentHeight = towerData[index];
        let colorOffset = 100;
        if (index !== 0) {
            if (highest > currentHeight) {
                colorOffset = 0;
            } else {
                colorOffset =
                    ((currentHeight - highest) / (currentHeight + highest)) * 100;
            }
        }
        const newBg = `linear-gradient(180deg, rgba(255, 203, 0,1) 0%, rgba(184,22,22,1) ${colorOffset}%, rgba(62,62,62,1) ${
            colorOffset !== 100 ? colorOffset + 10 : 100
        }%)`;
        return newBg;
    };
    return <div className="h-screen p-16 px-32" ref={containerElement}>
        {towers.map((tower, index) => {
            return (
                <Rnd
                    key={`tower_${index}`}
                    style={{ ...style, background: generateLightingStyle(index) }}
                    minHeight={towerHeight}
                    // maxHeight={towerTopOffset}
                    bounds="parent"
                    onResize={(e, dir, elementRef, delta, position) => {
                        const newTowerData = towerData;
                        newTowerData[index] = elementRef.offsetHeight;
                        console.log(containerHeight);
                        console.log(position)
                        setTowerData([...newTowerData]);
                    }}
                    onResizeStop={(e,dir,elementRef,delta)=>{
                        const newPositions = yPositions;
                        console.log(delta)
                        console.log(newPositions[index])
                        newPositions[index] = newPositions[index]-delta.height
                        setYPositions([...newPositions])
                    }}
                    default={{
                        x: 0 + index * (towerWidth * 1.5),
                        y: containerHeight,
                        // x:0,
                        // y:0,
                        width: towerWidth,
                        height: towerHeight,
                    }}
                    position={{
                        x:0 + index * (towerWidth * 1.5),
                        y:yPositions[index]
                    }}
                    enableResizing={{
                        top: true,
                    }}
                    disableDragging
                >
                    {towerData[index]}
                </Rnd>
            );
        })}
    </div>;
};
