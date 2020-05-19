import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const address = [ "/family", "/friend", "/colleague", "/acquaintance", "/stranger", "/pass" ]
let next='';

const AppPicker = ({
  state,
  setState,
  app,
  setApp,
  stateFirst,
  setStateFirst,
  ...props
}) => {
  if(stateFirst.isFamily) next=address[0];
  else if(stateFirst.isFriend) next=address[1];
  else if(stateFirst.isColleague) next=address[2];
  else if(stateFirst.isAcquaintance) next=address[3];
  else if(stateFirst.isStranger) next=address[4];

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
        Please select the apps that you use on your phone. By using ‘Add App’ feature at the bottom of the page, 
        please add the apps that you use on your phone, but not listed in here.
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
          <button
            style={{ background: "#007bff", color: "white" }}
            onClick={addApp}
          >
            Add App
          </button>
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

        <Link to={next}>
          <Button
            disabled={item.length === 0}
            style={{ marginLeft: 8 + "em" }}
            color="primary"
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppPicker;
