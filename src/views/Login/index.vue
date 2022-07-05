<template>
  <div class="login-container">
    <!-- 顶部 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单页面 -->
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="user.mobile"
        placeholder="请输入手机号"
        :rules="rules.mobile"
        name="mobile"
        required
      >
        <!-- 这里是插槽，用template -->
        <template #left-icon>
          <ToutiaoIcon icon="shouji"></ToutiaoIcon>
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        placeholder="请输入验证码"
        :rules="rules.code"
        required
        type="number"
        maxlength="6"
      >
        <template #left-icon>
          <ToutiaoIcon icon="yanzhengma"></ToutiaoIcon>
        </template>
        <!-- 这里的button是Field输入框的Slots，在插入按钮那里复制 -->
        <template #button>
          <van-count-down
            @finish="isShowCountDown = false"
            v-if="isShowCountDown"
            :time="5000"
            format="ss s"
          />
          <van-button
            v-else
            native-type="button"
            class="send-sms-btn"
            size="small"
            @click="sendSmsCode"
            :loading="isDisabled"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 这里的login是一个封装了的请求方法，必须引入
import { login, getSmsCode } from '@/api/user.js'
import { Toast } from 'vant'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      isDisabled: false,
      isShowCountDown: false,
      user: {
        mobile: '13911111112',
        code: '246810'
      },
      // username: '',
      // password: ''
      rules: {
        mobile: [
          {
            required: true,
            // 校验规则如果不满足的提示消息
            meaaage: '手机号码不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式不对'
          }
        ],
        code: [
          {
            required: true,
            meaaage: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码只能6位'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit () {
      // 表单的校验
      // 这里的login是一个封装了的请求方法，必须在上面引入
      // await后面封装的是promise，只有promise成功了的情况才会继续执行

      // 如果捕获await的错误，用try catch
      try {
        const res = await login(this.user)
        console.log(res)
        Toast.success('登录成功')
      } catch (e) {
        Toast.fail(e?.response?.data?.message || '服务器端错误')
      }
    },
    async sendSmsCode () {
      //
      try {
        await this.$refs.form.validate('mobile')
      } catch (e) {
        console.log(e)
        return
      }
      // 接口错误
      try {
        // 如果接口请求速度很慢，接口获取到结果之前，我的按钮一直可以重复点击（重复发送请求）
        // 希望：接口拿到结果之后才可以进行下一次点击
        this.isDisabled = true
        // 调用获取验证码接口
        await getSmsCode(this.user.mobile)
        // 展示倒计时
        this.isShowCountDown = true
        // 获取成功以后进行提示
        this.$toast.success('发送验证码成功')
      } catch (e) {
        // 如果获取失败了，进行错误的提示
        this.$toast.fail(e.response.data.message || '出错了')
        this.isShowCountDown = false
      } finally {
        this.isDisabled = false
      }
    }
  }
}
</script>
<!-- scoped只在当前组件生效 -->
<style scoped lang="less">
.login-container {
  /deep/.toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 172px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
}
</style>
