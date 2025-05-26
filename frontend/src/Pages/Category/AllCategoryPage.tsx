import CategoryContainer from "../../Components/Category/CategoryContainer";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import Pagination from "../../Components/Utility/Pagination";

export default function AllCategoryPage() {
return (
    <div>
    <CategoryHeader />
    <CategoryContainer />
    <Pagination pageCount={0} />
    </div>
)
}
