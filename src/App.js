import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { icons } from "./icons";
import Welcome from "./welcome";
import Trailer from "./trailer";
import AppPicker from "./appPicker";
import Groups from "./groups";
import Friends from "./friend";
import Colleagues from "./colleague";
import Relation from "./relations";
import "./App.css";


//function App(){
const App = () => {
  const [state, setState] = useState({});
  const [app, setApp] = useState(icons);
  const [stateFirst, setStateFirst] = useState({
    name: "",
    password: "",
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
  const [group, setGroup] = useState({});
  //const [friend, setFriend] = useState({});
  console.log(group);
  //const [ stateSecond, setStateSecond ] = useState( { password: '', checkpass: '', counter: 0, shareUsers: [{name: ''}] } );
  //const [ pass, setPass ] = useState({ password: '', checkpass: '', counter: 0});
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="app" sm="12" md={{ size: 6, offset: 3 }}>
            <Router>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/trailer" component={Trailer} />
                <Route
                  path="/sharing"
                  render={(props) => (
                    <Relation
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      group={group}
                      setGroup={setGroup}
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
                    <Groups
                      state={state}
                      setState={setState}
                      app={app}
                      setApp={setApp}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
                      group={group}
                      setGroup={setGroup}
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
                      group={group}
                      setGroup={setGroup}
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
                      group={group}
                      setGroup={setGroup}
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
