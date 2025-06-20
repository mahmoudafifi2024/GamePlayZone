
import Box from "@mui/material/Box";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Utility/Pagination";

export default function AdminAllProductsPage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AdminAllProducts />
        <Box sx={{ mt: 4 }}>
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
}
