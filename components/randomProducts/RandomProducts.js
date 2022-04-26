import getRandomValueArray from '../../helpers/getRandomValueArray'
import Index from '../cardProduct/Index'

export default function RandomProducts({ products }) {
  const randomProducts = getRandomValueArray(products, 4)

  return <Index products={randomProducts} />
}
