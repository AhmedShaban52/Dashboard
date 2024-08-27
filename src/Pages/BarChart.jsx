import { ResponsiveBar } from '@nivo/bar'
import { useStateContext } from '../Contexts/ContextProvider';

const BarChart = () => {

    const { currentMode, currentColor } = useStateContext()
    
    const data = [
        {
            month: 'Jan',
            Labtop: 65,
            Mobiles: 28,
        },
   
        {
            month: 'Apr',
            Labtop: 80,
            Mobiles: 20,
        },
      
        {
            month: 'Jul',
            Labtop: 80,
            Mobiles: 90,
        },
        {
            month: 'Aug',
            Labtop: 81,
            Mobiles: 19,
        },
        {
            month: 'Nov',
            Labtop: 81,
            Mobiles: 24,
        },
        {
            month: 'Dec',
            Labtop: 65,
            Mobiles: 48,
        },
    ];
    
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
    <div className="pt-10  main-section " style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }} >
    <ResponsiveBar
        data={data}
        groupMode="grouped"
        innerPadding={4}
        colors={[currentColor,  '#e10a1f']}
        keys={[
            'Labtop',
            'Mobiles',
        ]}
        indexBy="month"
        theme={currentMode === "Dark" ? DarkTheme : LightTheme}
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
            axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:'Month',
            legendPosition: 'middle',
            legendOffset: 40,
            truncateTickAt: 0,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sales',
            legendPosition: 'middle',
            legendOffset: -45,
            truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 105,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </div>
  )
}

export default BarChart