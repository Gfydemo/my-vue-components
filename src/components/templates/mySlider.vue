<template>
    <div class="slider-warpper">
        <div class="rall">
          <div class="rall-active" :style=" 'width:'+ activeWidth +'px' "></div>
          <div class="dot" :style=" 'left:'+(activeWidth-10)+'px' "
               @mousedown="moveDot($event)">
            <div v-show="isShow">
              <div class="tooltip">{{num}}</div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mySlider',
  props: {
    initNum: {
      type: Number,
      default: 50
    },
    value: {
      type: Number
    },
    tooltip: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShow: this.tooltip,
      name: '',
      activeWidth: Math.round(600 * this.initNum / 100)
    }
  },
  methods: {
    moveDot (e) {
      e.target.focus()
      document.onmousemove = (event) => {
        let left = event.clientX - e.target.parentElement.offsetLeft
        if (!(left < 0 || left > 600)) {
          this.activeWidth = left
          this.$emit('input', this.num)
        }
      }
      document.onmouseup = () => {
        e.target.blur()
        document.onmousemove = null
        document.onmousedown = null
        document.onmouseup = null
      }
    }
  },
  computed: {
    num () {
      return Math.round(100 * this.activeWidth / 600)
    }
  }
}
</script>

<style scoped>
  .slider-warpper{
    margin: 20px 10px;
  }
  .rall{
    position: relative;
    width: 600px;
    height: 10px;
    background: #e4e7ed;
    border-radius: 4px;
  }
  .rall-active {
    position: absolute;
    left: 0;
    height: 10px;
    background: #35aff8;
    border-radius: 4px;
  }
  .dot {
    position: absolute;
    top: -8px;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 3px solid #35aff8;
    border-radius: 50%;
    cursor: pointer;
  }
  .dot:active .tooltip {
    display: block;
  }
  .dot:hover .tooltip {
    display: block;
  }
  .dot:active {
    top: -9px;
    width: 20px;
    height: 20px;
  }
  .tooltip {
    position: absolute;
    display: none;
    top: -33px;
    padding: 5px;
    height: 15px;
    transform: translateX(-15%);
    border-radius: 3px;
    background: #101010;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 15px;
  }
  .tooltip::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 38%;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top-color: #101010;
  }
</style>
