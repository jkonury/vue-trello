<template>
  <div>
    Board
    <div>board_id : {{board_id}} </div>
    <router-link :to="`/b/${board_id}/c/1`">Card 1</router-link>
    <router-link :to="`/b/${board_id}/c/2`">Card 2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board_id: 0
    }
  },
  created() {
    this.board_id = this.$route.params.board_id
  }
}
</script>

<style>

</style>
