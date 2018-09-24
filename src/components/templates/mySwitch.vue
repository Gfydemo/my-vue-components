<template>
    <div class="switch-warpper">
      <span :class="isdir? 'text-color' : '' ">{{active}}</span>
        <div :class="isdir? 'bot-warpper active' : 'bot-warpper inactive' " @click="switchOver">
          <div :class="isdir? 'ball ball-left' : 'ball ball-right' "></div>
        </div>
      <span :class="!isdir? 'text-color' : '' ">{{inactive}}</span>
    </div>
</template>

<script>
export default {
  name: 'mySwitch',
  props: {
    activeText: '',
    inactiveText: '',
    value: ''
  },
  data () {
    return {
      active: this.activeText,
      inactive: this.inactiveText,
      isdir: this.value
    }
  },
  methods: {
    switchOver () {
      this.isdir = !this.isdir
      this.$emit('input', this.isdir)
    }
  },
  watch: {
    activeText (val) {
      this.active = val
    },
    inactiveText (val) {
      this.inactive = val
    }
  }
}
</script>

<style scoped>
  .switch-warpper{
    display: flex;
    justify-items: center;
  }
  .switch-warpper span{
    font-size: 14px;
  }
  .text-color {
    color: #35aff8;
    transition: all ease-in .2s;
  }
  .bot-warpper {
    margin: 0 10px;
    position: relative;
    display: inline;
    width: 35px;
    height: 18px;
    padding: 2px;
    border-radius: 10px;
    cursor: pointer;
  }
  .active {
    background: #13ce66;
    transition: all ease-in .1s;
  }
  .inactive {
    background: #ff4949;
    transition: all ease-in .1s;
  }
  .ball-left {
    left: 2px;
    transition: all ease-in .2s;
  }
  .ball-right {
    left: 18px;
    transition: all ease-in .2s;
  }
  .ball {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
  }
</style>
