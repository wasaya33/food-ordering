// Cart.js

import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useState } from "react";

// This value is from the props in the UI
const style = {"layout":"vertical"};

const Cart = () => {
  const [open , setOpen] =useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                // createOrder={createOrder}
                 // onApprove={onApprove}
            />
        </>
    );
}

  // console.log(cart)

 // console.log(cart.products)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {cart?.items?.length > 0 ? (
  cart.items.map((product) => (
    
    <tr className={styles.tr} key={product._id}>
      <td>
        <div className={styles.imgContainer}>
          <Image
            src={"/img/size.png"}
            layout="fill"
            objectFit="cover"
            alt={product.title}
          />
        </div>
      </td>
      <td>
        <span className={styles.name}>{product.title}</span>
      </td>
      <td>
        <span className={styles.extras}>
          {product?.extraOptions?.map((extra) => (
            <span key={extra._id}>{extra.text}, </span>
          ))}
        </span>
      </td>
      <td>
        <span className={styles.price}>${product.price}</span>
      </td>
      <td>
        <span className={styles.quantity}>{product.quantity}</span>
      </td>
      <td>
        <span className={styles.total}>
          ${product.price * product.quantity}
        </span>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6">No products in the cart</td>
  </tr>
)}
{/* {cart.products.map((product) => (

<tr className={styles.tr} key={product._id}>
  <td>
    <div className={styles.imgContainer}>
      <Image
        src={product.img}
        layout="fill"
        objectFit="cover"
        alt={product.title}
      />
    </div>
  </td>
  <td>
    <span className={styles.name}>{product.title}</span>
  </td>
  <td>
    <span className={styles.extras}>
      {product.extras.map(extra => (
        <span key={extra._id}>{extra.text}, </span>
      ))}
    </span>
  </td>
  <td>
    <span className={styles.price}>${product.price}</span>
  </td>
  <td>
    <span className={styles.quantity}>{product.quantity}</span>
  </td>
  <td>
    <span className={styles.total}>
      ${product.price * product.quantity}
    </span>
  </td>
</tr>
))} */}

          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> ${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> $0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> ${cart.total}
          </div>
          {open ? (
            <PayPalScriptProvider options={{
              clientId: "test",
              components: "buttons",
              currency: "USD",
              disableFunding: ["credit" , "card" ,"p24","venmo"],
               }}>
                 <ButtonWrapper showSpinner={false} />
             </PayPalScriptProvider>
          ) : (
            <button className={styles.button}>CHECKOUT NOW!</button>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
