
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from '../Data/world_countries'
import { useStateContext } from '../Contexts/ContextProvider'


const Choropleth = () => {
 
    
    const { currentMode } = useStateContext()

    const data =[
        {
          "id": "AFG",
          "value": 139959
        },
        {
          "id": "AGO",
          "value": 88727
        },
        {
          "id": "ALB",
          "value": 380403
        },
        {
          "id": "ARE",
          "value": 851798
        },
        {
          "id": "ARG",
          "value": 10243
        },
        {
          "id": "ARM",
          "value": 793070
        },
        {
          "id": "ATA",
          "value": 90000
        },
        {
          "id": "ATF",
          "value": 138432
        },
        {
          "id": "AUT",
          "value": 409079
        },
        {
          "id": "AZE",
          "value": 398387
        },
        {
          "id": "BDI",
          "value": 991011
        },
        {
          "id": "BEL",
          "value": 209218
        },
        {
          "id": "BEN",
          "value": 397318
        },
        {
          "id": "BFA",
          "value": 887488
        },
        {
          "id": "BGD",
          "value": 546140
        },
        {
          "id": "BGR",
          "value": 194680
        },
        {
          "id": "BHS",
          "value": 519053
        },
        {
          "id": "BIH",
          "value": 372589
        },
        {
          "id": "BLR",
          "value": 123483
        },
        {
          "id": "BLZ",
          "value": 146725
        },
        {
          "id": "BOL",
          "value": 600736
        },
        {
          "id": "BRN",
          "value": 599655
        },
        {
          "id": "BTN",
          "value": 848767
        },
        {
          "id": "BWA",
          "value": 296073
        },
        {
          "id": "CAF",
          "value": 789004
        },
        {
          "id": "CAN",
          "value": 88000
        },
        {
          "id": "CHE",
          "value": 873938
        },
        {
          "id": "CHL",
          "value": 872011
        },
        {
          "id": "CHN",
          "value": 730000
        },
        {
          "id": "CIV",
          "value": 670054
        },
        {
          "id": "CMR",
          "value": 517574
        },
        {
          "id": "COG",
          "value": 734160
        },
        {
          "id": "COL",
          "value": 164473
        },
        {
          "id": "CRI",
          "value": 459999
        },
        {
          "id": "CUB",
          "value": 629942
        },
        {
          "id": "-99",
          "value": 819068
        },
        {
          "id": "CYP",
          "value": 428777
        },
        {
          "id": "CZE",
          "value": 958864
        },
        {
          "id": "DEU",
          "value": 437770
        },
        {
          "id": "DJI",
          "value": 461783
        },
        {
          "id": "DNK",
          "value": 57294
        },
        {
          "id": "DOM",
          "value": 309868
        },
        {
          "id": "DZA",
          "value": 514205
        },
        {
          "id": "ECU",
          "value": 789373
        },
        {
          "id": "EGY",
          "value": 976994
        },
        {
          "id": "ERI",
          "value": 695102
        },
        {
          "id": "ESP",
          "value": 694764
        },
        {
          "id": "EST",
          "value": 915008
        },
        {
          "id": "ETH",
          "value": 246629
        },
        {
          "id": "FIN",
          "value": 558786
        },
        {
          "id": "FJI",
          "value": 45549
        },
        {
          "id": "FLK",
          "value": 959554
        },
        {
          "id": "FRA",
          "value": 937377
        },
        {
          "id": "GAB",
          "value": 770038
        },
        {
          "id": "GBR",
          "value": 272629
        },
        {
          "id": "GEO",
          "value": 777849
        },
        {
          "id": "GHA",
          "value": 753015
        },
        {
          "id": "GIN",
          "value": 191603
        },
        {
          "id": "GMB",
          "value": 769077
        },
        {
          "id": "GNB",
          "value": 360080
        },
        {
          "id": "GNQ",
          "value": 824153
        },
        {
          "id": "GRC",
          "value": 736026
        },
        {
          "id": "GTM",
          "value": 782599
        },
        {
          "id": "GUY",
          "value": 139527
        },
        {
          "id": "HND",
          "value": 902731
        },
        {
          "id": "HRV",
          "value": 786297
        },
        {
          "id": "HTI",
          "value": 583608
        },
        {
          "id": "HUN",
          "value": 213606
        },
        {
          "id": "IDN",
          "value": 372125
        },
        {
          "id": "IND",
          "value": 253062
        },
        {
          "id": "IRL",
          "value": 302076
        },
        {
          "id": "IRN",
          "value": 751936
        },
        {
          "id": "IRQ",
          "value": 893078
        },
        {
          "id": "ISL",
          "value": 24567
        },
        {
          "id": "ISR",
          "value": 253628
        },
        {
          "id": "ITA",
          "value": 216553
        },
        {
          "id": "JAM",
          "value": 874398
        },
        {
          "id": "JOR",
          "value": 166245
        },
        {
          "id": "JPN",
          "value": 330879
        },
        {
          "id": "KAZ",
          "value": 361752
        },
        {
          "id": "KEN",
          "value": 370213
        },
        {
          "id": "KGZ",
          "value": 173184
        },
        {
          "id": "KHM",
          "value": 487837
        },
        {
          "id": "OSA",
          "value": 159230
        },
        {
          "id": "KWT",
          "value": 68954
        },
        {
          "id": "LAO",
          "value": 344814
        },
        {
          "id": "LBN",
          "value": 212333
        },
        {
          "id": "LBR",
          "value": 796140
        },
        {
          "id": "LBY",
          "value": 584447
        },
        {
          "id": "LKA",
          "value": 424570
        },
        {
          "id": "LSO",
          "value": 388757
        },
        {
          "id": "LTU",
          "value": 87977
        },
        {
          "id": "LUX",
          "value": 448151
        },
        {
          "id": "LVA",
          "value": 886978
        },
        {
          "id": "MAR",
          "value": 875955
        },
        {
          "id": "MDA",
          "value": 771989
        },
        {
          "id": "MDG",
          "value": 29862
        },
        {
          "id": "MEX",
          "value": 350479
        },
        {
          "id": "MKD",
          "value": 867066
        },
        {
          "id": "MLI",
          "value": 741213
        },
        {
          "id": "MMR",
          "value": 681611
        },
        {
          "id": "MNE",
          "value": 501246
        },
        {
          "id": "MNG",
          "value": 604927
        },
        {
          "id": "MOZ",
          "value": 107187
        },
        {
          "id": "MRT",
          "value": 540380
        },
        {
          "id": "MWI",
          "value": 348123
        },
        {
          "id": "MYS",
          "value": 180848
        },
        {
          "id": "NAM",
          "value": 778888
        },
        {
          "id": "NCL",
          "value": 438485
        },
        {
          "id": "NER",
          "value": 573319
        },
        {
          "id": "NGA",
          "value": 686484
        },
        {
          "id": "NIC",
          "value": 446898
        },
        {
          "id": "NLD",
          "value": 581057
        },
        {
          "id": "NOR",
          "value": 943161
        },
        {
          "id": "NPL",
          "value": 16822
        },
        {
          "id": "NZL",
          "value": 629349
        },
        {
          "id": "OMN",
          "value": 411278
        },
        {
          "id": "PAK",
          "value": 249060
        },
        {
          "id": "PAN",
          "value": 587006
        },
        {
          "id": "PER",
          "value": 358862
        },
        {
          "id": "PHL",
          "value": 996335
        },
        {
          "id": "PNG",
          "value": 900569
        },
        {
          "id": "POL",
          "value": 99141
        },
        {
          "id": "PRI",
          "value": 31040
        },
        {
          "id": "PRT",
          "value": 94279
        },
        {
          "id": "PRY",
          "value": 716977
        },
        {
          "id": "QAT",
          "value": 46912
        },
        {
          "id": "ROU",
          "value": 47086
        },
        {
          "id": "RUS",
          "value": 88000
        },
        {
          "id": "RWA",
          "value": 376348
        },
        {
          "id": "ESH",
          "value": 353168
        },
        {
          "id": "SAU",
          "value": 111048
        },
        {
          "id": "SDN",
          "value": 706347
        },
        {
          "id": "SDS",
          "value": 815911
        },
        {
          "id": "SEN",
          "value": 478781
        },
        {
          "id": "SLB",
          "value": 294224
        },
        {
          "id": "SLE",
          "value": 578822
        },
        {
          "id": "SLV",
          "value": 370687
        },
        {
          "id": "ABV",
          "value": 308039
        },
        {
          "id": "SOM",
          "value": 285276
        },
        {
          "id": "SRB",
          "value": 666418
        },
        {
          "id": "SUR",
          "value": 449955
        },
        {
          "id": "SVK",
          "value": 679890
        },
        {
          "id": "SVN",
          "value": 447504
        },
        {
          "id": "SWZ",
          "value": 601989
        },
        {
          "id": "SYR",
          "value": 394806
        },
        {
          "id": "TCD",
          "value": 494028
        },
        {
          "id": "TGO",
          "value": 889692
        },
        {
          "id": "THA",
          "value": 267918
        },
        {
          "id": "TJK",
          "value": 229549
        },
        {
          "id": "TKM",
          "value": 424323
        },
        {
          "id": "TLS",
          "value": 538424
        },
        {
          "id": "TTO",
          "value": 14927
        },
        {
          "id": "TUN",
          "value": 830854
        },
        {
          "id": "TUR",
          "value": 785432
        },
        {
          "id": "TWN",
          "value": 846051
        },
        {
          "id": "TZA",
          "value": 502231
        },
        {
          "id": "UGA",
          "value": 539888
        },
        {
          "id": "UKR",
          "value": 837627
        },
        {
          "id": "URY",
          "value": 564000
        },
        {
          "id": "USA",
          "value": 897370
        },
        {
          "id": "UZB",
          "value": 132540
        },
        {
          "id": "VEN",
          "value": 313434
        },
        {
          "id": "VNM",
          "value": 604732
        },
        {
          "id": "VUT",
          "value": 520810
        },
        {
          "id": "PSE",
          "value": 423364
        },
        {
          "id": "YEM",
          "value": 322822
        },
        {
          "id": "ZAF",
          "value": 672103
        },
        {
          "id": "ZMB",
          "value": 270621
        },
        {
          "id": "ZWE",
          "value": 361193
        },
        {
          "id": "KOR",
          "value": 369031
        }
    ]
return (
  <div className='h-screen mt-5 p-3   border dark:border-[1px] dark:border-[#2d3234] dark:bg-main-dark-bg rounded-xl duration-700 ' style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }}>
  <h1 className="text-[#32393f] dark:text-[#a8adb0]  font-bold text-2xl ">Recent Orders</h1>
  <ResponsiveChoropleth
  role="img"
  data={data}
  projectionType="mercator"
  fillColor="white"
  value="value"
  features={geo.features}
  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
  colors="spectral"
  domain={[0, 1000000]}
  unknownColor="#666666"
  label="properties.name"
  valueFormat=".2s"
  projectionScale={85}
  projectionTranslation={[0.5, 0.5]}
  projectionRotation={[0, 0, 0]}
  enableGraticule={false}
  graticuleLineWidth={0.5} 
  graticuleLineColor="#dddddd"
  borderWidth={0.5}
  borderColor="#152538"
  isInteractive={true}
  onMouseEnter={() => { }}
  onMouseMove={() => { }}
  onMouseLeave={() => { }}
  onClick={() => { }}
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
      },
      {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
              {
                  offset: 0,
                  color: '#000'
              },
              {
                  offset: 100,
                  color: 'inherit'
              }
          ]
      }
  ]}
  fill={[
      {
          match: {
              id: 'ATA'
          },
          id: 'gradient'
      }
  ]}

/>



    </div>
)
}

export default Choropleth