import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";


const Wrapper = styled.div`
    min-height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
const Main =styled.div`
    flex-grow: 1;
`;

function App() {
    return(
        <Router>
            <Wrapper>
                <Main>
                <Switch>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    )
}

function Statistics() {
    return <h2>统计页</h2>;
}

function Tags() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记账页</h2>;
}
function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                404 NOT FOUND <code>{location.pathname}</code>
            </h3>
        </div>
    );
}


export default App;