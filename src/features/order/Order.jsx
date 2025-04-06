// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  return (
    <div className="px-8 py-9 space-y-6 mt-5">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold"> Order #{id} Status</h2>

        <div className="space-x-3">
          {priority && (
            <span className="bg-red-500 rounded-full text-sm py-2 px-2  text-red-700 font-semibold uppercase tracking-widest ">
              Priority
            </span>
          )}
          <span className=" bg-green-500 rounded-full text-sm py-2 px-2  text-stone-700 font-semibold uppercase tracking-widest">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 bg-stone-200 py-6 px-5">
        <p className="font-medium ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-900">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-stone-300 divide-y border-b border-t border-stone-300">
        {" "}
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId).ingredients ??
              []
            }
            isLoadingIngredients={fetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className="space-x3 bg-stone-200 py-6 px-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function loader({ params }) {
  // orderId is what we named the param in the router (check app.jsx || path: 'order/:orderId')
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
