<template>
  <div>
    Board
    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>board_id : {{board_id}} </div>
      <pre>{{board}}</pre>
      <router-link :to="`/b/${board_id}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${board_id}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'


export default {
  data() {
    return {
      board_id: 0,
      loading: false
    }
  },
  computed: {
    ...mapState({
      board: 'board'
    })
  },
  created() {
    this.fetchData();
    this.board_id = this.$route.params.board_id
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ]),
    fetchData() {
      this.loading = true
      this.FETCH_BOARD({id: this.$route.params.board_id})
          .then(() => this.loading = false)
    }
  }
}
</script>

<style>

</style>
