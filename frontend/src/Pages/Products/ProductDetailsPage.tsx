import CategoryHeader from "../../Components/Category/CategoryHeader"
import ProductDetails from "../../Components/Products/ProductDetails"
import CardProductsContainer from "../../Components/Products/CardProductsContainer"
import RateContainer from "../../Components/Rate/RateContainer"
export default function ProductDetailsPage() {
  return (
    <div>
        <CategoryHeader/>
        <ProductDetails/>
        <RateContainer/>
        <CardProductsContainer/>
    </div>
  )
}
