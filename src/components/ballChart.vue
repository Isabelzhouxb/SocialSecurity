<template>
  <div class="ball" ref="ballChart">
    <img class="img1" src="../img/球02-蓝色拷贝4.png" />
    <img class="img2" src="../img/球02-蓝色拷贝5.png" />
    <div class="bgcontain">
      <div class="bgcircle"></div>
    </div>
    <div class="orangecenter">
      <div class="orangecentertitle">
        <span class="balltitle">{{ title }}</span>
      </div>
      <div class="orangecenterpic">
        <span class="ballnum">{{ ballData[0].value }}</span>
        <br />
        <span class="balldes">{{ ballData[0].name }}</span>
      </div>
    </div>
    <div class="sup">
      <span class="bluetitle"
        >{{ ballData[1].value }}<br />{{ ballData[1].name }}</span
      >
    </div>
    <div class="re">
      <span class="bluetitle"
        >{{ ballData[4].value }}<br />{{ ballData[4].name }}</span
      >
    </div>
    <div class="sumnumper">
      <span class="oratitle"
        >{{ ballData[4].value }}<br />{{ ballData[4].name }}</span
      >
    </div>
    <div class="rate">
      <span class="oratitle"
        >{{ ballData[4].value }}<br />{{ ballData[4].name }}</span
      >
    </div>
    <div class="person">
      <span class="bluetitle"
        >{{ ballData[5].value }}<br />{{ ballData[5].name }}</span
      >
    </div>
    <div class="organization">
      <span class="bluetitle"
        >{{ ballData[6].value }}<br />{{ ballData[6].name }}</span
      >
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
export default {
  name: 'ballChart',
  data() {
    return {
      title: '城职养老',
      ballData: [
        { value: '455.7', name: '征缴总金额' },
        { value: '65.7', name: '补缴金额' },
        { value: '254.6', name: '补缴总人数' },
        { value: '96%', name: '征缴率' },
        { value: '98.6', name: '退缴金额' },
        { value: '155.7', name: '个人缴费金额' },
        { value: '288.7', name: '单位缴费金额' },
      ],
    }
  },
}
</script>

<style scoped>
@import url('../css/ballChart.css');
</style>
