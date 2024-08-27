
import { ResponsiveLine } from '@nivo/line'
import { useStateContext } from '../Contexts/ContextProvider'

const Line = () => {
    
    const { currentMode } = useStateContext()

    const data =
    [
        {
          "id": "japan",
          "color": "hsl(7, 70%, 50%)",
          "data": [
            {
              "x": "helicopter",
              "y": 248
            },
            {
              "x": "subway",
              "y": 218
            },
            {
              "x": "bus",
              "y": 210
            },
            {
              "x": "moto",
              "y": 156
            },
            {
              "x": "horse",
              "y": 19
            },
          ]
        },
        {
          "id": "france",
          "color": "hsl(119, 70%, 50%)",
          "data": [
            {
              "x": "helicopter",
              "y": 238
            },
            {
              "x": "subway",
              "y": 97
            },
            {
              "x": "bus",
              "y": 139
            },
            {
              "x": "moto",
              "y": 64
            },
            
            {
              "x": "horse",
              "y": 160
            },
          ]
        },
        {
          "id": "us",
          "color": "hsl(318, 70%, 50%)",
          "data": [
            {
              "x": "helicopter",
              "y": 296
            },
            {
              "x": "subway",
              "y": 148
            },
            {
              "x": "bus",
              "y": 78
            },
            {
              "x": "moto",
              "y": 227
            },
            {
              "x": "horse",
              "y": 36
            },
          ]
        },
        {
          "id": "germany",
          "color": "hsl(7, 70%, 50%)",
          "data": [
          
            {
              "x": "helicopter",
              "y": 136
            },
            {
              "x": "subway",
              "y": 90
            },
            {
              "x": "bus",
              "y": 21
            },
            {
              "x": "moto",
              "y": 150
            },
            {
              "x": "horse",
              "y": 145
            },
          ]
        },
        {
          "id": "norway",
          "color": "hsl(126, 70%, 50%)",
          "data": [
            {
              "x": "helicopter",
              "y": 10
            },
          
           
            {
              "x": "subway",
              "y": 270
            },
            {
              "x": "bus",
              "y": 179
            },
          
            {
              "x": "moto",
              "y": 68
            },
         
            {
              "x": "horse",
              "y": 33
            },
          
          
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
    <div className="pt-20 main-section ">
      <ResponsiveLine
        data={data}
        theme={currentMode === "Dark" ? DarkTheme : LightTheme}
        margin={{ top: 50, right: 105, bottom: 50, left: 55 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            itemTextColor: currentMode === "Dark" ? "white" : "black",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: currentMode === "Dark" ? "black" : "white",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Line