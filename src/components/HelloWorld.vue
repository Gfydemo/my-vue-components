<template>
  <div>
    <h1>封装组件练习专题</h1>
    <h2>{{num}}</h2>
    <h2>radio-->{{radioValue}}--switch-->{{isSwitch}}--sliderNum-->{{sliderNum}}</h2>
    <ImgUpload></ImgUpload>
    <count :num="num" :maxNum="20" :minNum="0" @count="getNum"></count>
    <RadioBox  v-model="radioValue" :radios="radios" :name="'radio'"></RadioBox>
    <RadioBox  v-model="radioValue2" :radios="radios2" :name="'radio2'"></RadioBox>
    <geng_radio v-model="radioValue2" :radios="radios2" name="c"></geng_radio>
    <GRadio v-model="radioValue3" :radios="radios3" name="g1"></GRadio>
    <button @click="getRadioValue2">获取单选按钮</button>
    <mySwitch v-model="isSwitch" activeText="按月付费" inactiveText="按年付费"></mySwitch>
    <mySlider v-model="sliderNum" :tooltip="true"></mySlider>
  </div>
</template>

<script>
import ImgUpload from './templates/img_upload'
import count from './templates/count'
import RadioBox from './templates/RadioBox'
import mySwitch from './templates/mySwitch'
import mySlider from './templates/mySlider'
import GRadio from './templates/GRadio'
export default {
  name: 'HelloWorld',
  components: {
    ImgUpload,
    count,
    RadioBox,
    mySwitch,
    mySlider,
    GRadio
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10,
      sliderNum: 0,
      isChecked: false,
      radioValue: 'zh',
      radioValue2: '',
      radioValue3: '',
      isSwitch: true,
      radios: [
        {content: '中文', value: 'zh'},
        {content: '俄文', value: 'ew'},
        {content: 'english', value: 'eh'},
        {content: '数学', value: 'math'}
      ],
      radios2: [
        {content: '河南', value: '河南'},
        {content: '河北', value: '河北'}
      ],
      radios3: [
        {name: '河南', value: '河南'},
        {name: '河北', value: '河北'}
      ]
    }
  },
  methods: {
    getNum (res) {
      this.num = res
    },
    getCheck (event) {
      console.log(event.target.checked)
    },
    getRadioValue () {
      console.log(this.radioValue)
    },
    getRadioValue2 () {
      alert(`你选中了${this.radioValue2}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
