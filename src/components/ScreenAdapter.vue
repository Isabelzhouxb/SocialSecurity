<template>
  <div class="screen-adapter">
    <div class="content-wrap" :style="style">
      <el-container>
        <!-- 顶部背景图 -->
        <el-header>
          <div class="headleft">
            <div class="select" style="position: absolute; top: 2%; left: 2%">
              <span>202103</span>
              <img src="../img/下拉箭头.png" />
            </div>
          </div>
          <div class="headmid"><span>社保缴纳分析</span></div>
          <div class="headright">
            <span class="headDate">{{ dateTime }}</span>
          </div>
        </el-header>
        <div class="content">
          <!-- list部分 -->
          <el-container>
            <div class="list">
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img1" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titlePer }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticPer
                    }}</span>
                    <span>万元</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img2" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleCom }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticCom
                    }}</span>
                    <span>万元</span>
                    <span class="rateDown">{{ listItemContentRate.down }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img3" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleSumAmount }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticSumAmount
                    }}</span>
                    <span>万元</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img4" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleSumPer }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticSumPer
                    }}</span>
                    <span>万元</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img5" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleRate }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticRate
                    }}</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem">
                <div class="listItemPic">
                  <img :src="imgs.img6" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleSup }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticSup
                    }}</span>
                    <span>万元</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
              <div class="listItem" style="border-right: 0px solid">
                <div class="listItemPic">
                  <img :src="imgs.img7" />
                </div>
                <div class="listItemContent">
                  <div class="listItemContentTitle">
                    {{ listItemContentTitle.titleRef }}
                  </div>
                  <div class="listItemContentStatic">
                    <span class="static">{{
                      listItemContentStatic.staticRef
                    }}</span>
                    <span>万元</span>
                    <span class="rateUp">{{ listItemContentRate.up }}</span>
                  </div>
                </div>
              </div>
            </div>
          </el-container>
          <!-- 中间饼状图部分 -->
          <el-container class="middle">
            <!-- 各险种缴纳分布 -->
            <div class="piechart">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>各险种缴纳分布</span>
                <div class="select">
                  <span>征缴总金额</span>
                  <img src="../img/下拉箭头.png" />
                </div>
              </div>
              <pie-chart></pie-chart>
            </div>
            <!-- 各险种缴费明细 -->
            <div class="ballchart">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>各险种缴费明细</span>
                <div class="ballchartlist">
                  <div
                    class="ballchartlistitem"
                    style="border-bottom: 3px solid #2383ed"
                  >
                    城职养老
                  </div>
                  <div class="ballchartlistitem">城居养老</div>
                  <div class="ballchartlistitem">机关养老</div>
                  <div class="ballchartlistitem">失业保险</div>
                  <div class="ballchartlistitem">工伤保险</div>
                </div>
              </div>
              <ball-chart></ball-chart>
            </div>
            <!-- 各险种补缴、退缴情况 -->
            <div class="piechart" style="margin-right: 0px">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>各险种补缴、退缴情况</span>
              </div>
              <radar-chart></radar-chart>
            </div>
          </el-container>
          <!-- 底部折线图部分 -->
          <el-container class="footer">
            <!-- 缴费趋势分析 -->
            <div class="linechart">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>缴费趋势分析</span>
                <div class="select">
                  <span>全部</span>
                  <img src="../img/下拉箭头.png" />
                </div>
              </div>
              <bar-graph-left></bar-graph-left>
            </div>
            <!-- 征缴趋势分析 -->
            <div class="linechart">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>征缴趋势分析</span>
              </div>
              <bar-graph-middle></bar-graph-middle>
            </div>
            <!-- 补缴/退缴趋势分析 -->
            <div class="linechart" style="margin-right: 0px">
              <div class="shadowgb">
                <img src="../img/line.png" class="iconline" />
                <img src="../img/right.png" class="icontri" />
                <span>补缴/退缴趋势分析</span>
                <div class="select">
                  <span>全部</span>
                  <img src="../img/下拉箭头.png" />
                </div>
              </div>
              <bar-graph-right></bar-graph-right>
            </div>
          </el-container>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
import pieChart from './pieChart'
import ballChart from './ballChart'
import radarChart from './radarChart'
import barGraphLeft from './barGraphLeft'
import barGraphMiddle from './barGraphMiddle'
import barGraphRight from './barGraphRight'
export default {
  name: 'ScreenAdapter',
  components: {
    pieChart,
    radarChart,
    barGraphLeft,
    barGraphMiddle,
    barGraphRight,
    ballChart,
  },
  data() {
    return {
      style: {
        width: `${this.w}px`,
        height: `${this.h}px`,
        transform: 'scale(1) translate(-50%, -50%)', // 默认不缩放，垂直水平居中
      },
      // head里的时间
      dateTime: '2021-03-17 11:19',
      // 改为用require引入的原因：动态地址，路径被加载器解析为字符串，所以图片找不到
      imgs: {
        img1: require('../img/01_70.png'),
        img2: require('../img/01_38.png'),
        img3: require('../img/01_7.png'),
        img4: require('../img/01_75.png'),
        img5: require('../img/01_44.png'),
        img6: require('../img/01_62.png'),
        img7: require('../img/01.png'),
      },
      // list里面每一个的title
      listItemContentTitle: {
        titlePer: '个人缴费金额 ',
        titleCom: '单位缴费金额 ',
        titleSumAmount: '征缴总金额 ',
        titleSumPer: '缴费总人数 ',
        titleRate: '征缴率 ',
        titleSup: '补缴金额 ',
        titleRef: '退费金额 ',
      },
      // 每个list对应的数据（前面的数字或百分比）
      listItemContentStatic: {
        staticPer: '34.56',
        staticCom: '86.56',
        staticSumAmount: '234.5',
        staticSumPer: '34.56',
        staticRate: '96%',
        staticSup: '243.6',
        staticRef: '34.56',
      },
      // 每个list对应的上升或下降的比率（红色和绿色）
      listItemContentRate: {
        up: '+2.5%',
        down: '-0.2%',
      },
    }
  },
  props: {
    w: {
      // 设计图尺寸宽
      type: Number,
      default: 1920,
    },
    h: {
      // 设计图尺寸高
      type: Number,
      default: 1080,
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onresize)
  },
  mounted() {
    this.setScale()
    this.onresize = this.debounce(() => this.setScale(), 100)
    window.addEventListener('resize', this.onresize)
  },
  methods: {
    // 防抖
    debounce(fn, t) {
      const delay = t || 500
      let timer
      // eslint-disable-next-line func-names
      return function () {
        // eslint-disable-next-line prefer-rest-params
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        const context = this
        timer = setTimeout(() => {
          timer = null
          fn.apply(context, args)
        }, delay)
      }
    },
    // 获取缩放比例
    getScale() {
      // console.log(window.innerHeight, window.innerWidth)
      const w = window.innerWidth / this.w
      const h = window.innerHeight / this.h
      return w < h ? w : h
    },
    // 设置缩放比例
    setScale() {
      this.style.transform = `scale(${this.getScale()}) translate(-50%, -50%)`
    },
  },
}
</script>

<style scoped>
@import url('../css/home.css');
</style>
