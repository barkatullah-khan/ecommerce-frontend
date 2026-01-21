// src/pages/HomePage.jsx
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import '../App.css';
import DealsAndOffer from "../components/DealsAndOffer";
import CategorySection from "../components/CategorySection";
import InquiryForm from "../components/InquiryForm"
import ExtraServices from "../components/ExtraServices";
import RegionSuppliers from "../components/RegionSuppliers";
import NewsLatter from "../components/NewsLatter";
import RecommendedItems from "../components/RecommendedItems"; // 1. Ensure this is imported
import { allProducts } from "../Data/products"; // 2. Named import with { }

const HomePage = ({ onAddToCart,cart }) => {
  
  // --- 3. DEFINE DATA BEFORE RETURN ---
  // This solves the "not defined" error
  const homeData = allProducts.filter(item => item.category === "home");
  const electronicsData = allProducts.filter(item => item.category === "electronics");
  const recommendedData = allProducts.filter(item => item.category === "recommended");
  const dealsData = allProducts.filter(item => item.category === "deals");
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header cart={cart} />
      <Navbar />

      <main className="max-w-7xl mx-auto lg:px-8 py-6">
        <Hero />
        <DealsAndOffer items={dealsData} />

        {/* Home Section */}
        <CategorySection
          title="Home and outdoor"
          bannerImg="/item-section.jpg"
          items={homeData}
          onAddToCart={onAddToCart}
        />

        {/* Electronics Section */}
        <CategorySection
          title="Consumer electronics and gadgets"
          bannerImg="/mobile2.png"
          items={electronicsData}
          onAddToCart={onAddToCart}
        />

        <InquiryForm />

        {/* 4. USE RECOMMENDED ITEMS COMPONENT */}
        {/* Pass the data we defined above as a prop */}
        <RecommendedItems items={recommendedData} />

        <ExtraServices />
        <RegionSuppliers />

      </main>

      <NewsLatter />


      <Footer />

    </div>
  );
};

export default HomePage;

