# vue-contribution

> 基于Vue的类github contribution组件

## 截图
<img src="https://github.com/QQOQ/vue-contribution/raw/master/public/img/test.png" alt="vue-contribution" style="max-width:750px;">

## 安装

``` bash
$ npm install vue-contribution -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import contribution from 'vue-contribution'
import 'vue-contribution/dist/vue-contribution.css';
Vue.use(contribution)
```

在项目中使用 vue-contribution

```js
<template>
  <contribution
    :data="data"
    :year="2019"
    :rectWidth="12"
    :rectHeight="12"
    :fontSize="10"
    :click="click"
    monthText="en"
  />
</template>
<script>
  export default {
    data () {
      return {
        data: {
          '2019-1-1':6,
          '2019-1-2':1,
          '2019-1-3':2,
          '2019-2-2':23,
          '2019-2-3':13,
          '2019-2-4':7,
          '2019-4-1':6,
          '2019-4-2':1,
          '2019-5-3':2,
          '2019-6-2':23,
          '2019-6-3':13,
          '2019-6-4':7,
          '2019-12-20':3,
          '2019-12-21':0,
          '2019-12-22':9,
          '2019-12-23':5
      	}
      }
    },
    methods: {
      click(date){
        console.log(date)
      }
    }
  }
</script>
```

## 特点
1. 使用简单，只需简单配置或者只传递一个数据就能立即看到效果
2. 可定制化程度高

## props属性
通过以下属性来个性化你的contribution

| 属性  | 说明  | 类型  | 默认值  | 是否必须  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| year  | 指定显示的年份  | Number  | 本年  | 否  |
| fontSize  | 字体大小，单位为px(无需输入单位)  | Number  | 10  | 否  |
| spacing  | 元素之间的间隔，单位为px(无需输入单位)  | Number  | 2  | 否  |
| rectWidth  | 单个元素的宽度，单位为px(无需输入单位)  | Number  | 12  | 否  |
| rectHeight  | 单个元素的高度，单位为px(无需输入单位)  | Number  | 12  | 否  |
| fontColor | 字体颜色  | String  | #767676  | 否  |
| monthText  | 月份文本，可选参数为`zh-cn`,`en`，当然还可以自定义一个数组，例:`['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']`  | String, Array  | zh-cn  | 否  |
| click  | 点击监听事件，返回当前点击日期，例:`2019-1-16`  | Function  | -  | 否  |
| conditions | 根据当前条件显示不同颜色  | Array  | 参见下面的`conditions默认值`  | 否  |
| data | 数据对象，格式参见下面的`data值`  | Object  | 无  | 是  |

#### conditions默认值
每个数组对象分别有三个属性`condition`,`value`,`color`。该数组对象可根据自己情况设置任意数量，无数量限制。
1. `condition` 就是条件表达式，支持6种运算符`>` `<` `==` `!=` `>=` `<=`
2. `value` 是条件值
3. `color ` 为颜色值

例：`{'condition':'<','value':1,'color':'#ebedf0'}` 表示当数据值小于1时元素的颜色为`#ebedf0`。

```
[
  {'condition':'<','value':1,'color':'#ebedf0'},
  {'condition':'<','value':3,'color':'#c6e48b'},
  {'condition':'<','value':5,'color':'#7bc96f'},
  {'condition':'<','value':7,'color':'#239a3b'},
  {'condition':'>=','value':7,'color':'#196127'},
]
```

#### data值
通过返回如下格式数据来显示contribution的内容，对应`日期=>值` 的关系。
```
{
  '2019-1-1':6,
  '2019-1-2':1,
  '2019-1-3':2,
  '2019-2-2':23,
  '2019-2-3':13,
  '2019-2-4':7,
  '2019-4-1':6,
  '2019-4-2':1,
  '2019-5-3':2,
  '2019-6-2':23,
  '2019-6-3':13,
  '2019-6-4':7,
  '2019-12-20':3,
  '2019-12-21':0,
  '2019-12-22':9,
  '2019-12-23':5
}
```