<template>
  <div class="barGraph" ref="barGraphMiddle"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barGraphMiddle',
  mounted() {
    this.barGraphMiddle()
  },
  methods: {
    barGraphMiddle() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.barGraphMiddle)
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
      const dataCity = [18, 22, 31, 32, 25, 26, 29, 19, 36, 35, 23, 41]
      const dataUnem = [29, 35, 17, 28, 36, 27, 18, 42, 27, 36, 28, 36]
      const dataOffice = [18, 32, 28, 22, 35, 43, 25, 29, 22, 36, 23, 26]
      // 指定图表的配置项和数据
      const option = {
        // 提示框组件
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
              '期<br/>城职养老：' +
              dataCity[params[0].dataIndex] +
              '%' +
              '<br> 失业养老：' +
              dataUnem[params[0].dataIndex] +
              '%' +
              '<br> 机关养老：' +
              dataOffice[params[0].dataIndex] +
              '%'
            )
          }
        },
        // 图例组件
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
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false, // 坐标轴两边留白
          data: dataTime,
          axisLabel: {
            // 坐标轴刻度标签的相关设置。
            interval: 0, // 设置为 1，表示『隔一个标签显示一个标签』
            // margin:15,
            textStyle: {
              color: '#8C8C8B',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#8C8C8B'
              // opacity:0.2
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            name: '缴税率（%）',
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
              formatter: '{value}', // 右侧Y轴文字显示
              textStyle: {
                fontSize: 12,
                color: '#8C8C8B'
              }
            }
          }
        ],
        series: [
          {
            name: '城职养老',
            symbol: 'line', // 标记的图形为线条
            type: 'line',
            itemStyle: {
              normal: {
                color: '#2F93D7',
                lineStyle: {
                  color: '#2F93D7',
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(47,147,215,0)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(47,147,215,0.5)'
                    }
                  ])
                }
              }
            },
            data: dataCity
          },
          {
            name: '失业保险',
            symbol: 'line', // 标记的图形为线条
            type: 'line',
            itemStyle: {
              normal: {
                color: '#2C9A95',
                lineStyle: {
                  color: '#2C9A95',
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(44,154,149,0)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(44,154,149,0.5)'
                    }
                  ])
                }
              }
            },
            data: dataUnem
          },
          {
            name: '机关养老',
            symbol: 'line', // 标记的图形为线条
            type: 'line',
            itemStyle: {
              normal: {
                color: '#A61F36',
                lineStyle: {
                  color: '#A61F36',
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'rgba(166,31,54,0)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(166,31,54,0.5)'
                    }
                  ])
                }
              }
            },
            data: dataOffice
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
