// code stamped 40001

export default function handler(req, res) {
  res.status(200).json(stamped)
}

const stamped = [
  {
    id: 40001,
    name: 'Red printed shirt',
    desc: 'You are looking at the Printed Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Printed Shirt, 100% Cotton Fabric',
    price: 90000,
    rating: 4,
    numReviews: 34,
    type: 'stamped',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC_9006-Editar.png',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/01/DSC_9006-Editar.png',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC_9009-Editar-666x666.jpg'
    ]
  },
  {
    id: 40002,
    name: 'blue printed shirt',
    desc: 'You are looking at the Printed Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Printed Shirt, 100% Cotton Fabric',
    price: 90000,
    rating: 4.2,
    numReviews: 34,
    type: 'stamped',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC_8994-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/02/DSC01327-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC_8999-Editar-666x666.jpg'
    ]
  }
]
