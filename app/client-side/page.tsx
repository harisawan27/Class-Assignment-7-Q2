"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export default function ClientSide() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-blue-600 text-5xl text-center p-10 font-bold">
        Client-Side Data Rendering
      </h1>
      <div className="flex-grow container mx-auto p-8">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        ) : (
          <div className="flex-grow container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover mb-4 rounded"
                />
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-900 text-sm mb-2">
                  {product.description}
                </p>
                <p className="text-gray-900 text-sm mb-2">
                  <strong className="text-black">Category:</strong>{" "}
                  {product.category}
                </p>
                <p className="text-gray-900 text-sm mb-2">
                  <strong className="text-black">Price:</strong> $
                  {product.price}
                </p>
                <div className="flex items-center justify-between text-gray-900 text-sm">
                  <p className="text-yellow-600 font-black">
                    <strong className="text-black font-medium">Rating:</strong>{" "}
                    {product.rating.rate} / 5
                  </p>
                  <p>
                    <strong className="text-black">Reviews:</strong>{" "}
                    {product.rating.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
