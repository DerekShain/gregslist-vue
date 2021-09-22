<template>
  <div class="text-white py-4">
    <div class="clip-text d-flex justify-content-between" v-if="account.id">
      <img :src="account.picture" alt="" class="rounded" height="45">
      <button class="btn selectable text-danger lighten-30" @click="logout" title="Logout">
        <i class="mdi mdi-power f-20"></i>
      </button>
    </div>
    <div v-else>
      <button class="btn selectable text-success lighten-30" @click="login">
        <b>
          Login
        </b>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithRedirect()
      },
      async logout() {
        const yes = await Pop.confirm('Are you sure you want to logout', '', 'warning')
        if (!yes) { return }
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>

</style>
