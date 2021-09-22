<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="make" class="">Make:</label>
      <select v-model="editable.make" name="make" id="make" required class="form-control">
        <option disabled selected value="">
          Please Choose your car make
        </option>
        <option>honda</option>
        <option>hyundai</option>
        <option>tesla</option>
        <option>toyota</option>
        <option>other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="model" class="">Model:</label>
      <input v-model="editable.model"
             type="text"
             class="form-control"
             name="model"
             id="model"
             required
      >
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      >
    </div>
    <div class="form-group">
      <label for="year" class="">year:</label>
      <input v-model="editable.year" type="year" class="form-control" name="year" id="year">
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea v-model="editable.description"
                type="text"
                class="form-control"
                name="description"
                id="description"
                rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input v-model="editable.img"
             type="url"
             class="form-control"
             name="img"
             id="img"
             required
      >
    </div>
    <div class="button-group my-3">
      <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn btn-secondary">
        cancel
      </button>
      <button type="submit" class="btn btn-primary">
        submit
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { Car } from '../models/Car.js'
import { watchEffect } from '@vue/runtime-core'
import { carsService } from '../services/CarsService.js'
import Pop from '../utils/Pop.js'
export default {
  // REVIEW PROPS
  props: {
    car: { type: Car, default: () => new Car() }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.car }
    })

    return {
      editable,
      async handleSubmit() {
        // editable.value.id
        //   ? await carsService.editCar(editable.value)
        //   : await carsService.createCar(editable.value)
        try {
          if (editable.value.id) {
            await carsService.editCar(editable.value)
          } else {
            await carsService.createCar(editable.value)
          }
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }

    }
  }
}
</script>

<style>

</style>
