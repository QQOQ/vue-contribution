# vue-contribution

> 基于Vue的类github contribution组件

## 截图
![vue-contribution](https://github.com/QQOQ/vue-contribution/blob/master/public/img/test.png)

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
    }
  }
</script>
```

## 特点
1. 使用简单，只需简单配置或者只传递一个数据就能立即看到效果
2. 可定制化程度高

## props属性
通过以下属性来个性化你的contribution
| 属性 | 说明 | 类型 | 默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  2 | 3  | 4  | 5  |


