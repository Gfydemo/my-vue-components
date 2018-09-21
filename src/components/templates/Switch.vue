<template>
    <div>

    </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    activeText: '',
    inactiveText: '',
    vaule: ''
  },
  data () {
    return {
      active: this.activeText,
      inactive: this.inactiveText,
      isdir: this.value
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

</style>
