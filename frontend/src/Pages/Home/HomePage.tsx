import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';


export default function HomePage() {
return (
    <div>
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title='Amazing Products' btntitle='See more' pathText='/products'/>
    <DiscountSection/>
    <BrandFeatured/>
    </div>
)
}
