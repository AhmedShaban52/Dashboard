import { ResponsiveAreaBump } from '@nivo/bump';
import { useStateContext } from '../Contexts/ContextProvider';

const AreaChart = () => {
    const { currentMode ,currentColor} = useStateContext();

    const data = [
        {
            "id": "Google",
            "data": [
                {"x": 2000, "y": 20},
                {"x": 2001, "y": 15},
                {"x": 2002, "y": 15},
                {"x": 2003, "y": 16},
                {"x": 2004, "y": 14},
            ]
        },
        {
            "id": "FaceBook",
            "data": [
                {"x": 2000, "y": 25},
                {"x": 2001, "y": 30},
                {"x": 2002, "y": 13},
                {"x": 2003, "y": 22},
                {"x": 2004, "y": 20},
            ]
        },
        {
            "id": "Twitter",
            "data": [
                {"x": 2000, "y": 23},
                {"x": 2001, "y": 29},
                {"x": 2002, "y": 28},
                {"x": 2003, "y": 27},
                {"x": 2004, "y": 29},
            ]
        },
        {
            "id": "Gmail",
            "data": [
                {"x": 2000, "y": 18},
                {"x": 2001, "y": 13},
                {"x": 2002, "y": 14},
                {"x": 2003, "y": 19},
                {"x": 2004, "y": 30},
            ]
        },
    ];

  const DarkTheme = {
      
      "text": {
          "fontSize": 11,
          "fill": "#ffffff",
          "outlineWidth": 0,
      "outlineColor": "transparent",
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

    const LightTheme =  {
      "background": "#ffffff",
      "text": {
          "fontSize": 11,
          "fill": "#333333",
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "axis": {
          "domain": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              }
          },
          "legend": {
              "text": {
                  "fontSize": 12,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "ticks": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              },
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "grid": {
          "line": {
              "stroke": "#dddddd",
              "strokeWidth": 1
          }
      },
      "legends": {
          "title": {
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "ticks": {
              "line": {},
              "text": {
                  "fontSize": 10,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "annotations": {
          "text": {
              "fontSize": 13,
              "fill": "#333333",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          }
      },
      "tooltip": {
          "wrapper": {},
          "container": {
              "background": "#ffffff",
              "color": "#333333",
              "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
      }
  }
     

    return (
        <div className="pt-20 main-section" style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }}>
        <ResponsiveAreaBump
        data={data}
        theme={currentMode === "Dark" ? DarkTheme : LightTheme}
        colors={[ "#f62718",   '#41e298', currentColor, '#6468e7' , "rgb(189 159 133)"]}
        margin={{ top: 40, right: 75, bottom: 40, left: 75 }}
        spacing={35}
        blendMode="normal"
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
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel="id"
        endLabel="id"
        endLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
    />
        </div>
    );
};

export default AreaChart;
