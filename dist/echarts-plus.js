!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("echarts"),require("lodash"));else if("function"==typeof define&&define.amd)define(["echarts","lodash"],n);else{var t="object"==typeof exports?n(require("echarts"),require("lodash")):n(e.echarts,e._);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(this,function(e,n){return function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=5)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==n.coord)return n;var t={},r=l(e,n);t=h.default.merge(t,r.option);var a=r.indexMap||{},i=s(e,n,n.series,a);t.series=i;var c=[];"series"===n.legendTarget?c=h.default.chain(i).map("name").compact().uniq().value():"item"===n.legendTarget&&(c=h.default.chain(i).map("data").flatten().map("name").compact().uniq().value()),c.length>0&&(t.legend={show:!0,data:c});var f=h.default.chain(n.series).map("visions").flatten().filter(function(e){return v.visionsOrder[e.channel]>=2}).value();return f.length>0&&(t.visualMap=u(e,n,f)),t=h.default.merge(t,v.coordOption[n.coord]),t=h.default.merge(t,o(n.option))}function o(e){var n=h.default.assign({},e);return n.yAxis&&!h.default.isArray(n.yAxis)&&(n.yAxis=[n.yAxis]),n.xAxis&&!h.default.isArray(n.xAxis)&&(n.xAxis=[n.xAxis]),n}function u(e,n,t){return t.map(function(t){var r,i=h.default.minBy(e,t.field)[t.field],o=h.default.maxBy(e,t.field)[t.field];return v.visualRange[t.channel]&&(r=a({},t.channel,v.visualRange[t.channel])),{min:i,max:o,dimension:v.visionsOrder[t.channel],show:"map"===n.coord,inRange:r,calculable:!0}})}function l(e,n,t){if(!t){var r=l(e,n,"x"),a=l(e,n,"y");return{option:{xAxis:r.axis,yAxis:a.axis},indexMap:h.default.assign(r.indexMap,a.indexMap)}}var i={},o=n.valueTranslator||d,u=n.option&&n.option[t+"Axis"]||[];h.default.isArray(u)||(u=[u]);var s=h.default.chain(n.series).map(function(e){var n=h.default.chain(e.visions).filter({channel:t}).map(function(n){return{option:e.option,field:n.field,channel:n.channel}}).value();return n.length>1&&console.warn("series has more then one x(y)Axis"),n}).flatten().value();return s.forEach(function(n){var r=n.option&&n.option[t+"AxisIndex"]||0;if(u[r]=u[r]||{type:"x"===t?"category":"value"},u[r].type=u[r].type||("x"===t?"category":"value"),"category"===u[r].type){var a=h.default.chain(e).uniqBy(n.field).sortBy(n.field).value(),l=[],s={};a.forEach(function(e,t){s[e[n.field]]=t,l.push(o(n.field,e[n.field],e))}),u[r].data=l,i[n.field]=s}}),{axis:s.length>0?u:null,indexMap:i}}function s(e,n,t,r){var a=n.itemTranslator||f,i=n.valueTranslator||d,o=h.default.chain(t).map(function(t){if(t.generator)return h.default.chain(e).groupBy(t.generator).map(function(e,a){var o={name:i(t.generator,a,e[0]),_plus_name:a};return h.default.assign(o,t),o.generator=null,s(e,n,[o],r)[0]}).value();var o=h.default.chain(t.visions).filter(function(e){return"name"!==e.channel}).sort(function(e,n){return v.visionsOrder[e.channel]-v.visionsOrder[n.channel]}).value(),u=h.default.find(t.visions,{channel:"name"}),l={};l.name=t.name||t.option&&t.option.name,l.data=e.map(function(e){var n=[];o.forEach(function(t){var a;a=!r[t.field]||"x"!==t.channel&&"y"!==t.channel?e[t.field]:r[t.field][e[t.field]],n.length<=v.visionsOrder[t.channel]&&(n.length=v.visionsOrder[t.channel]+1),n[v.visionsOrder[t.channel]]=a});var t=a(e);return null==t&&u&&(t=i(u.field,e[u.field],e)),{name:null==t?l.name:t,value:n}}),l.type=t.type||v.seriesType[n.coord];var f=t.option;return"function"==typeof f&&(f=f(t,t._plus_name)),l=h.default.merge(l,f),l=h.default.merge(l,c(l.type))}).value();return h.default.flatten(o)}function c(e){return v.seriesOption[e]}function f(e){return null}function d(e,n,t){return t&&t[e+"__name"]?t[e+"__name"]:n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var p=t(4),h=r(p),v=t(3);e.exports=n.default},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(n,t){n.exports=e},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.coordOption={rect:{},map:{}},n.seriesType={rect:"bar",polar:"pie",map:"map"},n.visionsOrder={x:0,y:1,angle:0,angle1:0,angle2:1,angle3:2,angle4:3,angle5:4,angle6:5,angle7:6,angle8:7,symbol:2,symbolSize:3,color:4,colorAlpha:5,opacity:6,colorLightness:7,colorSaturation:8,colorHue:9,name:-1},n.seriesOption={scatter:{},map:{mapType:"china"}},n.visualRange={symbolSize:[10,80],opacity:[.3,1],symbol:["circle","rect","roundRect","triangle","diamond","pin","arrow"]}},function(e,t){e.exports=n},function(e,n,t){"use strict";(function(r){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(2),l=a(u),s=t(0),c=a(s),f=function(){function e(n,t){i(this,e),this._data=n,this._option=t,this._echartsOption=null,this.echarts=null}return o(e,[{key:"setData",value:function(e){return this._data=e,this.setOption(this._option),this}},{key:"setOption",value:function(e){return this._option=e,this.echarts&&(this._echartsOption=(0,c.default)(this._data,this._option),console.log(this._echartsOption),this.echarts.setOption(this._echartsOption)),this}},{key:"renderTo",value:function(e){return"string"==typeof e&&(e=document.getElementById(e)),this.echarts=l.default.init(e),this._echartsOption?this.echarts.setOption(this._echartsOption):this.setOption(this._option),this}},{key:"getECharts",value:function(){return this.echarts}}],[{key:"buildOption",value:function(e,n){return(0,c.default)(e,n)}}]),e}();r.EChartsPlus=r.EChartsPlus||f,r.echarts=r.echarts||l.default,n.default=f,e.exports=n.default}).call(n,t(1))}])});
//# sourceMappingURL=echarts-plus.js.map