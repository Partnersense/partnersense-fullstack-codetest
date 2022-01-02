import ProductDetails from '../../components/elements/productDetails'
import { getAllProductIds, getProductData } from '../index'
import * as Constants from '../../data/constants'

export default function PDP({ productData }) {

  return (
    <ProductDetails product={productData} />
  )
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const productData = Constants.products.find(x => x.id.toString() === params.PDP)
  return {
    props: {
      productData
    }
  }
}