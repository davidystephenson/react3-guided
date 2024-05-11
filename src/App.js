import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import ProductsListPage from "./pages/ProductsListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsListPage from "./pages/ProductPage";
// import UserCartPage from "./pages/UserCartPage";
import categories from "./categories";
import users from "./users";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UsersListPage from "./pages/admin_pages/UsersListPage";
import CategoriesListPage from "./pages/admin_pages/CategoriesListPage";
import AddCategoryPage from "./pages/admin_pages/AddCategoryPage";
import AddUserPage from "./pages/admin_pages/AddUserPage";
import AdminProductsListPage from "./pages/admin_pages/AdminProductsListPage";
import AddProductPage from "./pages/admin_pages/AddProductPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<ProductsListPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<SignupPage />} />
            <Route path='/profile' element={<UserProfilePage />} />
            <Route path='/admin/users' element={<UsersListPage />} />
            <Route path='/admin/categories' element={<CategoriesListPage />} />
            <Route path='/admin/products' element={<ProductsListPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/admin/categories' element={<CategoriesListPage />} />
            <Route path='/admin/category/new' element={<AddCategoryPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
