
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { useStateContext } from '../Contexts/ContextProvider'
import { useEffect, useState } from 'react';

const RadialBar = () => {

    const { currentMode, currentColor } = useStateContext()

    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setTranslateX(0);
            } else {
                setTranslateX(135);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const data =
    [
        {
          "id": "Supermarket",
          "data": [
            {
              "x": "France",
              "y": 198
            },
            {
              "x": "Germany",
              "y": 271
            },
            {
              "x": "Italy",
              "y": 234
            },
            {
              "x": "Poland",
              "y": 231
            }
          ]
        },
        {
          "id": "Combini",
          "data": [
            {
              "x": "France",
              "y": 283
            },
            {
              "x": "Germany",
              "y": 213
            },
            {
              "x": "Italy",
              "y": 36
            },
            {
              "x": "Poland",
              "y": 108
            }
          ]
        },
        {
          "id": "Online",
          "data": [
            {
              "x": "France",
              "y": 276
            },
            {
              "x": "Germany",
              "y": 31
            },
            {
              "x": "Italy",
              "y": 163
            },
            {
              "x": "Poland",
              "y": 287
            }
          ]
        },
        {
          "id": "Marché",
          "data": [
            {
              "x": "France",
              "y": 168
            },
            {
              "x": "Germany",
              "y": 124
            },
            {
              "x": "Italy",
              "y": 119
            },
            {
              "x": "Poland",
              "y": 225
            }
          ]
        }
        ]
    
        const DarkTheme =   {
            "text": {
                "fontSize": 11,
                "fill": "#ffffff",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#ffffff",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": "white",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#ffffff",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": "#ffffff",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#334155",
                    "strokeWidth": 1
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#ffffff",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": "#ffffff",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": "#ffffff",
                    "outlineWidth": 2,
                    "outlineColor": "#1f2937",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#1f2937",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#ffffff",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#1f2937",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#ffffff",
                    "outlineWidth": 2,
                    "outlineColor": "#1f2937",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#1f2937",
                    "color": "#ffffff",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }
            
    
        const LightTheme = {
            text: {
                fontSize: 11,
                fill: "#000000",
                outlineWidth: 0,
                outlineColor: "transparent"
            },
            axis: {
                domain: {
                    line: {
                        stroke: "#000000",
                        strokeWidth: 1
                    }
                },
                legend: {
                    text: {
                        fontSize: 12,
                        fill: "#000000",
                        outlineWidth: 0,
                        outlineColor: "transparent"
                    }
                },
                ticks: {
                    line: {
                        stroke: "#000000",
                        strokeWidth: 1
                    },
                    text: {
                        fontSize: 11,
                        fill: "#000000",
                        outlineWidth: 0,
                        outlineColor: "transparent"
                    }
                }
            },
            grid: {
                line: {
                    stroke: "#dddddd",
                    strokeWidth: 1
                }
            },
            legends: {
                title: {
                    text: {
                        fontSize: 11,
                        fill: "#000000",
                        outlineWidth: 0,
                        outlineColor: "transparent"
                    }
                },
                text: {
                    fontSize: 11,
                    fill: "#000000",
                    outlineWidth: 0,
                    outlineColor: "transparent"
                },
                ticks: {
                    line: {},
                    text: {
                        fontSize: 10,
                        fill: "#000000",
                        outlineWidth: 0,
                        outlineColor: "transparent"
                    }
                }
            },
            annotations: {
                text: {
                    fontSize: 13,
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1
                },
                link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1
                },
                outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1
                },
                symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1
                }
            },
            tooltip: {
                wrapper: {},
                container: {
                    background: "#ffffff",
                    color: "#000000",
                    fontSize: 12
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {}
            }
        };
  return (
    <div className="pt-20 main-section" style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }}>
    <ResponsiveRadialBar
    data={data}
    theme={currentMode === "Dark" ? DarkTheme : LightTheme}
    colors={[currentColor , '#41e298', '#6468e7' ]}
    valueFormat=">-.2f"
    padding={0.4}
    cornerRadius={2}
    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
    legends={[
        {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: translateX,
            translateY: 0,
            itemsSpacing: 6,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'square',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>
    </div>
  )
}

export default RadialBar