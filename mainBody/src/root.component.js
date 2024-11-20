import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

const feed = [
  "https://zenzalepik.github.io/Zalepik_Images/icons/img_icon_gratis_logo_zalepik.svg",
];

// Halaman pertama: HomePage
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of our app!</p>
    </div>
  );
}

// Halaman kedua: ProductPage
function ProductPage() {
  return (
    <div>
      <h1>Product Page3</h1>
      <p>Explore our product listings here!</p>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
    <main style={{ padding: "10px 10vw" }}>
       <Routes>
          {/* Ganti Switch dengan Routes dan penggunaan component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      {feed?.map((val, key) => (
        <div key={key}>
          <img src={val} width="35px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      ))}
    </main>
    </Router>
  );
}