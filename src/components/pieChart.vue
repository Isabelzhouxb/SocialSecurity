<template>
  <div>
    <div class="pie" ref="pieChart"></div>
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
  data() {
    return {
      pieData: [
        { value: 430, name: '机关养老' },
        { value: 480, name: '失业保险' },
        { value: 122, name: '工伤保险' },
        { value: 260, name: '城职养老' },
        { value: 330, name: '城居养老' },
      ],
    }
  },
  methods: {
    pieOption() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.pieChart)
      // 指定图表的配置项和数据
      const option = {
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
            name: 'Nightingale Chart',
            color: ['#0095FE', '#15C4CA', '#113CDC', '#EA7F1F', '#00BB6E'],
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '48%'],
            // 是否展示成南丁格尔图，通过半径区分数据大小
            roseType: 'area',
            // 图形样式
            itemStyle: {
              borderRadius: 1,
            },
            data: this.pieData,
            label: {
              alignTo: 'edge',
              // 标记样式名
              formatter: '{name|{b}}\n{value|{c} 万元}',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              // 在 rich 里面，可以自定义富文本样式
              rich: {
                name: {
                  fontSize: 16,
                  color: '#999',
                  lineHeight: 30,
                },
                value: {
                  fontSize: 16,
                  color: '#999',
                  lineHeight: 10,
                },
              },
            },
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
  },
  mounted() {
    this.pieOption()
  },
  beforeDestroy() {
    this.myChart.dispose()
  },
}
</script>

<style scoped>
.pie {
  height: 300px;
  border: 0px solid yellow;
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
