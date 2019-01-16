<template>
  <div id="app">
    <contribution
    	:data="data"
		:year="2019"
		:rectWidth="12"
		:rectHeight="12"
		:fontSize="10"
		:click="click"
		monthText="en"
    />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
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

<style>

</style>
