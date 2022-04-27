export default function getRandomProducts(array, cant = 4) {
  const arrayRandom = []
  const arrayIndex = []

  if (cant > array.length) {
    console.error('The quantity entered exceeds the length of the array')
    return ['The quantity entered exceeds the length of the array']
  } else {
    for (let index = 0; index < cant; index++) {
      const rand = Math.floor(Math.random() * array.length)
      if (!arrayIndex.includes(rand)) {
        arrayRandom.push(array[rand])
        arrayIndex.push(rand)
      } else {
        index--
      }
    }

    return arrayRandom
  }
}
