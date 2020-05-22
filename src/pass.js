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
  checkPassword,
  setCheckPassword,
  family,
  friend,
  colleague,
  acquaintance,
  stranger,
  ...props
}) => {
  //const p = Object.keys(password).map((key) => password[key]);
  const famApp = Object.keys(family).map((key) => family[key]);
  const friApp = Object.keys(friend).map((key) => friend[key]);
  const colApp = Object.keys(colleague).map((key) => colleague[key]);
  const acqApp = Object.keys(acquaintance).map((key) => acquaintance[key]);
  const strApp = Object.keys(stranger).map((key) => stranger[key]);

  let arr = [];
  //arr = [...arr, [...famApp], [...friApp], [...colApp], [...acqApp], [...strApp]];
  if (stateFirst.isFamily) {
    arr = [...arr, [...famApp]];
  }
  if (stateFirst.isFriend) {
    arr = [...arr, [...friApp]];
  }
  if (stateFirst.isColleague) {
    arr = [...arr, [...colApp]];
  }
  if (stateFirst.isAcquaintance) {
    arr = [...arr, [...acqApp]];
  }
  if (stateFirst.isStranger) {
    arr = [...arr, [...strApp]];
  }
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr.length; k++) {
        for (let l = 0; l < arr[k].length; l++) {
          if( i === k && j === l ) continue;
           //console.log(i, j, k, l);
           if(JSON.stringify(arr[i][j]) === JSON.stringify(arr[k][l])){
             console.log("match found!")
           }
        }
      }
    }
  }

  const pushData = async () => {
    await fetch(
      `http://${stateFirst.ipAddress}:4000/password/add?user=${stateFirst.user}&sharee=DUMMY&pass=DUMMY`
    ).catch((err) => console.error(err));
    if (stateFirst.isFamily) {
      stateFirst.family.map(async (rel, idx) => {
        let text = entity[0];
        if (rel.name !== "") {
          text = rel.name;
        }
        await fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["family" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isFriend) {
      stateFirst.friends.map(async (rel, idx) => {
        let text = entity[1];
        if (rel.name !== "") {
          text = rel.name;
        }
        await fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["friend" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isColleague) {
      stateFirst.colleague.map(async (rel, idx) => {
        let text = entity[2];
        if (rel.name !== "") {
          text = rel.name;
        }
        await fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["colleague" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isAcquaintance) {
      stateFirst.acquaintance.map(async (rel, idx) => {
        let text = entity[3];
        if (rel.name !== "") {
          text = rel.name;
        }
        await fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["acquaintance" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.isStranger) {
      stateFirst.stranger.map(async (rel, idx) => {
        let text = entity[4];
        if (rel.name !== "") {
          text = rel.name;
        }
        await fetch(
          `http://${stateFirst.ipAddress}:4000/password/add?user=${
            stateFirst.user
          }&sharee=${text}&pass=${password["stranger" + idx]}`
        ).catch((err) => console.error(err));
      });
    }
    if (stateFirst.choice === "yes") {
      let text = "Only Me";
      await fetch(
        `http://${stateFirst.ipAddress}:4000/password/add?user=${stateFirst.user}&sharee=${text}&pass=${password["me"]}`
      ).catch((err) => console.error(err));
    }
  };

  const validity = () => {
    let familyInvalid = false;
    let friendInvalid = false;
    let colleagueInvalid = false;
    let acquaintanceInvalid = false;
    let strangerInvalid = false;
    let meInvalid = false;
    let uniqueValid = false;
    //Family pass validity check
    if (stateFirst.isFamily) {
      for (let i = 0; i < stateFirst.family.length; i++) {
        if (
          password["family" + i] === undefined ||
          checkPassword["family" + i] === undefined
        ) {
          familyInvalid = true;
          break;
        } else if (
          password["family" + i] !== checkPassword["family" + i] ||
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
          checkPassword["friend" + i] === undefined
        ) {
          friendInvalid = true;
          break;
        } else if (
          password["friend" + i] !== checkPassword["friend" + i] ||
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
          checkPassword["colleague" + i] === undefined
        ) {
          colleagueInvalid = true;
          break;
        } else if (
          password["colleague" + i] !== checkPassword["colleague" + i] ||
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
          checkPassword["acquaintance" + i] === undefined
        ) {
          acquaintanceInvalid = true;
          break;
        } else if (
          password["acquaintance" + i] !== checkPassword["acquaintance" + i] ||
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
          checkPassword["stranger" + i] === undefined
        ) {
          strangerInvalid = true;
          break;
        } else if (
          password["stranger" + i] !== checkPassword["stranger" + i] ||
          password["stranger" + i].length < 4
        ) {
          strangerInvalid = true;
          break;
        }
      }
    }
    //Only me pass validity check
    if (stateFirst.choice === "yes") {
      if (password["me"] === undefined || checkPassword["me"] === undefined) {
        meInvalid = true;
      } else if (
        password["me"] !== checkPassword["me"] ||
        password["me"].length < 4
      ) {
        meInvalid = true;
      }
    }
    //Unique password validity check
    let index = Object.keys(password);
    for (let i = 0; i < index.length; i++) {
      for (let j = 0; j < index.length; j++) {
        if (i !== j && password[index[i]] === password[index[j]]) {
          uniqueValid = true;
          break;
        }
      }
    }

    if (
      familyInvalid ||
      friendInvalid ||
      colleagueInvalid ||
      acquaintanceInvalid ||
      strangerInvalid ||
      meInvalid ||
      uniqueValid
    ) {
      invalid = true;
    } else {
      invalid = false;
    }
    return invalid;
  };

  const showWarning = (entity, idx) => {
    let index = Object.keys(password);
    let flag = false;
    for (let i = 0; i < index.length; i++) {
      if (
        password[entity + idx] !== "" &&
        password[entity + idx] !== undefined &&
        password[entity + idx] === password[index[i]] &&
        entity + idx !== index[i]
      )
        flag = true;
    }
    return (
      <div>
        <Row>
          <Col>
            {password[entity + idx] && password[entity + idx].length < 4 && (
              <span style={{ color: "red" }}>Password too short!</span>
            )}
            {flag && <span style={{ color: "red" }}>Not Unique!</span>}
          </Col>
          <Col>
            {password[entity + idx] !== checkPassword[entity + idx] &&
              checkPassword[entity + idx] && (
                <span style={{ color: "red" }}>Password does not match!</span>
              )}
            {password[entity + idx] === checkPassword[entity + idx] &&
              password[entity + idx] !== undefined &&
              password[entity + idx] !== "" && (
                <span style={{ color: "green" }}>Password matches!</span>
              )}
          </Col>
        </Row>
      </div>
    );
  };

  const handleEntityChange = (idx) => (e) => {
    setPassword({ ...password, [idx]: e.target.value });
  };
  const handleCheckEntityChange = (idx) => (e) => {
    setCheckPassword({ ...checkPassword, [idx]: e.target.value });
  };
  //Family
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
                onChange={handleEntityChange("family" + idx)}
                value={password["family" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("family" + idx)}
                value={checkPassword["family" + idx]}
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
                onChange={handleEntityChange("friend" + idx)}
                value={password["friend" + idx]}
              />{" "}
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("friend" + idx)}
                value={checkPassword["friend" + idx]}
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
                onChange={handleEntityChange("colleague" + idx)}
                value={password["colleague" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("colleague" + idx)}
                value={checkPassword["colleague" + idx]}
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
                onChange={handleEntityChange("acquaintance" + idx)}
                value={password["acquaintance" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("acquaintance" + idx)}
                value={checkPassword["acquaintance" + idx]}
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
                onChange={handleEntityChange("stranger" + idx)}
                value={password["stranger" + idx]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("stranger" + idx)}
                value={checkPassword["stranger" + idx]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("stranger", idx)}
        </Col>
      </div>
    );
  });

  //Only Me
  const onlyMePass = () => {
    let text = "Only Me";
    return (
      <div style={{ marginTop: 1 + "em" }}>
        <Col>
          Password for '{text}' (it will give you access to all of the apps
          including the ones that you are not comfortable to share with anyone
          else)
          <Row>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Type the password"}
                type="password"
                onChange={handleEntityChange("me")}
                value={password["me"]}
              />
            </Col>
            <Col>
              <input
                style={{ width: "300px" }}
                placeholder={"Retype the password to confirm"}
                type="password"
                onChange={handleCheckEntityChange("me")}
                value={checkPassword["me"]}
                onPaste={(e) => e.preventDefault()}
              />
            </Col>
          </Row>
          {showWarning("me", "")}
        </Col>
      </div>
    );
  };
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
        {stateFirst.isFamily && familyPass}
        {stateFirst.isFriend && friendPass}
        {stateFirst.isColleague && colleaguePass}
        {stateFirst.isAcquaintance && acquaintancePass}
        {stateFirst.isStranger && strangerPass}
        {stateFirst.choice === "yes" && onlyMePass()}
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
