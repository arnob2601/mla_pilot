import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const Colleagues = ({
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
  const indexTrack = stateFirst.family.length+stateFirst.friends.length;
  const Apps = Object.keys(group).map((key) => group[key]);
  const selectedApps = Apps.map((x) =>
    x.map((icon, idx) => {
      return (
        <Card key={idx} draggable="false">
          <Label>
            <CardImg src={icon.src} alt={icon.title} />
            <CardTitle className="text-center" style={{ fontSize: "12px" }}>
              {icon.title}
            </CardTitle>
          </Label>
        </Card>
      );
    })
  );

  const drop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("card"));
    const idx = e.currentTarget.id;
    setGroup({
      ...group,
      [idx]: [
        ...new Map(
          group[idx].concat([data]).map((item) => [item.id, item])
        ).values(),
      ], //Setting only unique values to a shared entity
    });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const colleagueCards = stateFirst.colleague.map((rel, idx) => {
    let text = "Colleagues";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div
        onDrop={drop}
        onDragOver={dragOver}
        className="box"
        key={idx}
        id={"colleague" + idx}
      >
        <p className="text-center">{text}</p>
        <Row xs="4">{selectedApps[idx+indexTrack]}</Row>
      </div>
    );
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
          onDragOver={(e) => {
            e.stopPropagation();
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
          {stateFirst.isColleague && <Col>{colleagueCards}</Col>}
          {!stateFirst.isColleague && (
            <Col style={{ color: "red", textAlign: "justify" }}>
              **You have not selected/specified any colleague entity. Please
              continue to the next page.**
            </Col>
          )}

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
        <Link to="/friend">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/acquaintance">
          <Button style={{ marginLeft: 8 + "em" }} color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Colleagues;
