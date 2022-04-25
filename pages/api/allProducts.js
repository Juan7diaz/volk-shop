// code accessory 10001

export default function handler(req, res) {
  res.status(200).json(allProducts)
}

const allProducts = [
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
  },
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
  },
  {
    id: 30001,
    name: 'White Bowling Shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2020/06/DSC09674-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2020/06/DSC09674-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/02/DSC09679-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2021/01/DSC00111-Editar.jpg'
    ]
  },
  {
    id: 30002,
    name: 'Black bowling shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2020/06/DSC09734-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2020/06/DSC09734-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/01/DSC09756-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/01/DSC00127-Editar.jpg'
    ]
  },
  {
    id: 30003,
    name: 'Bowling shirt mint green',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/02/DSC02813-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02813-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03032-Editar.png',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02814-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02822-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03041-Editar-666x666.jpg'
    ]
  },
  {
    id: 30004,
    name: 'Pink bowling shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2020/06/DSC09726-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2020/06/DSC09726-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/01/DSC00113-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2021/01/DSC09733-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2020/12/foto-nosotros-666x833.jpg'
    ]
  },
  {
    id: 30001,
    name: 'Blue bowling shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/02/DSC02898-Editar-1.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02898-Editar-1.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02902-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02910-Editar.jpg'
    ]
  },
  {
    id: 30001,
    name: 'Red bowling shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/02/DSC02914-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02914-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03089-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC02917-Editar-2-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03079-Editar.jpg'
    ]
  },
  {
    id: 30001,
    name: 'Green bowling shirt',
    desc: 'You are looking at the Bowling Shirt, a retro touch that will make you look cool, how about rolling up the sleeves? try it with some Basic Jeans',
    price: 72000,
    rating: 4.5,
    numReviews: 4,
    type: 'bowling',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/10/DSC02881-Editar-2.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/10/DSC02881-Editar-2.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03020-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/10/DSC02884-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03024-Editar.jpg'
    ]
  },
  {
    id: 40001,
    name: 'Red printed shirt',
    desc: 'You are looking at the Printed Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Printed Shirt, 100% Cotton Fabric',
    price: 90000,
    rating: 2.5,
    numReviews: 4,
    type: 'short',
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
    type: 'short',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC_8994-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/02/DSC01327-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC_8999-Editar-666x666.jpg'
    ]
  },
  {
    id: 50001,
    name: 'White Mao Shirt',
    desc: 'You are looking at the Mao Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Mao Shirt, 100% Viscose Fabric',
    price: 75000,
    rating: 4.5,
    numReviews: 4,
    type: 'mao',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/08/DSC01971-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/08/DSC01971-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/10/DSC01981-Editar-666x666.jpg'
    ]
  },
  {
    id: 50002,
    name: 'Blue Mao Shirt',
    desc: 'You are looking at the Mao Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Mao Shirt, 100% Viscose Fabric',
    price: 75000,
    rating: 4.5,
    numReviews: 4,
    type: 'mao',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/03/DSC03572-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03572-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03577-Editar-666x666.jpg'
    ]
  },
  {
    id: 50004,
    name: 'Red Mao Shirt',
    desc: 'You are looking at the Mao Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Mao Shirt, 100% Viscose Fabric',
    price: 75000,
    rating: 4.5,
    numReviews: 4,
    type: 'mao',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/04/DSC03581-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/04/DSC03581-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/04/DSC03584-Editar-666x666.jpg'
    ]
  },
  {
    id: 50003,
    name: 'Beige Mao Shirt',
    desc: 'You are looking at the Mao Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Mao Shirt, 100% Viscose Fabric',
    price: 75000,
    rating: 4.5,
    numReviews: 4,
    type: 'mao',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/02/DSC03565-Editar-2.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03565-Editar-2.jpg',
      'https://jch.com.co/wp-content/uploads/2022/02/DSC03567-Editar-2.jpg'
    ]
  },
  {
    id: 50005,
    name: 'Black Mao Shirt',
    desc: 'You are looking at the Mao Shirt, a fresh and loose design, very comfortable, ideal for basic outfits Mao Shirt, 100% Viscose Fabric',
    price: 75000,
    rating: 4.5,
    numReviews: 4,
    type: 'mao',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2021/08/DSC01958-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2021/08/DSC01958-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2021/10/DSC01961-Editar-666x666.jpg'
    ]
  },
  {
    id: 60001,
    name: 'Blue and White Striped Shirt',
    desc: 'You are looking at the Striped Shirt, a retro touch that will make you look cool, how about you roll up the sleeves? try it with some Basic Jeans. 100% Viscose Rayon fabric, it is a fresh, light and soft to the touch fabric.',
    price: 90000,
    rating: 4.5,
    numReviews: 34,
    type: 'striped',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC02984-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/01/DSC02984-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC03106-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC03099-Editar-666x666.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03107-Editar.jpg'
    ]
  },
  {
    id: 60002,
    name: 'Green and White Striped Shirt',
    desc: 'You are looking at the Striped Shirt, a retro touch that will make you look cool, how about you roll up the sleeves? try it with some Basic Jeans. 100% Viscose Rayon fabric, it is a fresh, light and soft to the touch fabric.',
    price: 90000,
    rating: 4.5,
    numReviews: 34,
    type: 'striped',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC02990-Editar.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/01/DSC02990-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC03112-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03113-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03127-Editar-666x666.jpg'
    ]
  },
  {
    id: 60003,
    name: 'Black and White Striped Shirt',
    desc: 'You are looking at the Striped Shirt, a retro touch that will make you look cool, how about you roll up the sleeves? try it with some Basic Jeans. 100% Viscose Rayon fabric, it is a fresh, light and soft to the touch fabric.',
    price: 90000,
    rating: 4.5,
    numReviews: 34,
    type: 'striped',
    imageURLPrimary: 'https://jch.com.co/wp-content/uploads/2022/01/DSC02995-Editar-2.jpg',
    imgageURLsecodary: [
      'https://jch.com.co/wp-content/uploads/2022/01/DSC02995-Editar-2.jpg',
      'https://jch.com.co/wp-content/uploads/2022/01/DSC03139-Editar.jpg',
      'https://jch.com.co/wp-content/uploads/2022/03/DSC03142-Editar-666x666.jpg'
    ]
  }
]
