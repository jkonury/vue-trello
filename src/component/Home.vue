<template>
  <div>
    Home
    <div>
      <div class="home-title">Personal Board</div>
      <div class="board-list" ref="boardList">
        <div class="board-item" v-for="board in boards" :key="board.id" :data-bgcolor="board.bgColor" ref="boardItem">
          <router-link :to="`/b/${board.id}`">
            <div class="board-item-title">{{board.title}}</div>
          </router-link>
        </div>
        <div class="board-item board-item-new">
          <a href="" @click.prevent="SET_IS_ADD_BOARD(true)" class="new-board-btn">
            Create new board...
          </a>
        </div>
      </div>
    </div>
    <AddBoard v-if="isAddBoard"/>
  </div>
</template>

<script>
import AddBoard from './AddBoard'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
    }
  },
  computed:{
    ...mapState({
      isAddBoard: 'isAddBoard',
      boards: 'boards'
    }),
  },
  created() {
    this.fetchData()
    this.SET_THEME()
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD',
      'SET_THEME'
    ]),
    ...mapActions([
      'FETCH_BOARDS'
    ]),
    fetchData() {
      this.loading = true

      this.FETCH_BOARDS().finally(_ => {
        this.loading = false
      })
    }
  }
}
</script>
<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>

