import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Button, Label } from "reactstrap";

const address = [ "/family", "/friend", "/colleague", "/acquaintance", "/stranger", "/pass" ]
let next='';

const Family = ({
  state,
  setState,
  app,
  setApp,
  stateFirst,
  setStateFirst,
  family,
  setFamily,
  ...props
}) => {
  if(stateFirst.isFriend) next=address[1];
  else if(stateFirst.isColleague) next=address[2];
  else if(stateFirst.isAcquaintance) next=address[3];
  else if(stateFirst.isStranger) next=address[4];
  else next=address[5];

  /*Selected apps for family insertion to database*/
  const pushData = () => {
    if (stateFirst.isFamily) {
      for (let i = 0; i < Apps.length; i++) {
        for (let j = 0; j < Apps[i].length; j++) {
          //console.log(stateFirst.family[i].name, Apps[i][j].title)
          fetch(
            `http://${stateFirst.ipAddress}:4000/family/add?user=${stateFirst.user}&sharee=${stateFirst.family[i].name}&app=${Apps[i][j].title}`
          ).catch((err) => console.error(err));
        }
      }
    }
  };

  const Apps = Object.keys(family).map((key) => family[key]);
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
    setFamily({
      ...family,
      [idx]: [
        ...new Map(
          family[idx].concat([data]).map((item) => [item.id, item])
        ).values(),
      ], //Setting only unique values to a shared entity
    });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const familyCards = stateFirst.family.map((rel, idx) => {
    let text = "Family Members";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <div
        onDrop={drop}
        onDragOver={dragOver}
        className="box"
        key={idx}
        id={"family" + idx}
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

  //if(stateFirst.isFamily === false) return <Redirect to="/friend"/>
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
          {stateFirst.isFamily && <Col>{familyCards}</Col>}
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

        <Link to={next}>
          <Button
            style={{ marginLeft: 8 + "em" }}
            color="primary"
            onClick={pushData}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Family;
