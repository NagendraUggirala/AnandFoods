import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import CategoriesPage from "./components/CategoriesPage";

export default function App(){
  return (
    <div className="min-h-screen bg-anand-500 text-white ">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-full  flex items-center justify-center font-bold"><img  className="w-10 h-10 rounded-full  flex items-center justify-center " src="src/assets/image.png"/></div>
          <div className="text-xl text-black font-bold">AnandFoods</div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="hover:underline  text-black cursor-pointer">AnandFoods Corporate</a>
          <a className="hover:underline  text-black cursor-pointer">Partner with us</a>
          <button className="px-4 py-2 border rounded-full text-black bg-transparent border-white/40">Get the App ↗</button>
          <button className="px-4 py-2 bg-black text-white rounded-full">Sign in</button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Cards />
        <CategoriesPage/>
        
        {/* <footer className="text-black mt-20 mb-10 text-center">
          <small>© {new Date().getFullYear()} AnandFoods</small>
        </footer> */}
      </main>
    </div>
  );
}
