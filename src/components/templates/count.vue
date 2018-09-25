<template>
    <div class="count">
      <button :class="disableLeft ? 'disable-btn count-btn' : 'count-btn' " :disabled="disableLeft" @click="reduce">-</button>
      <input class="count-show" type="text" v-model="number">
      <button :class="disableRight ? 'disable-btn count-btn' : 'count-btn'" :disabled="disableRight" @click="add">+</button>
    </div>
</template>

<script>
export default {
  name: 'count',
  props: {
    num: {
      type: Number
    },
    maxNum: {
      type: Number,
      default: Math.max()
    },
    minNum: {
      type: Number,
      default: Math.min()
    }
  },
  data () {
    return {
      number: this.num,
      maxNumber: this.maxNum,
      minNumber: this.minNum,
      disableLeft: false,
      disableRight: false
    }
  },
  methods: {
    reduce () {
      this.number--
      this.$emit('count', this.number)
    },
    add () {
      this.number++
      this.$emit('count', this.number)
    }
  },
  watch: {
    number (value, oldValue) {
      if (value <= this.minNumber) {
        this.number = this.minNumber
        this.disableLeft = true
      } else if (value >= this.maxNumber) {
        this.number = this.maxNumber
        this.disableRight = true
      } else {
        this.disableLeft = false
        this.disableRight = false
      }
    }
  },
  created () {
    if (this.number <= this.minNumber) {
      this.disableLeft = true
    } else if (this.number >= this.maxNumber) {
      this.disableRight = true
    }
  }
}
</script>

<style scoped>
.count {
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 200px;
  height: 50px;
  padding: 0;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  overflow: hidden;
}
.count:hover {
  border-color: #409eff;
}
.count-show {
  font-size: 16px;
  text-align: center;
  height: 50px;
  border: none;
  width: 100px;
  outline: none;
}
.count-btn {
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  background: #409eff;
  transition: all ease-in .2s;
}
.count-btn:active {
  background: #66b1ff;
}
.disable-btn {
  background: #e4e7ed;
  cursor: not-allowed;
  transition: all ease-in .2s;
}
</style>
