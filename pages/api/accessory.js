// code accessory 10001

export default function handler(req, res) {
  res.status(200).json(accessory)
}

const accessory = [
  {
    id: 10001,
    name: 'Beanie Red Wine',
    desc: 'Beanie 100% knitted in premium acrylic wool.',
    price: 30000,
    rating: 4.2,
    numReviews: 34,
    type: 'accessory',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/03/DSC03610-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03610-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03606-Editar.jpg'
    ]
  },
  {
    id: 10002,
    name: 'Beanie Palo Rosa',
    desc: 'Beanie 100% knitted in premium acrylic wool.',
    price: 30000,
    rating: 4.2,
    numReviews: 34,
    type: 'accessory',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/03/DSC03600-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03600-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03598-666x666.jpg'
    ]
  },
  {
    id: 10003,
    name: 'Black Beanie',
    desc: 'Beanie 100% knitted in premium acrylic wool.',
    price: 30000,
    rating: 4.2,
    numReviews: 34,
    type: 'accessory',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/03/DSC03619-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03619-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03622-Editar.jpg'
    ]
  }
]
