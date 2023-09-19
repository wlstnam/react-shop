import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../api/fakestore";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetchProducts().then((response) => {
      if (categoryName && categoryName !== "all") {
        setProducts(
          response.data.filter((product) => product.category === categoryName)
        );
      } else {
        setProducts(response.data);
      }
    });
  }, [categoryName]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mb-8 mt-4 space-x-4">
          <Link
            to="/category/all"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            All
          </Link>
          <Link
            to="/category/electronics"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Electronics
          </Link>
          <Link
            to="/category/jewelery"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Jewelry
          </Link>
          <Link
            to="/category/men's clothing"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Men's Clothing
          </Link>
          <Link
            to="/category/women's clothing"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Women's Clothing
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {products.map((product) => (
          <div key={product.id} className="border p-3 rounded-lg shadow-md">
            <div className="w-full h-52 overflow-hidden rounded-lg mb-3 p-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="truncate text-center mb-1">
              <Link
                to={`/product/${product.id}`}
                className="hover:underline text-blue-500"
              >
                {product.title}
              </Link>
            </h3>
            <p className="text-center text-xl font-semibold mb-2">
              ${product.price}
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
