import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ManageAllOrder from "../Manage All Order/ManageAllOrder";
import MyOrder from "../My Order/MyOrder";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { users, logOut } = useAuth();

  return (
    <div>
      <Row className="g-0">
        <Col md={12} className="bg-primary text-white text-center p-3">
          <h1>
            {users.displayName} 's{" "}
            <span className="text-warning">Dashboard</span>
          </h1>
        </Col>
        <Col md={2} style={{ height: "150vh" }} className="p-4 bg-dark">
          <Link to="/home">
            <Button className="fs-6 text-white mb-1">
              <i className="fas fa-home"></i> Home
            </Button>
          </Link>
          : (
          <>
            <br />
            <Link to={`${url}/myOrder`}>
              <Button className="fs-6 none text-white my-1">
                <i className="fas fa-list-ol"></i> My Order
              </Button>
            </Link>
            <Link to={`${url}/manageOrder`}>
              <Button className="fs-6 none text-white my-1 me-1">
                <i className="far fa-comment-alt"></i> All Order
              </Button>
            </Link>
          </>
          )
          <Button onClick={logOut} className="fs-6 none text-white">
            <i className="fas fa-sign-out-alt"></i> Log Out
          </Button>
        </Col>
        <Col md={10} className="container-fluid">
          <Switch>
            <Route exact path={path}>
              <h2 className="mt-4 text-center">
                <i className="far fa-calendar-check"></i> Welcome to your{" "}
                <span className="text-success">Dashboard</span>
              </h2>
              <h5 className="pt-3 text-center">
                Here you will find all the activities of you in Greninja Watch
                website. <br /> We certainly managed a detailed interface to
                maximize your comforts.
              </h5>
            </Route>

            <Route path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>

            <Route path={`${path}/manageOrder`}>
              <ManageAllOrder></ManageAllOrder>
            </Route>

            <Route path={`${path}/addProducts`}></Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
