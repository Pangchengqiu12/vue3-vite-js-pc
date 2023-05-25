<template>
  <div>
    <button @click="login">登录</button>
    <button @click="login1">登录1</button>
  </div>
</template>

<script setup>
import { useLogin } from '@/hooks/useLogin'
const { login, login1 } = useLogin()
</script>

<style lang="scss" scoped></style>
