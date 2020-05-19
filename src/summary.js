import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardTitle,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

const address = [
  "/family",
  "/friend",
  "/colleague",
  "/acquaintance",
  "/stranger",
];
let back = "";

const Summary = ({
  stateFirst,
  family,
  friend,
  colleague,
  acquaintance,
  stranger,
  ...props
}) => {
  if (stateFirst.isStranger) back = address[4];
  else if (stateFirst.isAcquaintance) back = address[3];
  else if (stateFirst.isColleague) back = address[2];
  else if (stateFirst.isFriend) back = address[1];
  else if (stateFirst.isFamily) back = address[0];

  const famApps = Object.keys(family).map((key) => family[key]);
  const familyApps = famApps.map((x, pid) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx}>
          <Label>
            <CardImg src={icon.src} alt={icon.title} draggable="false" />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const familyCards = stateFirst.family.map((rel, idx) => {
    let text = "Family Members";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div className="box" key={idx} id={"family" + idx}>
        <p className="text-center">{text}</p>
        <Row xs="4">{familyApps[idx]}</Row>
      </div>
    );
  });

  const friApps = Object.keys(friend).map((key) => friend[key]);
  const friendApps = friApps.map((x, pid) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx}>
          <Label>
            <CardImg src={icon.src} alt={icon.title} draggable="false" />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const friendCards = stateFirst.friends.map((rel, idx) => {
    let text = "Friends";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div className="box" key={idx} id={"friend" + idx}>
        <p className="text-center">{text}</p>
        <Row xs="4">{friendApps[idx]}</Row>
      </div>
    );
  });

  const colApps = Object.keys(colleague).map((key) => colleague[key]);
  const colleagueApps = colApps.map((x, pid) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx}>
          <Label>
            <CardImg src={icon.src} alt={icon.title} draggable="false" />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const colleagueCards = stateFirst.colleague.map((rel, idx) => {
    let text = "Colleagues";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div className="box" key={idx} id={"colleague" + idx}>
        <p className="text-center">{text}</p>
        <Row xs="4">{colleagueApps[idx]}</Row>
      </div>
    );
  });

  const acqApps = Object.keys(acquaintance).map((key) => acquaintance[key]);
  const acquaintanceApps = acqApps.map((x, pid) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx}>
          <Label>
            <CardImg src={icon.src} alt={icon.title} draggable="false" />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const acquaintanceCards = stateFirst.acquaintance.map((rel, idx) => {
    let text = "Acquaintances";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div className="box" key={idx} id={"acquaintance" + idx}>
        <p className="text-center">{text}</p>
        <Row xs="4">{acquaintanceApps[idx]}</Row>
      </div>
    );
  });

  const strApps = Object.keys(stranger).map((key) => stranger[key]);
  const strangerApps = strApps.map((x, pid) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx}>
          <Label>
            <CardImg src={icon.src} alt={icon.title} draggable="false" />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const strangerCards = stateFirst.stranger.map((rel, idx) => {
    let text = "Strangers";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div className="box" key={idx} id={"stranger" + idx}>
        <p className="text-center">{text}</p>
        <Row xs="4">{strangerApps[idx]}</Row>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <p
          style={{
            marginTop: 3 + "em",
            //marginBottom: 3 + "em",
            textAlign: "justify",
          }}
        >
          Here is a overview of all the shared entities you specified and all the apps you have
          grouped into them. If you feel like making any changes you can always go back to make 
          the changes before you move on to the next phase where you will be setting password for
          each of those shared entities.
        </p>
        <Row xs="2">
          {stateFirst.isFamily && <Col>{familyCards}</Col>}
          {stateFirst.isFriend && <Col>{friendCards}</Col>}
          {stateFirst.isColleague && <Col>{colleagueCards}</Col>}
          {stateFirst.isAcquaintance && <Col>{acquaintanceCards}</Col>}
          {stateFirst.isStranger && <Col>{strangerCards}</Col>}
        </Row>
      </Container>
      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to={back}>
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/pass">
          <Button style={{ marginLeft: 8 + "em" }} color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
