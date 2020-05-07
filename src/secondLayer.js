import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const Groups = ({ state, setState, ...props }) => {
  const icons = Object.keys(state).map((key) => state[key]);
  const iconCards = icons.map((icon) => {
    return (
      <Col key={icon.id}>
        <Card>
          <Label>
            <input
              type="checkbox"
              id={icon.id}
              //checked={Boolean(state[icon.id])}
              onChange={(e) => {
                if (e.target.checked) {
                  setState({
                    ...state,
                    [icon.id]: icon,
                  });
                } else {
                  const nextState = state;
                  delete nextState[icon.id];
                  setState({
                    ...nextState,
                  });
                }
              }}
            />
            <CardImg src={icon.src} alt={icon.title} />
            <CardTitle className="text-center">{icon.title}</CardTitle>
          </Label>
        </Card>
      </Col>
    );
  });
  return (
    <div>
        <h4 style={{marginTop: 3 + "em",textAlign: "center"}}>Second Layer</h4>
      <p
        style={{
          marginTop: 3 + "em",
          marginBottom: 3 + "em",
          textAlign: "justify",
        }}
      >
        While sharing digital devices users may want to share different amount
        of information to different people. Here you can create different layers
        of information exposure for different people you share your digital
        device with. You can create as many layers as you like but for each
        layer you will be adding 4 new characters as password with the previous
        one while starting with only 4 characters.
      </p>

      <Container fluid>
        <Row xs="5">{iconCards}</Row>
      </Container>

      <Container
        fluid
        style={{
          marginBottom: 3 + "em",
          marginTop: 3 + "em",
        }}
      >
        <Row xs="2">
          <Col>
            <input
              type="text"
              id="Layer1"
              placeholder="Type user name here.."
            />
            <Button color="primary">Add</Button>
          </Col>
          <Col>Added users:</Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          marginBottom: 3 + "em",
          marginTop: 3 + "em",
        }}
        >
            <input
              type="password"
              id="PassLayer1"
              placeholder="Type password here.."
            />
      </Container>

      <div
        className="text-center"
        style={{
          marginBottom: 3 + "em",
          marginTop: 3 + "em",
        }}
      >
        <Link to="/public">
          <Button color="danger">Back</Button>
        </Link>
        <Link to="/friends">
          <Button color="primary">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default Groups;
