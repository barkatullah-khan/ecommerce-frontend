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
import RecommendedItems from "../components/RecommendedItems";
import { allProducts } from "../Data/products";

// ADDED searchQuery to the props here
const HomePage = ({ onAddToCart, cart, searchQuery, setsearchQuery }) => {
  
  // 1. First, create a master list of products that match the search
  const filteredMasterList = allProducts.filter((product) =>
    product.title.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  // 2. Now, filter your categories from the SEARCHED list
  const homeData = filteredMasterList.filter(item => item.category === "home");
  const electronicsData = filteredMasterList.filter(item => item.category === "electronics");
  const recommendedData = filteredMasterList.filter(item => item.category === "recommended");
  const dealsData = filteredMasterList.filter(item => item.category === "deals");

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* 3. Make sure to pass setSearchQuery to Header in App.jsx (see below) */}
      <Header cart={cart} setsearchQuery={setsearchQuery} />
      <Navbar />

      <main className="max-w-7xl mx-auto lg:px-8 py-6">
        {/* If user is searching, maybe hide the Hero and Deals to show results clearly */}
        {!searchQuery && <Hero />}
        {!searchQuery && <DealsAndOffer items={dealsData} />}

        {/* Home Section - only shows items that match the search */}
        {homeData.length > 0 && (
          <CategorySection
            title="Home and outdoor"
            bannerImg="/item-section.jpg"
            items={homeData}
            onAddToCart={onAddToCart}
          />
        )}

        {/* Electronics Section - only shows items that match the search */}
        {electronicsData.length > 0 && (
          <CategorySection
            title="Consumer electronics and gadgets"
            bannerImg="/mobile2.png"
            items={electronicsData}
            onAddToCart={onAddToCart}
          />
        )}

        {!searchQuery && <InquiryForm />}

        {/* Recommended Items - filtered by search */}
        {recommendedData.length > 0 && (
          <RecommendedItems items={recommendedData} />
        )}

        {/* If NOTHING matches the search */}
        {filteredMasterList.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-500">No products found for "{searchQuery}"</h2>
          </div>
        )}

        {!searchQuery && <ExtraServices />}
        {!searchQuery && <RegionSuppliers />}
      </main>

      <NewsLatter />
      <Footer />
    </div>
  );
};

export default HomePage;