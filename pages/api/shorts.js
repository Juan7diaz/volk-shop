// code short 20001

export default function handler(req, res) {
  res.status(200).json(shorts)
}

const shorts = [
  {
    id: 20001,
    name: 'White Shorts',
    desc: 'You are looking at Basic Bermuda Shorts for Men, with this garment you will not only look great, you will also be very comfortable thanks to its Spandex fibers, its basic design allows you to combine it with various garments to create incredible outfits.',
    price: 57700,
    rating: 2.5,
    numReviews: 4,
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/06/DSC_8958.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/06/DSC_8958.jpg',
      'https://jch.com.co/wp-content/uploads/2021/06/DSC_9267.jpg'
    ]
  },
  {
    id: 20002,
    name: 'Black Shorts',
    desc: 'You are looking at Basic Bermuda Shorts for Men, with this garment you will not only look great, you will also feel very comfortable thanks to its Spandex fibers, its basic design allows you to combine it with various garments to create incredible outfits.',
    price: 57700,
    rating: 4.2,
    numReviews: 34,
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/02/DSC01327-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/02/DSC01327-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/02/DSC09875-Editar.jpg'
    ]
  },
  {
    id: 20003,
    name: 'Khaki Shorts',
    desc: 'You are looking at Basic Bermuda Shorts for Men, with this garment you will not only look great, you will also feel very comfortable thanks to its Spandex fibers, its basic design allows you to combine it with various garments to create incredible outfits.',
    price: 57700,
    rating: 4.2,
    numReviews: 34,
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/06/DSC01343-Editar-web.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/06/DSC01343-Editar-web.jpg',
      'https://jch.com.co/wp-content/uploads/2021/06/DSC01293-Editar-666x666.jpg'
    ]
  },
  {
    id: 20004,
    name: 'Green Shorts',
    desc: 'You are looking at Basic Bermuda Shorts for Men, with this garment you will not only look great, you will also feel very comfortable thanks to its Spandex fibers, its basic design allows you to combine it with various garments to create incredible outfits.',
    price: 57700,
    rating: 4.2,
    numReviews: 34,
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/02/DSC01339-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/02/DSC01339-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/02/DSC09890-Editar.jpg'
    ]
  },
  {
    id: 20005,
    name: 'Blue Shorts',
    desc: 'You are looking at Basic Bermuda Shorts for Men, with this garment you will not only look great, you will also feel very comfortable thanks to its Spandex fibers, its basic design allows you to combine it with various garments to create incredible outfits.',
    price: 57700,
    rating: 4.2,
    numReviews: 34,
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/02/DSC01335-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/02/DSC01335-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/02/DSC09869-Editar.jpg'
    ]
  }
]
