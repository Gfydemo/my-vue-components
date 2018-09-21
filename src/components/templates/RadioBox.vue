<template>
    <div class="radio-container">
      <div class="radio" v-for="(item, index) in dataradio" v-bind:key="index">
        <label :class="item.checked ? 'radio_btn_active' : 'radio_btn' " >
          <input :id="item.id" v-model="radioValue" :checked="item.checked" class="radio-input" :value="item.value" :name="checkName" type="radio" @change="changeChecked($event,index)" >
        </label>
        <label :for="item.id" class="radio-text" :style="item.checked? 'color:#409eff' : '' ">{{item.content}}</label>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RadioBox',
  props: {
    name: '',
    value: '',
    radios: {
      type: Array
    }
  },
  data () {
    return {
      isChecked: false,
      checkName: this.name,
      dataradio: [],
      radioValue: this.value
    }
  },
  methods: {
    changeChecked ($event, $index) {
      this.$emit('input', this.radioValue)
      this.dataradio = this.dataradio.map((item, index) => {
        if (index === $index) return {...item, checked: true}
        return {...item, checked: false}
      })
    }
  },
  created () {
    this.dataradio = this.radios.map((item, index) => {
      if (this.radioValue === item.value) return { ...item, checked: true, id: `${this.checkName}${index}` }
      return { ...item, checked: false, id: `${this.checkName}${index}` }
    })
  }
}
</script>

<style scoped>
  .radio-container{
    margin-top: 20px;
    display: flex;
  }
  .radio_btn {
    display: block;
    border: 1px solid #e1e1e1;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in .2s;
  }
  .radio_btn_active {
    display: block;
    border: 5px solid #409eff;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in .2s;
  }
  .radio-input{
    position: absolute;
    top: -2px;
    left: -4px;
    opacity: 0;
  }
  .radio {
    position: relative;
    display: flex;
    text-align: left;
    font-size: 12px;
    margin-left: 10px;
  }
  .radio input[type=radio] {
    cursor: pointer;
  }
  .radio .radio-text{
    margin-left: 5px;
    cursor: pointer ;
  }
</style>
