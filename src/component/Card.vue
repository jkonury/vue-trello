<template>
  <Modal>
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input type="text" class="form-control" :value="card.title" :readonly="!toggleTitle"
          @click="toggleTitle = true"
          @blur="onBlurTitle"
          ref="inputTitle"
        >
      </div>
      <a href="" @click.prevent="onClose" class="modal-close-btn">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea class="form-control" cols="30" rows="3" placeholder="Add a more detailed description..."
        :readonly="!toggleDesc"
        @click="toggleDesc = true"
        @blur="onBlurDesc"
        ref="inputDesc"
        v-model="card.description"
      ></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>

</template>

<script>
import Modal from './Modal'
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Modal
  },
  data() {
    return {
      toggleTitle: false,
      toggleDesc: false
    }
  },
  computed: {
    ...mapState({
      card: 'card',
      board: 'board'
    })
  },
  created() {
    this.fetchCard()
  },
  methods: {
    ...mapActions([
      'FETCH_CARD',
      'UPDATE_CARD'
    ]),
    onClose() {
      this.$router.push(`/b/${this.board.id}`)
    },
    fetchCard() {
      const id = this.$route.params.card_id
      this.FETCH_CARD(id)
    },
    onBlurTitle() {
      this.toggleTitle = false
      const title = this.$refs.inputTitle.value.trim()

      if (!title) return

      this.UPDATE_CARD({id: this.card.id, title})
        .then(() => this.fetchCard())
    },
    onBlurDesc() {
      this.toggleDesc = false
      const title = this.$refs.inputTitle.value.trim()
      const description = this.$refs.inputDesc.value.trim()
      if (!description) return

      this.UPDATE_CARD({id: this.card.id, title, description})
        .then(() => this.fetchCard())
    }
  }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
