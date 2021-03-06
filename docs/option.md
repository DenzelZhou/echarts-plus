通过配置EChartsPlus的Option可以快速的构建出ECharts的Option，同时也能够使用ECharts强大的自定义配置，具体配置参考：

```js
{
  coord: 'rect', // 使用的坐标系，可选 rect | map | polar，为空时会把该option当做echarts的option
  series: [{ // 数据系列，一个或者多个
    type: 'bar', // series类型，同ECharts：http://echarts.baidu.com/option.html#series-line.type
    name: 'xxx', // 同ECharts：http://echarts.baidu.com/option.html#series-line.name
    gererator: 'field_xxx', // 对应数据中的一个数据属性。当该项存在时，数据会按照该属性分组生成多个series
    valueTranslator: Function, // 翻译值的名称, for series.name, category.data, legend.data
    itemTranslator: Function, // 翻译每个数据项名称, series: [{ data: [{ name: 'thisname', value: xx }] }]
    visions: [{ // 数据到视觉通道的配置
      channel: 'y', // 视觉通道类型，坐标系的不同和series类型的不同使得支持的视觉通道也不同，参考坐标系的文档
      field: 'value' // 要映射到该视觉通道上的数据属性或者数据值，对应数据总的一列
    }, {
      channel: 'x',
      field: 'dt'
    }],
    option: { // series的配置，同ECharts：http://echarts.baidu.com/option.html#series
      // 可以是一个Function，echarts-plus会执行它并传入series的配置，当存在generator的时候通过generator生成的分组的值，第二个参数是可以通过它获得灵活的option配置
      name: '值' // legend==series时是使用series的name来对应legend的，可以通过设置该值来调整legend对应的系列
    }
  }],
  legendTarget: 'series', // legend对应切换的对象，可选 series | item，默认为空不显示legend，item仅对极坐标(polar)有效
  option: { // 同ECharts的配置：http://echarts.baidu.com/option.html，会覆盖掉EChartsPlus默认生成的配置。使用 lodash.merge 合并配置。
    option: {
      yAxis: [undefined, { // 当需要自定义后面的轴时，前面的填充undefined
        splitLine: {
          show: false
        }
      }]
    },
    title: {
      text: '直角坐标系demo'
    },
    tooltip: {
      show: true
    }
  }
}
```

EChartsPlus会按照series中的视觉通道的配置生成series的data。数据的值在最终series.data[].value 中的位置通过下面的channelIndex决定。该index同时也是visualMap种的dimension字段。

```js
channelIndex = {
  x: 0,
  y: 1,

  angle: 0,
  angle1: 0,
  angle2: 1,
  angle3: 2,
  angle4: 3,
  angle5: 4,
  angle6: 5,
  angle7: 6,
  angle8: 7,
  
  symbol: 2,
  symbolSize: 3,
  color: 4,
  colorAlpha: 5,
  opacity: 6,
  colorLightness: 7,
  colorSaturation: 8,
  colorHue: 9
}
```

比如说下面这个视觉通道映射的配置：
```
visions: [{
  filed: 'a',
  channel: 'x'
}, {
  filed: 'b',
  channel: 'y'
}, {
  filed: 'c',
  channel: 'symbolSize'
}]
```
将会把数据

```
{
  a: 1,
  b: 2,
  c: 3
}
```
转换为series中的一条数据的value
```
{
  value: [1, 2, undefined, 3]
}
```







