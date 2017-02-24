var echarts = require('echarts')
var transfer = require('./transfer')

class EChartsPlus {

  constructor (data, option) {
    this._data = data
    this._option = option
    this._echartsOption = null

    this.echarts = null
  }

  setData (data) {
    this._data = data
    this.setOption(this._option)
  }

  setOption (option) {
    this._option = option
    if (this.echarts) {
      this._echartsOption = transfer(this._data, this._option, this._option && this._option.custom)
      this.echarts.setOption(this._echartsOption)
    }
  }

  renderTo (ele) {
    if (typeof ele === 'string') {
      // ele is a id
      ele = document.getElementById(ele)
    }
    this.echarts = echarts.init(ele)
    if (this._echartsOption) {
      // option already cached
      this.echarts.setOption(this._echartsOption)
    } else {
      // generate echartsOption
      this.setOption(this._option)
    }
  }

  getECharts () {
    return this.echarts
  }
}

window.EChartsPlus = window.EChartsPlus || EChartsPlus

export default EChartsPlus
