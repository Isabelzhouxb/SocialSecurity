<template>
  <div>
    <div class="pie" ref="radarChart"></div>
    <div class="piebottom">
      <div class="piebottomleft">
        <p style="margin-top: 10%">
          <span class="min">缴纳最多险种</span>
          <br /><br />
          <span class="big">机关养老</span>
          <br /><br />
          <span class="stacolorleft">334.5</span>
          <span class="min">万元</span>
          <span class="stacolorleft">25%</span>
        </p>
      </div>
      <div class="piebottomright">
        <p style="margin-top: 10%">
          <span class="min">缴纳最少险种</span>
          <br /><br />
          <span class="big">城居养老</span>
          <br /><br />
          <span class="stacolorright">334.5</span>
          <span class="min">万元</span>
          <span class="stacolorright">25%</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'pieChart',
  methods: {
    radarChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.radarChart)
      const dataTitle = ['补缴', '退缴']
      const valueSup = [464, 323, 300, 570, 500]
      const valueRec = [380, 350, 380, 630, 580]
      const list = [
        { name: '机关养老' },
        { name: '失业保险' },
        { name: '工伤保险' },
        { name: '城职养老' },
        { name: '城居养老' },
      ]
      // 指定图表的配置项和数据
      const option = {
        // 提示框组件
        tooltip: {
          // 坐标轴触发
          trigger: 'item',
          backgroundColor: 'RGBA(0, 49, 85, 0.5)',
          borderColor: 'rgba(0, 151, 251, 1)',
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: '#BCE9FC',
            fontSize: 16,
            align: 'left',
          },
          formatter: function (params) {
            let tip = dataTitle[params.dataIndex]
            // console.log(params)
            let tmpData = []
            if (params.dataIndex === 0) {
              tmpData = valueSup
            } else if (params.dataIndex === 1) {
              tmpData = valueRec
            }
            params.value.forEach((item, index) => {
              // console.log(list[index].name)
              tip += '<div>'
              tip +=
                '<div>' + list[index].name + ': ' + tmpData[index] + '万</div>'
              tip += '</div>'
            })
            return tip
          },
        },
        color: ['#5470C6', '#E39853'],
        // 图例组件
        legend: {
          data: dataTitle,
          icon: 'circle',
          itemWidth: 10, // 小圆点宽度
          itemHeight: 10, // 小圆点高度
          top: 30,
          left: 20,
          textStyle: {
            fontSize: 14,
            color: '#7A848E',
          },
        },
        // 雷达图坐标系组件，只适用于雷达图
        radar: {
          // 雷达图的指示器，用来指定雷达图中的多个变量（维度）,name指示器名称,max指示器的最大值
          indicator: list,
          center: ['50%', '55%'], // 外圆的位置
          radius: '55%',
          splitArea: {
            areaStyle: {
              color: [
                'rgba(0,96,208, 0.1)',
                'rgba(0,96,208, 0.2)',
                'rgba(0,96,208, 0.4)',
                'rgba(0,96,208, 0.6)',
                'rgba(0,96,208, 0.8)',
                'rgba(0,96,208, 1)',
              ].reverse(),
            },
          },
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 200,
              fontFamily: 'PingFangSC-Regular,PingFang SC',
              fontStyle: 'normal',
            },
          },
        },
        series: [
          {
            name: 'supplement vs recede',
            type: 'radar',
            data: [
              {
                value: valueSup,
                name: '补缴',
                areaStyle: {
                  normal: {
                    color: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(46,203,255, 0.14)', // 0% 处的颜色
                        },
                        {
                          offset: 0.15,
                          color: 'rgba(46,203,255, 0.14)', // 100% 处的颜色
                        },
                        {
                          offset: 0.75,
                          color: 'rgba(46,203,255, 0.4)', // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(46,203,255, 0.5)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
              },
              {
                value: valueRec,
                name: '退缴',
                areaStyle: {
                  normal: {
                    color: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(255, 127,0, 0.14)', // 0% 处的颜色
                        },
                        {
                          offset: 0.15,
                          color: 'rgba(255, 127,0, 0.14)', // 100% 处的颜色
                        },
                        {
                          offset: 0.75,
                          color: 'rgba(2255, 127,0, 0.4)', // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(255, 127,0, 0.5)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
  },
  mounted() {
    this.radarChart()
  },
  beforeDestroy() {
    this.myChart.dispose()
  },
}
</script>

<style scoped>
.pie {
  height: 300px;
  border: 0px solid red;
}
.piebottom {
  height: 140px;
  margin-bottom: 5%;
  border: 0px solid green;
  display: flex;
}
.piebottomleft {
  text-align: center;
  width: 50%;
  border: 0px solid rgb(244, 245, 244);
}
.piebottomright {
  width: 50%;
  border: 0px solid rgb(244, 245, 244);
}
.min {
  color: #807f7f;
  font-size: 16px;
}
.big {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
.stacolorleft {
  color: #15c4ca;
  font-size: 20px;
}
.stacolorright {
  color: #ea7f1f;
  font-size: 20px;
}
</style>
