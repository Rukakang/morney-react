import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Money from "views/Money";
import Statistics from "views/Statistics";
import Tags from "views/Tags";
import NoMatch from "views/NotFound";
import styled from "styled-components";
import {Tag} from "./views/Tag";

const AppWrapper=styled.div`
  color: #333;
`

function App() {
    return(
        <AppWrapper>
            <Router>
                <Switch>
                    <Route exact={true} path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact={true} path="/tags/:id">
                        <Tag/>
                    </Route>
                    <Route exact={true} path="/money">
                        <Money/>
                    </Route>
                    <Route exact={true} path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    )
}


export default App;