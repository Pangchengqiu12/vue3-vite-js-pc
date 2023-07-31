<template>
  <div>
    <button @click="login">登录</button>
    <button @click="login1">登录1</button>
    <button>获取文章</button>
  </div>
</template>

<script setup>
import { demoApi2 } from '../../api/demo'
import { useLogin } from '@/hooks/useLogin'
const { login, login1 } = useLogin()
// import { verify } from '../../utils/utils'
// console.log(verify(15156000556))
async function demoApi() {
  let res = await demoApi2({ id: 123 })
  console.log(res)
}
</script>

<style lang="scss" scoped></style>
