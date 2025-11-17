class RestaurantPerfil {
  image: string
  title: string
  description: string
  button: string
  id: number

  constructor(
    image: string,
    title: string,
    description: string,
    button: string,
    id: number
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.button = button
    this.id = id
  }
}

export default RestaurantPerfil
