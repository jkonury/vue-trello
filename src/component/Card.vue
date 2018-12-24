<template>
  <div>
    Card
    <div>card_id : {{card_id}} </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      card_id: 0
    }
  },
  watch: {
    '$route'() {
      this.card_id = this.$route.params.card_id
    }
  },
  created() {
    this.card_id = this.$route.params.card_id
  }
}
</script>

<style>

</style>
