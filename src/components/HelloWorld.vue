<script setup>
import { ref, onMounted } from 'vue'
import { demoApi } from '@/api/demo.js'

defineProps({
  msg: String,
})
async function demo() {
  await demoApi()
}
let p1 = new Promise(function (resolve, reject) {
  console.log(11)
  reject(1)
})
let p2 = new Promise(function (resolve, reject) {
  console.log(22)
  resolve(2)
})
let p3 = new Promise(function (resolve, reject) {
  console.log(33)
  reject(3)
})

const count = ref(0)
onMounted(async () => {
  Promise.allSettled([p1, p2, p3]).then(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    },
  )
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
