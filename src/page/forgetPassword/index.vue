<template>
    <div class="forget-wrap">
        <div class="title">修改密码</div>
        <Step :list="steps" :active="activeStep"></Step>
        <div class="content">
          <div v-if="activeStep === 1">
            <div class="select_type">
              <div class="phone" @click="setPhone"></div>
              <span class="type_text">手机号修改密码</span>
            </div>
            <div class="select_type">
              <div class="email" @click="setEmail"></div>
              <span class="type_text">邮箱修改密码</span>
            </div>
          </div>
          <TypeInput v-if="activeStep === 2" :type="type"
                     @error="goFirstStep"
                     @success="handleSubmit"></TypeInput>
          <div v-if="activeStep === 3" class="three_step">
            <p>请设置新密码：</p>
            <input type="text">
            <p>再次输入新密码：</p>
            <input type="text">
            <br>
            <button @click="resetPassword">确认</button>
          </div>
          <div v-if="activeStep === 4">
            <div class="success"></div>
            <p class="success_text">重置密码成功</p>
          </div>
        </div>
    </div>
</template>

<script>
import Step from './components/step'
import TypeInput from './components/inputType'

export default {
  name: 'index',
  data () {
    return {
      steps: [
        '选择找回方式',
        '身份验证',
        '设置密码',
        '完成'
      ],
      activeStep: 1,
      type: ''
    }
  },
  components: {
    Step,
    TypeInput
  },
  methods: {
    setPhone () {
      this.activeStep++
      this.type = 'phone'
    },
    setEmail () {
      this.activeStep++
      this.type = 'email'
    },
    // 填写成功
    handleSubmit (val) {
      this.activeStep++
    },
    // 不填写
    goFirstStep () {
      this.activeStep = 1
    },
    // 重置密码
    resetPassword () {
      this.activeStep++
    }
  }
}
</script>

<style scoped lang="scss">
.forget-wrap {
  margin: auto;
  box-sizing: border-box;
  border: 1px solid transparent;
  width:900px;
  height:394px;
  background:rgba(255,255,255,1);

  .title {
    margin-top: 24px;
    margin-left: 56px;
    width:64px;
    height:16px;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(81,81,81,1);
    line-height:16px;
  }

  .content {
    width: 100%;
    height: 50%;
    margin-top: 60px;
    .select_type {
      display: inline-block;
      margin: 0 30px;
      vertical-align: middle;
      border: none;
      cursor: pointer;
      outline: none;
      text-align: center;
      .type_text {
        display: inline-block;
        margin-top: 10px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(208,172,86,1);
        line-height:14px;
      }
    }

    .phone {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: auto;
      background: url("imgs/phone_normal.svg");
    }
    .phone:hover {
      background: url("imgs/phone_active.svg");
    }
    .email{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: auto;
      background: url("imgs/email_normal.svg");
    }
    .email:hover {
      background: url("imgs/email_active.svg");
    }
    .success {
      margin: auto;
      width: 40px;
      height: 40px;
      background: url("./imgs/success.svg");
    }
    .success_text {
      margin: auto;
      width:84px;
      height:40px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:40px;
    }
    .three_step {
      margin: auto;
      width: 160px;
      text-align: left;
      white-space: nowrap;
      p {
        height:14px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,155,1);
        line-height:14px;
      }
      input {
        margin: 10px 0;
        padding-left: 5px;
        width:160px;
        height:30px;
        border-radius:2px;
        font-size: 16px;
        border:1px solid rgba(155,155,155,1);
      }
      button {
        width:60px;
        height:30px;
        background:rgba(208,172,86,1);
        outline: none;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
