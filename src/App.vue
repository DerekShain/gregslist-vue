<template>
  <main class="container-fluid">
    <div class="row">
      <Sidebar class="col-md-2" />
      <div class="col-md-10 viewport">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.sidebar{
  height: 100vh;
}
.viewport{
  height: 100vh;
  overflow-y: auto;
}
</style>
