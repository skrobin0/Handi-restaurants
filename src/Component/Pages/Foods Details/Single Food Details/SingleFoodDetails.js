import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Menubar from "../../../Shared/Menubar/Menubar";

const SingleFoodDetails = () => {
  const { id } = useParams();
  const { reset } = useForm();
  const { users } = useAuth();

  const [singleFood, setSingleFood] = useState([]);

  const url = `https://hidden-escarpment-63235.herokuapp.com/foods`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleFood(data));
  }, []);

  const Food = singleFood.find((dt) => dt?.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://hidden-escarpment-63235.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Your Order Receored");
    reset();

    console.log(data);
  };

  return (
    <>
      <Menubar></Menubar>
      <Container className="mt-5">
        <Row className="mx-auto text-center">
          <Col md={6}>
            <div className="cart p-3 m-2 border border">
              <div className="service img">
                <img
                  style={{ width: "60%" }}
                  src={Food?.image}
                  alt="category"
                />
              </div>
              <h4 className="mt-4 text-success">{Food?.title}</h4>
              <p className="mt-2">{Food?.description}</p>
              <h6 className="mt-2">Price :{Food?.price}</h6>
            </div>
          </Col>

          <Col md={6}>
            <div className=" order-form mt-2">
              <div>
                <div className="event-box border border d-flex justify-content-center align-items-center">
                  <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {Food?.title && (
                        <input
                          defaultValue={Food?.title}
                          {...register("ItemName")}
                          placeholder="Name"
                          className="p-2 m-2"
                          style={{ width: "300px" }}
                        />
                      )}
                      <br />

                      {users.displayName && (
                        <input
                          defaultValue={users?.displayName}
                          {...register("name")}
                          placeholder="Name"
                          className="p-2 m-2"
                          style={{ width: "300px" }}
                        />
                      )}
                      <br />

                      <input
                        value={users.email}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="p-2 m-2"
                        style={{ width: "300px" }}
                      />
                      <br />
                      <input
                        {...register("date", { required: true })}
                        placeholder="date"
                        defaultValue={new Date()}
                        className="p-2 m-2"
                        style={{ width: "300px" }}
                      />
                      <br />
                      <input
                        value={Food?.price}
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="p-2 m-2"
                        style={{ width: "300px" }}
                      />
                      <br />
                      <input
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="p-2 m-2"
                        style={{ width: "300px" }}
                      />
                      <br />
                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}

                      <input
                        type="submit"
                        className="btn btn-success w-50 my-2 "
                        value="Book Now"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleFoodDetails;
