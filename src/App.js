import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { icons } from "./icons";
import Welcome from "./welcome";
//import Trailer from "./trailer";
import Relation from "./relations";
import AppPicker from "./appPicker";
import Family from "./family";
import Friends from "./friend";
import Colleagues from "./colleague";
import Acquaintance from "./acquaintance";
import Stranger from "./stranger";
import Password from "./pass";
import "./App.css";


//function App(){
const App = () => {
  const [state, setState] = useState({});
  const [app, setApp] = useState(icons);
  const [stateFirst, setStateFirst] = useState({
    name: "",
    user: "test",
    checkpass: "",
    counter: 0,
    family: [{ name: "" }],
    friends: [{ name: "" }],
    colleague: [{ name: "" }],
    acquaintance: [{ name: "" }],
    stranger: [{ name: "" }],
    isFamily: false,
    isFriend: false,
    isColleague: false,
    isAcquaintance: false,
    isStranger: false,
  });
  const [family, setFamily] = useState({});
  const [friend, setFriend] = useState({});
  const [colleague, setColleague] = useState({});
  const [acquaintance, setAcquaintance] = useState({});
  const [stranger, setStranger] = useState({});
  const [password, setPassword] = useState({});
  console.log(family);
  //const [ pass, setPass ] = useState({ password: '', checkpass: '', counter: 0});
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="app" sm="12" md={{ size: 6, offset: 3 }}>
            <Router>
              <Switch>
                <Route path="/" exact component={Welcome} />
                {/*<Route path="/trailer" component={Trailer} />*/}
                <Route
                  path="/sharing"
                  render={(props) => (
                    <Relation
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      family={family}
                      setFamily={setFamily}
                      friend={friend}
                      setFriend={setFriend}
                      colleague={colleague}
                      setColleague={setColleague}
                      acquaintance={acquaintance}
                      setAcquaintance={setAcquaintance}
                      stranger={stranger}
                      setStranger={setStranger}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/apppicker"
                  render={(props) => (
                    <AppPicker
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      {...props}
                    />
                  )}
                />             
                <Route
                  path="/family"
                  render={(props) => (
                    <Family
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      family={family}
                      setFamily={setFamily}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/friend"
                  render={(props) => (
                    <Friends
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      friend={friend}
                      setFriend={setFriend}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/colleague"
                  render={(props) => (
                    <Colleagues
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      colleague={colleague}
                      setColleague={setColleague}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/acquaintance"
                  render={(props) => (
                    <Acquaintance
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      acquaintance={acquaintance}
                      setAcquaintance={setAcquaintance}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/stranger"
                  render={(props) => (
                    <Stranger
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      stranger={stranger}
                      setStranger={setStranger}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/pass"
                  render={(props) => (
                    <Password
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      password={password}
                      setPassword={setPassword}
                      {...props}
                    />
                  )}
                />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
