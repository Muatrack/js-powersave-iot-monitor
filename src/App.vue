<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { reactive, ref } from 'vue'
import { fetchData } from './api';

const name = ref('Unknown')
const dbRets = ref('...')
const platformAddress = ref('')

const getName = async () => {
  const res = await fetch('/api/name')
  const data = await res.json()
  name.value = data.name
}

let g_counter:number = 1

const dbRead = async() => {
  // const resp = await fetch('/api/db')
  fetch('/api/db')
  .then( response => response.json() )
  .then( data => {
    dbRets.value = JSON.stringify(data)
  });  
}

const getRemoteServerSets_v2 = ()=>{
  fetchData('/v1/api/system?part=platform')
  .then( resp=>{
    platformAddress.value = resp.data;
    return resp.data;
  })
  .then( data=>{
    console.log('data:', data);
    platformAddress.value = data.data.address
  } )
}

const setRemoteServerAsDev = async ()=>{
  fetch('http://192.168.20.1/v1/api/system', {method:'POST', mode:'cors'})
  .then(response=>response.json())
  .then( data=>{
    console.log(data)
  })
}

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="节能-急救工具" phase=2025-05 />
      
      <div class="buttonlist-style" >

        <!-- <div> {{ dbRets }} </div> -->

        <!-- <button class="green" @click="dbRead()"  > DB1 test </button> -->
        <div class="vview" >
          <div class="hview" >
            <div> 平台地址 </div>
            <view>{{ platformAddress }}</view>
          </div>
        </div>
        <button class="green" @click="getRemoteServerSets_v2()" > 读取平台信息 </button>
        <button class="green" @click="setRemoteServerAsDev()" > 设置为开发平台 </button>
      </div>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>

.vview {
  display: flex;
  flex-direction:row;
}

.hview {
  display: flex;
  flex-direction:column;
}

.buttonlist-style {
  display: flex;
  flex-direction: column;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  color: var(--color-background);
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 1rem 0 0.5rem 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
