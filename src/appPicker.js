import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const AppPicker = ({
  state,
  setState,
  app,
  setApp,
  stateFirst,
  setStateFirst,
  ...props
}) => {
  const item = Object.keys(state).map((key) => app[key]);

  const handleName = (e) => {
    setStateFirst({ ...stateFirst, name: e.target.value });
  };

  const addApp = () => {
    if (stateFirst.name.length > 0) {
      const id = app.length + 1;
      const src = require("./Images/Demo.png");
      const title = stateFirst.name;
      const newApp = { id, src, title };
      setApp([...app, newApp]);
      setStateFirst({ ...stateFirst, name: "" });
    }
  };

  const iconCards = app.map((icon) => {
    return (
      <Col
        key={icon.id}
        style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}
      >
        <Card>
          <Label>
            <input
              type="checkbox"
              id={icon.id}
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
              checked={Boolean(state[icon.id])}
            />
            <CardImg src={icon.src} alt={icon.title} />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <p
        style={{
          marginTop: 3 + "em",
          marginBottom: 3 + "em",
          textAlign: "justify",
        }}
      >
        Please select the apps that you use one your phone and select next. For
        the rest of the process you will only see those apps.
      </p>
      <Container fluid>
        <Row xs="6">{iconCards}</Row>
        <div style={{ marginTop: 2 + "em" }}>
          <input
            style={{ width: 250 }}
            type="text"
            onChange={handleName}
            value={stateFirst.name}
            placeholder="Type app name here to add.."
          />
          <button onClick={addApp}>Add App</button>
        </div>
      </Container>

      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to="/sharing">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/grouping">
          <Button disabled={ item.length === 0 } style={{ marginLeft: 8 + "em" }} color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppPicker;
