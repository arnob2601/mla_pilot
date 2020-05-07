import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { icons } from "./icons";
import Welcome from "./welcome";
import Trailer from "./trailer";
import AppPicker from "./appPicker";
import Public from "./firstLayer";
import Relation from "./relations";
import "./App.css";
import Groups from "./secondLayer";

//function App(){
const App = () => {
  const [state, setState] = useState({});
  const [app, setApp] = useState(icons);
  const [stateFirst, setStateFirst] = useState({
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
  //const [ stateSecond, setStateSecond ] = useState( { password: '', checkpass: '', counter: 0, shareUsers: [{name: ''}] } );
  //const [ pass, setPass ] = useState({ password: '', checkpass: '', counter: 0});
  console.log(app);

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
                      {...props}
                    />
                  )}
                />             
                <Route
                  path="/grouping"
                  render={(props) => (
                    <Groups
                      state={state}
                      setState={setState}
                      stateFirst={stateFirst}
                      setStateFirst={setStateFirst}
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
