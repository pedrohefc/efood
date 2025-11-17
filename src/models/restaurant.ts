class Restaurant {
  image: string
  infos: string[]
  title: string
  grade: number
  description: string
  button: string
  id: number

  constructor(
    image: string,
    infos: string[],
    title: string,
    grade: number,
    description: string,
    button: string,
    id: number
  ) {
    this.image = image
    this.infos = infos
    this.title = title
    this.grade = grade
    this.description = description
    this.button = button
    this.id = id
  }
}

export default Restaurant
