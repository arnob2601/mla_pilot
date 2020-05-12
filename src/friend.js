import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const Friends = ({
  state,
  setState,
  app,
  setApp,
  stateFirst,
  setStateFirst,
  friend,
  setFriend,
  ...props
}) => {
  /*Selected apps for friend insertion to database*/
  const pushData = () => {
    if (stateFirst.isFriend) {
      for (let i = 0; i < Apps.length; i++) {
        for (let j = 0; j < Apps[i].length; j++) {
          //console.log(stateFirst.family[i].name, Apps[i][j].title)
          fetch(
            `http://localhost:4000/friend/add?user=${stateFirst.user}&sharee=${stateFirst.friends[i].name}&app=${Apps[i][j].title}`
          ).catch((err) => console.error(err));
        }
      }
    }
  };

  const Apps = Object.keys(friend).map((key) => friend[key]);
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
    setFriend({
      ...friend,
      [idx]: [
        ...new Map(
          friend[idx].concat([data]).map((item) => [item.id, item])
        ).values(),
      ], //Setting only unique values to a shared entity
    });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const friendCards = stateFirst.friends.map((rel, idx) => {
    let text = "Friends";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div
        onDrop={drop}
        onDragOver={dragOver}
        className="box"
        key={idx}
        id={"friend" + idx}
      >
        <p className="text-center">{text}</p>
        <Row xs="4">{selectedApps[idx]}</Row>
      </div>
    );
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
          {stateFirst.isFriend && <Col>{friendCards}</Col>}
          {!stateFirst.isFriend && (
            <Col style={{ color: "red", textAlign: "justify" }}>
              **You have not selected/specified any friend entity. Please
              continue to the next page.**
            </Col>
          )}
        </Row>
      </Container>

      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to="/family">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/colleague">
          <Button style={{ marginLeft: 8 + "em" }} color="primary" onClick={pushData}>
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Friends;
