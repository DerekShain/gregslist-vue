import { AppState } from '../AppState.js'
import { Car } from '../models/Car.js'
import { api } from './AxiosService.js'

class CarsService {
  async getCars() {
    AppState.cars = []
    const res = await api.get('api/cars')
    AppState.cars = res.data.map(c => new Car(c))
  }

  async getCarById(carId) {
    AppState.car = null
    const res = await api.get(`api/cars/${carId}`)
    AppState.car = new Car(res.data)
  }

  // NOTE passes in the entire car object not just the id
  async createCar(car) {
    const res = await api.post('api/cars', car)
    AppState.cars.push(new Car(res.data))
  }

  // NOTE passes in the entire car object not just the id
  async editCar(car) {
    const res = await api.put(`api/cars/${car.id}`, car)
    AppState.car = new Car(res.data)
  }

  async removeCar(carId) {
    await api.delete(`api/cars/${carId}`)
    AppState.car = null
    AppState.cars.filter(c => c.id !== carId)
  }
}

export const carsService = new CarsService()
