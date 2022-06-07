<template>
  <div class="barGraph" ref="barGraphRight"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barGraphRight',
  mounted() {
    this.barGraphRight()
  },
  methods: {
    barGraphRight() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.barGraphRight)
      // 立体柱状图：立体柱形图是由前面、右面、上面三部分组成，绘制时需要先绘制前面为一个图形，
      // 绘制左侧面
      const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c0 = [shape.x + 7, shape.y]
          const c1 = [shape.x - 10, shape.y]
          const c2 = [xAxisPoint[0] - 10, xAxisPoint[1]]
          const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]]
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath()
        }
      })
      // 绘制右侧面
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c1 = [shape.x + 7, shape.y]
          const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]]
          const c3 = [xAxisPoint[0] + 15, xAxisPoint[1] - 10]
          const c4 = [shape.x + 15, shape.y - 10]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        }
      })
      // 绘制顶面
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x + 7, shape.y]
          const c2 = [shape.x + 15, shape.y - 10] // 右点
          const c3 = [shape.x - 2, shape.y - 10]
          const c4 = [shape.x - 10, shape.y]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        }
      })
      // 注册三个面图形
      echarts.graphic.registerShape('CubeLeft', CubeLeft)
      echarts.graphic.registerShape('CubeRight', CubeRight)
      echarts.graphic.registerShape('CubeTop', CubeTop)
      // x轴数据
      const dataTime = [
        '2101',
        '2102',
        '2103',
        '2104',
        '2105',
        '2106',
        '2107',
        '2108',
        '2109',
        '2110',
        '2111',
        '2112'
      ]
      // 补缴数据
      const dataSupSta = [
        342, 312, 268, 255, 198, 327, 388, 190, 220, 278, 341, 266
      ]
      // 退缴数据
      const dataReSta = [
        258, 189, 145, 267, 290, 210, 320, 350, 210, 280, 240, 110
      ]
      // 补缴百分比
      const dataSupRate = [40, 46, 58, 32, 43, 63, 49, 53, 55, 58, 62, 66]
      // 退缴百分比
      const dataReRate = [35, 28, 45, 67, 37, 29, 32, 35, 29, 28, 24, 30]
      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'RGBA(0, 49, 85, 0.5)',
          borderColor: 'rgba(0, 151, 251, 1)',
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: '#BCE9FC',
            fontSize: 16,
            align: 'left'
          },
          formatter: function (params) {
            // console.log(params)
            return (
              dataTime[params[0].dataIndex] +
              '期<br/>补缴总额：' +
              dataSupSta[params[0].dataIndex] +
              '万元' +
              '<br> 同比：' +
              dataSupRate[params[0].dataIndex] +
              '%<br/>退缴总额：' +
              dataReSta[params[0].dataIndex] +
              '万元' +
              '<br> 同比：' +
              dataReRate[params[0].dataIndex] +
              '%'
            )
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          top: '20',
          left: '20% ',
          textStyle: {
            fontSize: 16,
            color: '#8C8C8B'
          },
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度、
          itemGap: 12 // 设置间距
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: dataTime
        },
        yAxis: [
          {
            name: '金额（万元）',
            type: 'value',
            nameTextStyle: {
              color: '#8C8C8B'
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#8C8C8B'
              }
            },
            axisLine: {
              lineStyle: {
                fontSize: 12,
                color: 'rgba(66, 192, 255, .3)'
              }
            }
          },
          {
            type: 'value',
            name: '同比(%)',
            nameTextStyle: {
              color: '#8C8C8B'
            },
            max: '100',
            min: '0',
            scale: true,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: 'rgba(66, 192, 255, .3)'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 12,
                color: '#8C8C8B'
              }
            }
          }
        ],
        series: [
          {
            name: '补缴同比',
            type: 'line',
            yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, // 平滑曲线显示
            symbol: 'line', // 标记的图形为线条
            symbolSize: 10, // 标记的大小
            itemStyle: {
              normal: {
                color: '#023795',
                borderColor: '#023795', // 圆点透明 边框
                borderWidth: 5
              }
            },
            lineStyle: {
              color: '#023795'
            },
            data: dataSupRate
          },
          {
            name: '退缴同比',
            type: 'line',
            yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, // 平滑曲线显示
            symbol: 'line', // 标记的图形为线条
            symbolSize: 10, // 标记的大小
            itemStyle: {
              normal: {
                color: '#912C40',
                borderColor: '#912C40', // 圆点透明 边框
                borderWidth: 5
              }
            },
            lineStyle: {
              color: '#023795'
            },
            data: dataReRate
          },
          {
            type: 'custom',
            barWidth: '2%',
            name: '补缴金额',
            renderItem: (params, api) => {
              const cubeLeftStyle = new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#33BCEB'
                  },
                  {
                    offset: 1,
                    color: '#337CEB'
                  }
                ]
              )
              const cubeRightStyle = new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#337CEB'
                  },
                  {
                    offset: 1,
                    color: '#091365'
                  }
                ]
              )
              const cubeTopStyle = {
                color: '#33BCEB'
              }
              let location = api.coord([api.value(0), api.value(1)])
              location = [location[0] - 10, location[1]]
              let location1 = api.coord([api.value(0), 0])
              location1 = [location1[0] - 10, location1[1]]
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeLeftStyle
                    }
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeRightStyle
                    }
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeTopStyle
                    }
                  }
                ]
              }
            },
            data: dataSupSta
          },
          {
            type: 'custom',
            barWidth: '2%',
            name: '退缴金额',
            renderItem: (params, api) => {
              const cubeLeftStyle = new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#EC667C'
                  },
                  {
                    offset: 1,
                    color: '#B5273F'
                  }
                ]
              )
              const cubeRightStyle = new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#D33B56'
                  },
                  {
                    offset: 1,
                    color: '#510814'
                  }
                ]
              )
              const cubeTopStyle = {
                color: '#EC667C'
              }
              let location = api.coord([api.value(0), api.value(1)])
              location = [location[0] + 10, location[1]]
              let location1 = api.coord([api.value(0), 0])
              location1 = [location1[0] + 10, location1[1]]
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeLeftStyle
                    }
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeRightStyle
                    }
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: location1
                    },
                    style: {
                      fill: cubeTopStyle
                    }
                  }
                ]
              }
            },
            data: dataReSta
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    }
  },
  beforeDestroy() {
    this.myChart.dispose()
  }
}
</script>

<style scoped>
.barGraph {
  height: 280px;
  border: 0px solid red;
}
</style>
