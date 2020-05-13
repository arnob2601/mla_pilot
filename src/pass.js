import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

const entity = ["Family", "Friend", "Colleague", "Acquaintance", "Stranger"];

const Password = ({
  stateFirst,
  setStateFirst,
  password,
  setPassword,
  ...props
}) => {
  const pushData = () => {
    if (stateFirst.isFamily) {
      stateFirst.family.map((rel, idx) => {
        let text = entity[0];
        if (rel.name !== "") {
          text = rel.name;
        }
        console.log(text, password['family'+idx]);
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["family" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isFriend) {
      stateFirst.friends.map((rel, idx) => {
        let text = entity[1];
        if (rel.name !== "") {
          text = rel.name;
        }
        console.log(text, password['friend'+idx]);
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["friend" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isColleague) {
      stateFirst.colleague.map((rel, idx) => {
        let text = entity[2];
        if (rel.name !== "") {
          text = rel.name;
        }
        console.log(text, password['colleague'+idx]);
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["colleague" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isAcquaintance) {
      stateFirst.acquaintance.map((rel, idx) => {
        let text = entity[3];
        if (rel.name !== "") {
          text = rel.name;
        }
        console.log(text, password['acquaintance'+idx]);
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["acquaintance" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isStranger) {
      stateFirst.stranger.map((rel, idx) => {
        let text = entity[4];
        if (rel.name !== "") {
          text = rel.name;
        }
        console.log(text, password['stranger'+idx]);
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["stranger" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
  };

  //Family
  const handleFamilyChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const familyPass = stateFirst.family.map((rel, idx) => {
    let text = "Family Members";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <Col key={idx} id={"family" + idx}>
        <input
          style={{ marginTop: 1 + "em" }}
          placeholder={text}
          type="password"
          onChange={handleFamilyChange("family" + idx)}
          value={password["family" + idx]}
        />
      </Col>
    );
  });

  //Friend
  const handleFriendChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const friendPass = stateFirst.friends.map((rel, idx) => {
    let text = "Friends";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <Col key={idx} id={"friend" + idx}>
        <input
          style={{ marginTop: 1 + "em" }}
          placeholder={text}
          type="password"
          onChange={handleFriendChange("friend" + idx)}
          value={password["friend" + idx]}
        />
      </Col>
    );
  });

  //Colleague
  const handleColleagueChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const colleaguePass = stateFirst.colleague.map((rel, idx) => {
    let text = "Colleagues";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <Col key={idx} id={"colleague" + idx}>
        <input
          style={{ marginTop: 1 + "em" }}
          placeholder={text}
          type="password"
          onChange={handleColleagueChange("colleague" + idx)}
          value={password["colleague" + idx]}
        />
      </Col>
    );
  });

  //Acquaintance
  const handleAcquaintanceChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const acquaintancePass = stateFirst.acquaintance.map((rel, idx) => {
    let text = "Acquaintances";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <Col key={idx} id={"acquaintance" + idx}>
        <input
          style={{ marginTop: 1 + "em" }}
          placeholder={text}
          type="password"
          onChange={handleAcquaintanceChange("acquaintance" + idx)}
          value={password["acquaintance" + idx]}
        />
      </Col>
    );
  });

  //Stranger
  const handleStrangerChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const strangerPass = stateFirst.stranger.map((rel, idx) => {
    let text = "Strangers";
    if (rel.name !== "") {
      text = rel.name;
    }
    return (
      <Col key={idx} id={"stranger" + idx}>
        <input
          style={{ marginTop: 1 + "em" }}
          placeholder={text}
          type="password"
          onChange={handleStrangerChange("stranger" + idx)}
          value={password["stranger" + idx]}
        />
      </Col>
    );
  });
  return (
    <div>
      <Container fluid>
        <p className="para">
          Please set password for each of the shared entites along with the
          specific relations that you may have defined wihtin them. The
          passwords you set for any shared entitity or specific relation must be
          atleast four characters long.
        </p>
        <Row xs="2">{stateFirst.isFamily && familyPass}</Row>
        <Row xs="2">{stateFirst.isFriend && friendPass}</Row>
        <Row xs="2">{stateFirst.isColleague && colleaguePass}</Row>
        <Row xs="2">{stateFirst.isAcquaintance && acquaintancePass}</Row>
        <Row xs="2">{stateFirst.isStranger && strangerPass}</Row>
      </Container>
      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to="/stranger">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/finish">
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

export default Password;
