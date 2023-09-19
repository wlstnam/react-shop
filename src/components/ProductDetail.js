import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ cart, setCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const addToCart = () => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="flex flex-wrap p-5">
      <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md mx-auto max-h-96 object-cover rounded-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="mb-6">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
