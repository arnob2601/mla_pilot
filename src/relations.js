import React from "react";
import { Container, Row, Col, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

const Relation = ({ stateFirst, setStateFirst, group, setGroup, ...props }) => {
  const addRelation = () => {
    let x = {};
    stateFirst.family.map((f, idx) => {
      x["family" + idx] = [];
      return 0;
    });
    setGroup({ ...group, ...x });
    stateFirst.friends.map((f, idx) => {
      x["friend" + idx] = [];
      return 0;
    });
    setGroup({ ...group, ...x });
    stateFirst.colleague.map((f, idx) => {
      x["colleague" + idx] = [];
      return 0;
    });
    setGroup({ ...group, ...x });
    stateFirst.acquaintance.map((f, idx) => {
      x["acquaintance" + idx] = [];
      return 0;
    });
    setGroup({ ...group, ...x });
    stateFirst.stranger.map((f, idx) => {
      x["stranger" + idx] = [];
      return 0;
    });
    setGroup({ ...group, ...x });
  };

  const handleFamilyChange = (idx) => (e) => {
    const newShareUsers = stateFirst.family.map((shareUser, sidx) => {
      if (idx !== sidx) return shareUser;
      return { ...shareUser, name: e.target.value };
    });
    setStateFirst({ ...stateFirst, family: newShareUsers });
  };

  const handleRemoveFamily = (idx) => () => {
    setStateFirst({
      ...stateFirst,
      family: stateFirst.family.filter((s, sidx) => idx !== sidx),
    });
  };

  const handleAddFamily = () => {
    setStateFirst({
      ...stateFirst,
      family: stateFirst.family.concat([{ name: "" }]),
    });
  };

  const handleFriendChange = (idx) => (e) => {
    const newShareUsers = stateFirst.friends.map((shareUser, sidx) => {
      if (idx !== sidx) return shareUser;
      return { ...shareUser, name: e.target.value };
    });
    setStateFirst({ ...stateFirst, friends: newShareUsers });
  };

  const handleRemoveFriend = (idx) => () => {
    setStateFirst({
      ...stateFirst,
      friends: stateFirst.friends.filter((s, sidx) => idx !== sidx),
    });
  };

  const handleAddFriend = () => {
    setStateFirst({
      ...stateFirst,
      friends: stateFirst.friends.concat([{ name: "" }]),
    });
  };

  const handleColleagueChange = (idx) => (e) => {
    const newShareUsers = stateFirst.colleague.map((shareUser, sidx) => {
      if (idx !== sidx) return shareUser;
      return { ...shareUser, name: e.target.value };
    });
    setStateFirst({ ...stateFirst, colleague: newShareUsers });
  };

  const handleRemoveColleague = (idx) => () => {
    setStateFirst({
      ...stateFirst,
      colleague: stateFirst.colleague.filter((s, sidx) => idx !== sidx),
    });
  };

  const handleAddColleague = () => {
    setStateFirst({
      ...stateFirst,
      colleague: stateFirst.colleague.concat([{ name: "" }]),
    });
  };

  const handleAcquaintanceChange = (idx) => (e) => {
    const newShareUsers = stateFirst.acquaintance.map((shareUser, sidx) => {
      if (idx !== sidx) return shareUser;
      return { ...shareUser, name: e.target.value };
    });
    setStateFirst({ ...stateFirst, acquaintance: newShareUsers });
  };

  const handleRemoveAcquaintance = (idx) => () => {
    setStateFirst({
      ...stateFirst,
      acquaintance: stateFirst.acquaintance.filter((s, sidx) => idx !== sidx),
    });
  };

  const handleAddAcquaintance = () => {
    setStateFirst({
      ...stateFirst,
      acquaintance: stateFirst.acquaintance.concat([{ name: "" }]),
    });
  };

  const handleStrangerChange = (idx) => (e) => {
    const newShareUsers = stateFirst.stranger.map((shareUser, sidx) => {
      if (idx !== sidx) return shareUser;
      return { ...shareUser, name: e.target.value };
    });
    setStateFirst({ ...stateFirst, stranger: newShareUsers });
  };

  const handleRemoveStranger = (idx) => () => {
    setStateFirst({
      ...stateFirst,
      stranger: stateFirst.stranger.filter((s, sidx) => idx !== sidx),
    });
  };

  const handleAddStranger = () => {
    setStateFirst({
      ...stateFirst,
      stranger: stateFirst.stranger.concat([{ name: "" }]),
    });
  };

  return (
    <div
      style={{
        marginTop: 2 + "em",
      }}
    >
      <Container fluid>
        <p>
          Please select the different entities you might be sharing your device
          with.
        </p>
        <Row>
          <Col>
            <Label>
              <input
                type="checkbox"
                checked={stateFirst.isFamily}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStateFirst({
                      ...stateFirst,
                      isFamily: true,
                    });
                  } else {
                    setStateFirst({
                      ...stateFirst,
                      isFamily: false,
                      family: [{}],
                    });
                  }
                }}
              />
              Family Members
            </Label>
            {stateFirst.isFamily === true && (
              <div>
                <p style={{ color: "red", textAlign: "justify" }}>
                  **You can add more specific relation(s) under family Members
                  entity for your convenience.**
                </p>
                {stateFirst.family.map((shareUser, idx) => (
                  <div key={idx}>
                    <input
                      style={{ width: 250 }}
                      type="text"
                      placeholder="Type to add specific relation.."
                      value={shareUser.name}
                      onChange={handleFamilyChange(idx)}
                    />
                    <button
                      onClick={handleRemoveFamily(idx)}
                      style={{
                        width: 75,
                        background: "red",
                        color: "white",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{ background: "#007bff", color: "white" }}
                  onClick={handleAddFamily}
                >
                  Add more relation
                </button>
              </div>
            )}
          </Col>
          <Col>
            <Label>
              <input
                type="checkbox"
                checked={stateFirst.isFriend}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStateFirst({
                      ...stateFirst,
                      isFriend: true,
                    });
                  } else {
                    setStateFirst({
                      ...stateFirst,
                      isFriend: false,
                      friends: [{}],
                    });
                  }
                }}
              />
              Friends
            </Label>
            {stateFirst.isFriend === true && (
              <div>
                <p style={{ color: "red", textAlign: "justify" }}>
                  **You can add more specific relation(s) under friends entity
                  for your convenience.**
                </p>
                {stateFirst.friends.map((shareUser, idx) => (
                  <div key={idx}>
                    <input
                      style={{ width: 250 }}
                      type="text"
                      placeholder="Type to add specific relation.."
                      value={shareUser.name}
                      onChange={handleFriendChange(idx)}
                    />
                    <button
                      onClick={handleRemoveFriend(idx)}
                      style={{ width: 75, background: "red", color: "white" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{ background: "#007bff", color: "white" }}
                  onClick={handleAddFriend}
                >
                  Add more relation
                </button>
              </div>
            )}
          </Col>
        </Row>
        <Row style={{ marginTop: 1 + "em", marginBottom: 1 + "em" }}></Row>
        <Row>
          <Col>
            <Label>
              <input
                type="checkbox"
                checked={stateFirst.isColleague}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStateFirst({
                      ...stateFirst,
                      isColleague: true,
                    });
                  } else {
                    setStateFirst({
                      ...stateFirst,
                      isColleague: false,
                      colleague: [{}],
                    });
                  }
                }}
              />
              Colleagues
            </Label>
            {stateFirst.isColleague === true && (
              <div>
                <p style={{ color: "red", textAlign: "justify" }}>
                  **You can add more specific relation(s) under colleagues
                  entity for your convenience.**
                </p>
                {stateFirst.colleague.map((shareUser, idx) => (
                  <div key={idx}>
                    <input
                      style={{ width: 250 }}
                      type="text"
                      placeholder="Type to add specific relation.."
                      value={shareUser.name}
                      onChange={handleColleagueChange(idx)}
                    />
                    <button
                      onClick={handleRemoveColleague(idx)}
                      style={{ width: 75, background: "red", color: "white" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{ background: "#007bff", color: "white" }}
                  onClick={handleAddColleague}
                >
                  Add more relation
                </button>
              </div>
            )}
          </Col>
          <Col>
            <Label>
              <input
                type="checkbox"
                checked={stateFirst.isAcquaintance}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStateFirst({
                      ...stateFirst,
                      isAcquaintance: true,
                    });
                  } else {
                    setStateFirst({
                      ...stateFirst,
                      isAcquaintance: false,
                      acquaintance: [{}],
                    });
                  }
                }}
              />
              Acquaintances
            </Label>
            {stateFirst.isAcquaintance === true && (
              <div>
                <p style={{ color: "red", textAlign: "justify" }}>
                  **You can add more specific relation(s) under acquaintances
                  entity for your convenience.**
                </p>
                {stateFirst.acquaintance.map((shareUser, idx) => (
                  <div key={idx}>
                    <input
                      style={{ width: 250 }}
                      type="text"
                      placeholder="Type to add specific relation.."
                      value={shareUser.name}
                      onChange={handleAcquaintanceChange(idx)}
                    />
                    <button
                      onClick={handleRemoveAcquaintance(idx)}
                      style={{ width: 75, background: "red", color: "white" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{ background: "#007bff", color: "white" }}
                  onClick={handleAddAcquaintance}
                >
                  Add more relation
                </button>
              </div>
            )}
          </Col>
        </Row>
        <Row style={{ marginTop: 1 + "em", marginBottom: 1 + "em" }}></Row>
        <Row>
          <Col>
            <Label>
              <input
                type="checkbox"
                checked={stateFirst.isStranger}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStateFirst({
                      ...stateFirst,
                      isStranger: true,
                    });
                  } else {
                    setStateFirst({
                      ...stateFirst,
                      isStranger: false,
                      stranger: [{}],
                    });
                  }
                }}
              />
              Strangers
            </Label>
            {stateFirst.isStranger === true && (
              <div>
                <p style={{ color: "red", textAlign: "justify" }}>
                  **You can add more specific relation(s) under strangers entity
                  for your convenience.**
                </p>
                {stateFirst.stranger.map((shareUser, idx) => (
                  <div key={idx}>
                    <input
                      style={{ width: 250 }}
                      type="text"
                      placeholder="Type to add specific relation.."
                      value={shareUser.name}
                      onChange={handleStrangerChange(idx)}
                    />
                    <button
                      onClick={handleRemoveStranger(idx)}
                      style={{ width: 75, background: "red", color: "white" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{ background: "#007bff", color: "white" }}
                  onClick={handleAddStranger}
                >
                  Add more relation
                </button>
              </div>
            )}
          </Col>
          <Col></Col>
        </Row>
        <div
          style={{ marginTop: 3 + "em", marginBottom: 3 + "em" }}
          className="text-center"
        >
          <Link to="/">
            <Button style={{ marginRight: 8 + "em" }} color="primary">
              Back
            </Button>
          </Link>

          <Link to="/apppicker" onClick={addRelation}>
            <Button
              disabled={
                !stateFirst.isFamily &&
                !stateFirst.isFriend &&
                !stateFirst.isColleague &&
                !stateFirst.isAcquaintance &&
                !stateFirst.isStranger
              }
              style={{ marginLeft: 8 + "em" }}
              color="primary"
            >
              Next
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Relation;
