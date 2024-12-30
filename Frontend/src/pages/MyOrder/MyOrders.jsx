import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  console.log(data);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + `/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="my-order">
      <h2>My Orders</h2>
      <div className="my-order-main">
        {data.map((order, index) => {
          return (
            <div className="my-order-box">
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <div className="my-orders-order-main">
                  <div className="my-orders-order-section-1">
                    <div>
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </div>

                    <div>₹{order.amount}</div>
                  </div>
                  <div className="my-orders-order-section-1">
                    <div>Items: {order.items.length}</div>
                    <div className="order-status">
                      <span>&#x25cf;</span> <b>{order.status}</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="track-button">
                <div className={order.success}><span>Payment :</span> {order.success}</div>
                <button onClick={fetchOrder}>Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
