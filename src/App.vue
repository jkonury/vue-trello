<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './component/Navbar'

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
