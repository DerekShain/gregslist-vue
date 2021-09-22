<template>
  <div v-if="car" class="py-4">
    <div class="d-flex flex-wrap w-100">
      <Car :car="car" class="car-details" />
      <div class="ms-4 flex-grow-1">
        <p>
          <b>Contact Seller</b>
        </p>
        <div class="d-flex clip-text align-items-center">
          <img :src="car.creator.picture" alt="" class="rounded-circle" height="64">
          <h4 class="ms-3">
            {{ car.creator.name }}
          </h4>
        </div>
        <div v-if="car.creatorId === account.id">
          <p class="my-3">
            <b>Listing Controls</b>
          </p>
          <div class="">
            <button class="btn text-dark lighten-20" @click="remove(car)">
              <b>
                Remove Listing
              </b>
            </button>
            <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#edit-modal">
              <b>
                Edit
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal id="edit-modal">
      <template #modal-title>
        {{ car.year }} {{ car.make }} - {{ car.model }}
      </template>
      <template #modal-body>
        <!-- REVIEW PROPS -->
        <!-- drawCarForm(car) -->
        <CarForm :car="car" />
      </template>
    </Modal>
  </div>
  <div v-else>
    loading.....
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { carsService } from '../services/CarsService.js'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { router } from '../router.js'
export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      carsService.getCarById(route.params.carId)
    })

    return {
      account: computed(() => AppState.account),
      car: computed(() => AppState.car),
      async remove(car) {
        try {
          const yes = await Pop.confirm('Are you really sure?')
          if (!yes) { return }
          await carsService.removeCar(car.id)
          router.push({ name: 'Cars' })
        } catch (e) {
          Pop.toast(e.message)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.car-details{
  max-width: 50vw;
}

</style>
