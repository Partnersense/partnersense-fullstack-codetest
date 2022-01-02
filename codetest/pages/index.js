import ProductListing from '../components/elements/productListing/'
import Hero from "../components/elements/Hero/Index"
import * as Constants from '../data/constants'

export default function Home() {

  return (
    <>
        <Hero/>
        <ProductListing/>
        </>
  )
}

export function getAllProductIds() {

  const products = Constants.products;
  return products.map(product => {
    return {
      params: {
        PDP: product.id.toString()
      }
    }
  })
}