<template>
  <div>
    Board
    <div>board_id : {{board_id}} </div>
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
