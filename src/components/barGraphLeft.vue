<template>
  <div class="barGraph" ref="barGraphLeft"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barGraphLeft',
  mounted() {
    this.barGraphLeft()
  },
  methods: {
    barGraphLeft() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(this.$refs.barGraphLeft)
      // 立体柱状图：立体柱形图是由前面、右面、上面三部分组成，绘制时需要先绘制前面为一个图形，
      // 左、右面和上面绘制为一个图形，然后在echats中注册，在option的series中renderItem中渲染
      const offsetX = 8
      const offsetY = 4
      // 绘制左侧面
      const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          // canvas，shape是从custom传入的
          const xAxisPoint = shape.xAxisPoint
          // console.log(shape);
          const c0 = [shape.x, shape.y]
          const c1 = [shape.x - offsetX, shape.y - offsetY]
          const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
          const c3 = [xAxisPoint[0], xAxisPoint[1]]
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath()
        },
      })
      // 绘制右侧面
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c1 = [shape.x, shape.y]
          const c2 = [xAxisPoint[0], xAxisPoint[1]]
          const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
          const c4 = [shape.x + offsetX, shape.y - offsetY]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        },
      })
      // 绘制顶面
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y]
          const c2 = [shape.x + offsetX, shape.y - offsetY] // 右点
          const c3 = [shape.x, shape.y - offsetX]
          const c4 = [shape.x - offsetX, shape.y - offsetY]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        },
      })
      // 注册三个面图形
      echarts.graphic.registerShape('CubeLeft', CubeLeft)
      echarts.graphic.registerShape('CubeRight', CubeRight)
      echarts.graphic.registerShape('CubeTop', CubeTop)
      const dataTime = [
        2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112,
      ]
      const dataX = [320, 280, 350, 220, 270, 280, 310, 205, 230, 290, 215, 260]
      const dataY = [53, 40, 48, 52, 46, 38, 48, 52, 45, 47, 53, 43]
      // 指定图表的配置项和数据
      const option = {
        // 直角坐标系内绘图网格
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true,
        },
        // 数据区域缩放。目前只支持直角坐标系的缩放
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        // 提示框组件
        tooltip: {
          // 坐标轴触发
          trigger: 'axis',
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
            // console.log(params)
            return (
              dataTime[params[0].dataIndex] +
              '期<br/>征缴总额：' +
              dataX[params[0].dataIndex] +
              '万元' +
              '<br> 同比：' +
              dataY[params[0].dataIndex] +
              '%'
            )
          },
        },
        legend: {
          top: '20',
          left: '20% ',
          textStyle: {
            fontSize: 16,
            color: '#8C8C8B',
          },
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度、
          itemGap: 12, // 设置间距
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: dataTime,
        },
        yAxis: [
          {
            name: '金额（万元）',
            type: 'value',
            nameTextStyle: {
              color: '#8C8C8B',
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#8C8C8B',
              },
            },
            axisLine: {
              lineStyle: {
                fontSize: 12,
                color: 'rgba(66, 192, 255, .3)',
              },
            },
          },
          {
            type: 'value',
            name: '同比(%)',
            nameTextStyle: {
              color: '#8C8C8B',
            },
            max: '100',
            min: '0',
            scale: true,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: 'rgba(66, 192, 255, .3)',
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter: '{value}', // 右侧Y轴文字显示
              textStyle: {
                fontSize: 12,
                color: '#8C8C8B',
              },
            },
          },
        ],
        series: [
          {
            name: '征缴总额',
            data: dataX,
            type: 'custom',
            barWidth: '10%',
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)])
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
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#33BCEB',
                        },
                        {
                          offset: 1,
                          color: '#337CEB',
                        },
                      ]),
                    },
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#28A2CE',
                        },
                        {
                          offset: 1,
                          color: '#1A57B7',
                        },
                      ]),
                    },
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#43C4F1',
                        },
                        {
                          offset: 1,
                          color: '#28A2CE',
                        },
                      ]),
                    },
                  },
                ],
              }
            },
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, // 平滑曲线显示
            symbol: 'circle', // 标记的图形为线条
            symbolSize: 10, // 标记的大小
            itemStyle: {
              normal: {
                color: '#023795',
                borderColor: '#023795', // 圆点透明 边框
                borderWidth: 5,
              },
            },
            lineStyle: {
              color: '#023795',
            },
            data: dataY,
          },
        ],
      }
      let count = 2113
      setInterval(function () {
        const data0 = option.series[0].data
        const data1 = option.series[1].data
        data0.shift()
        data0.push(Math.round(Math.random() * 400))
        data1.shift()
        // toFixed(1):将Number四舍五入为指定小数位数的数字
        data1.push((Math.random() * 30 + 5).toFixed(1))
        option.xAxis.data.shift()
        option.xAxis.data.push(count++)
        myChart.setOption(option)
      }, 2100)
      // 使用刚指定的配置项和数据显示图表。
      // this.myChart.setOption(option)
    },
  },
}
</script>

<style scoped>
.barGraph {
  height: 280px;
  border: 0px solid red;
}
</style>
