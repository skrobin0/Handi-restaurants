import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    fetch(`https://hidden-escarpment-63235.herokuapp.com/orders/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [users.email]);
  console.log(myOrder);

  const deleteOrder = (id) => {
    fetch(`https://hidden-escarpment-63235.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure, You want to cancel the food?");
          const total = myOrder.filter((data) => data._id !== id);
          setMyOrder(total);
        }
      });
  };

  return (
    <Container className="px-5">
      <h2 className="text-center my-4">
        All Your <span className="text-success">Booked Foods </span>here_
      </h2>
      {myOrder.map((data) => (
        <div key={data._id} className="bg-success my-3 rounded">
          <div className="py-3 px-5 text-light">
            <h5>{users.displayName}</h5>
            <h5>Trip: {data.ItemName}</h5>
            <p>
              Email: {data.email}
              <br />
              Address: {data.location}
              <br />
              Package Cost: {data.price}
            </p>
            <Button
              onClick={() => deleteOrder(data._id)}
              className="btn btn-danger px-5"
            >
              Cancel
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default MyOrder;
