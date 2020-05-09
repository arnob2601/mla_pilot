import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const Groups = ({
  state,
  setState,
  app,
  setApp,
  stateFirst,
  setStateFirst,
  group,
  setGroup,
  ...props
}) => {
  const familyApps = Object.keys(group).map((key) => group[key]);
  console.log(familyApps);
  const familySelectedApps = familyApps[1].map((icon, idx) => {
    return (
      <Card id={icon} draggable="false">
        <Label>
          <CardImg src={icon.src} alt={icon.title} />
          <CardTitle className="text-center" style={{ fontSize: "12px" }}>
            {icon.title}
          </CardTitle>
        </Label>
      </Card> 
    );
  });

  const drop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("card"));
    const idx = e.target.id;
    setGroup({
      ...group,
      familyInfoId: group.familyInfoId.concat([idx]),
      familyInfo: group.familyInfo.concat([data]),
    });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const familyCards = stateFirst.family.map((rel, idx) => {
    if (rel.name === "" && stateFirst.family.length === 1)
      return (
        <Row
          onDrop={drop}
          onDragOver={dragOver}
          className="box"
          key={idx}
          id={idx}
        >
          {familySelectedApps}
        </Row>
      );
    else if (rel.name !== "")
      return (
        <Row
          onDrop={drop}
          onDragOver={dragOver}
          className="box"
          key={idx}
          id={idx}
        >
          {//rel.name
            familySelectedApps
          }
        </Row>
      );
    return 0;
  });

  const friendCards = stateFirst.friends.map((rel, idx) => {
    if (rel.name === "" && stateFirst.friends.length === 1)
      return (
        <div className="box" key={idx}>
          Friends
        </div>
      );
    else if (rel.name !== "")
      return (
        <div className="box" key={idx}>
          {rel.name}
        </div>
      );
    return 0;
  });

  const colleagueCards = stateFirst.colleague.map((rel, idx) => {
    if (rel.name === "" && stateFirst.colleague.length === 1)
      return (
        <div className="box" key={idx}>
          Colleagues
        </div>
      );
    else if (rel.name !== "")
      return (
        <div className="box" key={idx}>
          {rel.name}
        </div>
      );
    return 0;
  });

  const acquaintanceCards = stateFirst.acquaintance.map((rel, idx) => {
    if (rel.name === "" && stateFirst.acquaintance.length === 1)
      return (
        <div className="box" key={idx}>
          Acquaintances
        </div>
      );
    else if (rel.name !== "")
      return (
        <div className="box" key={idx}>
          {rel.name}
        </div>
      );
    return 0;
  });

  const strangerCards = stateFirst.stranger.map((rel, idx) => {
    if (rel.name === "" && stateFirst.stranger.length === 1)
      return (
        <div className="box" key={idx}>
          Strangers
        </div>
      );
    else if (rel.name !== "")
      return (
        <div className="box" key={idx}>
          {rel.name}
        </div>
      );
    return 0;
  });

  const icons = Object.keys(state).map((key) => state[key]);
  const iconCards = icons.map((icon) => {
    return (
      <Col
        key={icon.id}
        style={{ marginBottom: 0.5 + "em", marginTop: 0.5 + "em" }}
      >
        <Card
          onDragStart={(e) => {
            e.dataTransfer.setData("card", JSON.stringify(icon));
          }}
          id={icon}
          draggable="true"
        >
          <Label>
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
      <Container fluid>
        <p
          style={{
            marginTop: 3 + "em",
            //marginBottom: 3 + "em",
            textAlign: "justify",
          }}
        >
          Please drag and drop the apps in to the different entities(with
          specific relation) that you would like to share with.
        </p>

        <Row>
          <Col>
            <Row xs="4">{iconCards}</Row>
          </Col>
          <Col>
          {stateFirst.isFamily && familyCards}
          </Col>

          {/*stateFirst.isFamily && <div>{familyCards}</div>}
          {stateFirst.isFriend && <div>{friendCards}</div>}
          {/*stateFirst.isColleague && <div>{colleagueCards}</div>}
          {stateFirst.isAcquaintance && <div>{acquaintanceCards}</div>}
          {stateFirst.isStranger && <div>{strangerCards}</div>*/}
        </Row>
      </Container>

      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to="/apppicker">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/grouping">
          <Button style={{ marginLeft: 8 + "em" }} color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Groups;
