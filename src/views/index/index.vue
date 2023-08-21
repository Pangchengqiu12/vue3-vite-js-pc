<template>
  <div>
    <button @click="login">登录</button>
    <!-- <button @click="login1">登录1</button> -->
    <button>获取文章</button>
  </div>
</template>

<script setup>
import { demoApi } from '../../api/demo';
// import { useLogin } from '@/hooks/useLogin'
// const { login, login1 } = useLogin()
// import { verify } from '../../utils/utils'
// console.log(verify(15156000556))
async function login() {
  let res = await demoApi({ username: 'liwei', password: 'liwei' });
  console.log(res);
}
</script>

<style lang="scss" scoped></style>
