import React from "react";
import CartTable from "./_components/CartTable";

const Cartpage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div>Home/Cart</div>

      <div className="mx-[12.5rem]">
        {/* table */}
        <CartTable />

        {/* summary */}
        <NavigationButtons />
        <div className="flex w-full justify-between">
          <CouponOption />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

function CartSummary() {
  return (
    <div className="border flex-1 border-Button px-3 py-4 text-Button max-w-[470px]">
      <h3 className="title-20-medium py-4">Cart Total</h3>
      <ul>
        <li className="py-2 border-b title-16-regular border-Button border-opacity-50 flex justify-between items-center">
          <span>Subtotal</span>
          <span>204</span>
        </li>
        <li className="py-2 title-16-regular border-b border-Button border-opacity-50 flex justify-between items-center">
          <span>Shipping</span>
          <span>204</span>
        </li>
        <li className="py-2 title-16-regular  flex justify-between items-center">
          <span>Total</span>
          <span>204</span>
        </li>
      </ul>
      <div className="text-center">
        <button className="bg-Button2 px-5 py-3 text-primary title-16 rounded-md medium">
          Process to checkout
        </button>
      </div>
    </div>
  );
}

const NavigationButtons = () => {
  return (
    <div className="w-full flex-1 flex justify-between my-6">
      <button className="border capitalize border-Button border-opacity-50 text-Button px-5 py-3 title-16 rounded-md medium">
        Return to shop
      </button>
      <button className="border capitalize border-Button border-opacity-50 text-Button px-5 py-3 title-16 rounded-md medium">
        Process to checkout
      </button>
    </div>
  );
};

const CouponOption = () => {
  return (
    <div className="flex items-start text-Button ">
      <div className="flex items-center gap-[1rem]">
        <input
          type="text"
          placeholder="Coupon code"
          className="border flex-[2] border-Button rounded-md border-opacity-50 px-5 py-3"
        />
        <button className="border capitalize flex-1 bg-Button2   border-Button border-opacity-50 text-primary px-7 py-3 title-16 rounded-md medium">
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
