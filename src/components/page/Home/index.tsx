import productList from "../../../data/productList.json";
import Button from "../../common/Button";
import ProductDescription from "./ProductDescription";

import cartSlice from "../../../data/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const { cartProductIds } = useSelector((state: any) => state.cart);

  console.log(cartProductIds);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {productList.products.map((product, index) => (
        <div
          key={product.id}
          className="card bg-slate-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:bg-slate-300 transition-all duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-teal-950">
              {product.name}
            </h2>
            <div className="min-h-20">
              <ProductDescription description={product.description} />
            </div>

            <div className="mt-4 text-lg font-bold text-red-950">
              ${product.price}
            </div>
            <div className="flex items-center justify-center">
              {!cartProductIds.includes(product.id) && (
                <Button
                  style="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded"
                  children="Add to cart"
                  onClick={() => dispatch(addToCart(product.id))}
                />
              )}
              {cartProductIds.includes(product.id) && (
                <Button
                  style="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded"
                  children="Remove from cart"
                  onClick={() => dispatch(removeFromCart(product.id))}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
