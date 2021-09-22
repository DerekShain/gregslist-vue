<template>
  <div class="container-fluid px-0">
    <div class="row py-2 bg-dark mb-4 top-bar">
      <div class="col-12 text-end">
        <button class="btn text-success lighten-30 selectable" data-bs-toggle="modal" data-bs-target="#car-form">
          Add a Listing
        </button>
      </div>
    </div>
    <div class="row">
      <!-- REVIEW PROPS -->
      <Car v-for="car in cars" :key="car.id" :car="car" class="col-lg-3" />
    </div>

    <Modal id="car-form">
      <template #modal-title>
        Add your 🚗
      </template>
      <template #modal-body>
        <CarForm />
      </template>
    </Modal>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { carsService } from '../services/CarsService.js'

export default {
  setup() {
    onMounted(() => {
      carsService.getCars()
    })

    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style>

</style>
