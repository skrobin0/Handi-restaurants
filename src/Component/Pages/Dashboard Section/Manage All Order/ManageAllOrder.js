import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const ManageAllOrder = () => {
  const [manageAllOrder, setManageAllOrder] = useState([]);

  useEffect(() => {
    fetch("https://hidden-escarpment-63235.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageAllOrder(data));
  }, []);

  // Deleting a confirmed trip
  const deleteAllOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to cancel the Food?"
    );
    if (proceed) {
      const url = `https://hidden-escarpment-63235.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Trip Cancelled Successfully");
            const remainingEvents = manageAllOrder.filter(
              (data) => data._id !== id
            );
            setManageAllOrder(remainingEvents);
          }
        });
    }
  };

  return (
    <div>
      <Container className="px-5">
        <h2 className="text-center my-4">
          Booked Foods By <span className="text-success">Our Clients</span>_
        </h2>
        {manageAllOrder.map((data) => (
          <div key={data._id} className="bg-success my-3 rounded">
            <div className="py-3 px-5 text-light">
              <h5>{data.name}</h5>
              <h5>Menu: {data.ItemName}</h5>
              <p>
                Email: {data.email}
                <br />
                Address: {data.location}
                <br />
                Food Cost: {data.price}
              </p>
              <Button
                onClick={() => deleteAllOrder(data._id)}
                className="btn btn-danger px-5"
              >
                Cancel
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ManageAllOrder;
