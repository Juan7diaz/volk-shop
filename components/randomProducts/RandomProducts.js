import getRandomProducts from '../../helpers/getRandomProducts'
import Index from '../cardProduct/Index'

export default function RandomProducts({ products }) {
  const randomProducts = getRandomProducts(products, 4)

  return <Index products={randomProducts} />
}
