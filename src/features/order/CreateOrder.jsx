import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // since this component is connected with the action in the route it has access to the data returned from action

  const formErrors = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* 
        getting data like cart in thi case using a hidden input field and setting value attrb to cart => cart is then accessed by the action function and returned as a key in the res object  */}
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />

          {/* did this  the firt try 

          isSubmittig ? button with disabled : button with no disabled 
          lmao 
          correct and precise one is line below 
           */}

          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order" : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

// creating an action function
// when ever the Form above is sumbitted the action function is going to be invoked with the request submitted!
// link the action function with the comp router

export async function action({ request }) {
  //fomr data is a web api
  //The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch(), XMLHttpRequest.send() or navigator.sendBeacon() methods. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

  //https://developer.mozilla.org/en-US/docs/Web/API/FormData

  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // Form Valdation

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please Provide A valid Phone number";

  // returning the errors object if it container a key value

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // rederict is react-router function since we can't use hooks inside of functions

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
