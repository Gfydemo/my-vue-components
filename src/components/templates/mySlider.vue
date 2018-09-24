<template>
    <div>
        <div class="rall">
          <div class="dot"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mySlider',
  data () {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<style scoped>
.rall{
  position: relative;
  width: 600px;
  height: 8px;
  background: #e4e7ed;
  border-radius: 4px;
}
</style>
