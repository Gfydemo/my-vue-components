<template>
  <div class="file_container">
    <label for="file" class="file_select">
      <span v-show="!imgUrl">+</span>
      <img v-show="imgUrl" :src="imgUrl">
    </label>
    <input id="file" name="file" type="file" @change="imgChange" style="display: none">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'img_upload',
  data () {
    return {
      imgUrl: '',
      token: '',
      file: {}
    }
  },
  methods: {
    imgChange (event) {
      this.file = event.target.files[0]
      if (this.file) {
        let formData = new FormData()
        formData.append('file', this.file, this.file.name)
        formData.append('token', this.token)
        axios.post('https://upload-z1.qiniup.com', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          this.imgUrl = res.data.url
          this.$emit('success', this.imgUrl)
        })
      }
    },
    getToken () {
      axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        this.token = res.data.data
      })
    }
  },
  created () {
    this.getToken()
  }
}
</script>

<style scoped>
.file_container{
  position: relative;
  margin-top: 20px;
  height: 100px;
}
.file_select {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  line-height: 100px;
  font-size: 42px;
  font-weight: lighter;
  color: #e1e1e1;
  border: 1px dashed #e1e1e1;
  border-radius: 2px;
}
.file_select:hover {
  border-color: aqua;
  color: aqua;
}
img{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 2px;
}
</style>
