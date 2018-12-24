<template>
  <div>
    Board
    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>board_id : {{board_id}} </div>
      <router-link :to="`/b/${board_id}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${board_id}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board_id: 0,
      loading: false
    }
  },
  created() {
    this.fetchData();
    this.board_id = this.$route.params.board_id
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.board_id = this.$route.params.board_id
        this.loading = false;
      }, 500)
    }
  }
}
</script>

<style>

</style>
