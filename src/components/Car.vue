<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'Car', params: { carId: car.id }}">
      <div class="card selectable">
        <!-- REVIEW PROPS -->
        <img :src="car.img" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>{{ car.year }} {{ car.make }} - {{ car.model }}</span>
            <span>${{ car.price }}</span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js'
import { Car } from '../models/Car.js'

export default {
  // REVIEW PROPS
  props: {
    car: { type: Car, required: true }
  },
  setup(props) {
    return {
      deleteCar() {
        logger.log('working?')
      }
    }
  }
}
</script>

<style>

</style>
