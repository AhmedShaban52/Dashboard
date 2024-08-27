import { ResponsivePie } from "@nivo/pie"
import { useStateContext } from "../Contexts/ContextProvider"



const PieChart = () => {
    const { currentMode, currentColor } = useStateContext()

    const data = [
        {
        "id": "Jeans",
        "label": "Jeans",
        "value": 25,
        },
        {
        "id": "T-Shirts",
        "label": "T-Shirts",
        "value": 80,
        },
        {
        "id": "Shoes",
        "label": "Shoes",
        "value": 25,
        },
        {
        "id": "Lingerie",
        "label": "Lingerie",
        "value": 25,
        },
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
    <div className="p-4 main-section" style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }}>
        <h1 className="text-[#32393f] dark:text-white font-bold text-2xl ">Trending Products</h1>
    <ResponsivePie
        data={data}
        theme={currentMode === "Dark" ? DarkTheme : LightTheme}
        colors={['#fc541c',currentColor , '#f32359', '#41e298', '#6468e7', ]}
        margin={{ top: 40, right: 50, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor= {currentMode === "Dark" ? "white" : "black"}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
            ]}
            
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 85,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: currentMode === "Dark" ? "white" :"black"
                        }
                    }
                ]
            }
            ]}
    />
    </div>
)
}

export default PieChart