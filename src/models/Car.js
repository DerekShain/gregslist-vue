export class Car {
  constructor(carData = {}) {
    this.id = carData.id
    this.make = carData.make
    this.model = carData.model
    this.year = carData.year
    this.description = carData.description
    this.price = carData.price
    this.img = carData.img
    this.creatorId = carData.creatorId
    this.creator = carData.creator || {}
  }
}
