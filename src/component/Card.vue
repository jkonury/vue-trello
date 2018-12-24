<template>
  <div>
    Card
    <div v-if="loading">loading card ...</div>
    <div v-else>card_id : {{card_id}} </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      card_id: 0,
      loading: true
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.card_id = this.$route.params.card_id
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>
