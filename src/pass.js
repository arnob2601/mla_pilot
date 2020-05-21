import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

const entity = ["Family", "Friend", "Colleague", "Acquaintance", "Stranger"];
let invalid = true;

const Password = ({
  stateFirst,
  setStateFirst,
  password,
  setPassword,
  ...props
}) => {
  const p = Object.keys(password).map((key) => password[key]);
  const pushData = () => {
    if (stateFirst.isFamily) {
      stateFirst.family.map((rel, idx) => {
        let text = entity[0];
        if (rel.name !== "") {
          text = rel.name;
        }
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
        fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["stranger" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
  };

  const validity = () => {
    let familyInvalid = false;
    let friendInvalid = false;
    let colleagueInvalid = false;
    let acquaintanceInvalid = false;
    let strangerInvalid = false;
    //Family pass validity check
    if (stateFirst.isFamily) {
      for (let i = 0; i < stateFirst.family.length; i++) {
        if (
          password["family" + i] === undefined ||
          password["checkfamily" + i] === undefined
        ) {
          familyInvalid = true;
          break;
        } else if (
          password["family" + i] !== password["checkfamily" + i] ||
          password["family" + i].length < 4
        ) {
          familyInvalid = true;
          break;
        }
      }
    }

    //Friend pass validity check
    if (stateFirst.isFriend) {
      for (let i = 0; i < stateFirst.friends.length; i++) {
        if (
          password["friend" + i] === undefined ||
          password["checkfriend" + i] === undefined
        ) {
          friendInvalid = true;
          break;
        } else if (
          password["friend" + i] !== password["checkfriend" + i] ||
          password["friend" + i].length < 4
        ) {
          friendInvalid = true;
          break;
        }
      }
    }
    //Colleague pass validity check
    if (stateFirst.isColleague) {
      for (let i = 0; i < stateFirst.colleague.length; i++) {
        if (
          password["colleague" + i] === undefined ||
          password["checkcolleague" + i] === undefined
        ) {
          colleagueInvalid = true;
          break;
        } else if (
          password["colleague" + i] !== password["checkcolleague" + i] ||
          password["colleague" + i].length < 4
        ) {
          colleagueInvalid = true;
          break;
        }
      }
    }
    //Acquaintance pass validity check
    if (stateFirst.isAcquaintance) {
      for (let i = 0; i < stateFirst.acquaintance.length; i++) {
        if (
          password["acquaintance" + i] === undefined ||
          password["checkacquaintance" + i] === undefined
        ) {
          acquaintanceInvalid = true;
          break;
        } else if (
          password["acquaintance" + i] !== password["checkacquaintance" + i] ||
          password["acquaintance" + i].length < 4
        ) {
          acquaintanceInvalid = true;
          break;
        }
      }
    }
    //Stranger pass validity check
    if (stateFirst.isStranger) {
      for (let i = 0; i < stateFirst.stranger.length; i++) {
        if (
          password["stranger" + i] === undefined ||
          password["checkstranger" + i] === undefined
        ) {
          strangerInvalid = true;
          break;
        } else if (
          password["stranger" + i] !== password["checkstranger" + i] ||
          password["stranger" + i].length < 4
        ) {
          strangerInvalid = true;
          break;
        }
      }
    }

    if (
      familyInvalid ||
      friendInvalid ||
      colleagueInvalid ||
      acquaintanceInvalid ||
      strangerInvalid
    ) {
      invalid = true;
    } else {
      invalid = false;
    }
    return invalid;
  };

  const showWarning = (entity, idx) => {
    return (
      <Row>
        <Col>
          {password[entity + idx] !== undefined &&
            password[entity + idx].length < 4 && (
              <span style={{ color: "red" }}>Password too short!</span>
            )}
        </Col>
        <Col>
          {password[entity + idx] !== password["check" + entity + idx] &&
            password["check" + entity + idx] && (
            <span style={{ color: "red" }}>Password does not match!</span>
          )}
          {password[entity + idx] === password["check" + entity + idx] &&
            password[entity + idx] !== undefined &&
            password[entity + idx] !== "" && (
              <span style={{ color: "green" }}>Password matches!</span>
            )}
        </Col>
      </Row>
    );
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
      <div key={idx} style={{ marginTop: 1 + "em" }}>
        <Col>
          <Row>
            <Col>Password for {text}</Col>
          </Row>
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleFamilyChange("family" + idx)}
                value={password["family" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleFamilyChange("checkfamily" + idx)}
                value={password["checkfamily" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("family", idx)}
        </Col>
      </div>
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
      <div key={idx} style={{ marginTop: 1 + "em" }}>
        <Col>
          <Row>
            <Col>Password for {text}</Col>
          </Row>
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleFriendChange("friend" + idx)}
                value={password["friend" + idx]}
              />{" "}
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleFamilyChange("checkfriend" + idx)}
                value={password["checkfriend" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("friend", idx)}
        </Col>
      </div>
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
      <div key={idx} style={{ marginTop: 1 + "em" }}>
        <Col>
          <Row>
            <Col>Password for {text}</Col>
          </Row>
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleColleagueChange("colleague" + idx)}
                value={password["colleague" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleFamilyChange("checkcolleague" + idx)}
                value={password["checkcolleague" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("colleague", idx)}
        </Col>
      </div>
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
      <div key={idx} style={{ marginTop: 1 + "em" }}>
        <Col>
          <Row>
            <Col>Password for {text}</Col>
          </Row>
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleAcquaintanceChange("acquaintance" + idx)}
                value={password["acquaintance" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleFamilyChange("checkacquaintance" + idx)}
                value={password["checkacquaintance" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("acquaintance", idx)}
        </Col>
      </div>
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
      <div key={idx} style={{ marginTop: 1 + "em" }}>
        <Col>
          <Row>
            <Col>Password for {text}</Col>
          </Row>
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleStrangerChange("stranger" + idx)}
                value={password["stranger" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleFamilyChange("checkstranger" + idx)}
                value={password["checkstranger" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("stranger", idx)}
        </Col>
      </div>
    );
  });
  return (
    <div>
      <Container fluid>
        <p className="para">
          In this step, you will create passwords to protect your apps from
          unauthorized access. Later in this study, you will be asked to log in
          using the passwords you create. Please carefully follow the
          instructions below before you create the passwords.
          <br />
          <br /> Do Not use any of your real-life passwords. Rather you should
          follow your general strategies of password creation.
          <br />
          <br /> You will create a unique password in each password-box for an
          entity. Here, as you share your phone with an entity you will use the
          password for that entity to unlock your phone, which will give access
          to only those apps that you are comfortable to share with that entity.
          <br />
          <br /> Your password must be minimum four characters long.
          <br />
          <br /> Create strong passwords. You can consider the sensitivity of
          apps shared with an entity, while creating a password for that entity
          to protect those apps from unauthorized access.
        </p>
        <Row>{stateFirst.isFamily && familyPass}</Row>
        <Row>{stateFirst.isFriend && friendPass}</Row>
        <Row>{stateFirst.isColleague && colleaguePass}</Row>
        <Row>{stateFirst.isAcquaintance && acquaintancePass}</Row>
        <Row>{stateFirst.isStranger && strangerPass}</Row>
      </Container>
      <div
        style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
        className="text-center"
      >
        <Link to="/summary">
          <Button style={{ marginRight: 8 + "em" }} color="primary">
            Back
          </Button>
        </Link>

        <Link to="/finish">
          <Button
            style={{ marginLeft: 8 + "em" }}
            color="primary"
            onClick={pushData}
            disabled={validity()}
          >
            Finish
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Password;
