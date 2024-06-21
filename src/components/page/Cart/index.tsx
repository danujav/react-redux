import productList from "../../../data/productList.json";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../../data/cartSlice";
import EmptyCart from "../../../assets/EmptyCart.jpg";
import Button from "../../common/Button";

export default function Cart() {
  const { cartProductIds } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const { removeFromCart, clearAllItems } = cartSlice.actions;

  const cartProducts = productList.products.filter((product) =>
    cartProductIds.includes(product.id)
  );

  return (
    <div className="row gap-4 p-5">
      <div className="grid grid-cols-2 ml-5 mr-5">
        <p className="text-3xl">Products in cart...</p>
        <div className="flex justify-end">
        {cartProducts.length > 0 && (<Button
          style="w-1/2 px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded"
          children="Checkout"
          onClick={() => dispatch(clearAllItems())}
        />)}
        </div>
      </div>

      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="card m-5 p-5 bg-slate-200 shadow-lg overflow-hidden hover:shadow-xl hover:bg-slate-300 transition-all duration-300"
        >
          <div className="grid grid-cols-2">
            <div className="flex flex-row">
              <img
                src={product.image}
                alt={product.name}
                className="m-5 mt-8 w-40 h-28 object-cover"
              />
              <div className="pl-5 flex flex-col max-w-96 p-3">
                <h2 className="text-xl font-semibold text-teal-950">
                  {product.name}
                </h2>
                <div className="min-h-20">
                  <p className="text-teal-900">{product.description}</p>
                </div>

                <div className="mt-4 text-lg font-bold text-red-950">
                  ${product.price}
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <i
                onClick={() => dispatch(removeFromCart(product.id))}
                className="hover:text-red-700 hover:cursor-pointer fa-regular fa-rectangle-xmark text-2xl text-black"
              ></i>
            </div>
          </div>
        </div>
      ))}
      {cartProducts.length == 0 && (
        <div className="h-screen flex justify-center">
          <div className="bg-slate-50 shadow-lg overflow-hidden flex flex-col items-center h-96 w-1/2">
            <p className="m-5 text-3xl">Empty cart...</p>
            <img
              alt="empty photo"
              src={EmptyCart}
              className=" w-1/2 h-60 object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
