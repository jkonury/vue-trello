<template>
  <div class="login">
    <h2>Login to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="text" class="form-control" name="email" v-model="email" autofocus placeholder="e.g., test@test.com">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="123123">
      </div>
      <button class="btn" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">Login</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>

import {auth, setAuthInHeader} from '../api'
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    onSubmit() {
      this.LOGIN({
        email: this.email,
        password: this.password
      }).then(data => {
        this.$router.push(this.rPath)
      }).catch(err => {
        this.error = err.data.error
      })
    }
  }
}
</script>
<style>
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}
</style>

