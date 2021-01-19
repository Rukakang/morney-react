import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import Nav from "components/Nav";
import Layout from "components/Layout";

function App() {
    return(
        <Router>
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
        </Router>
    )
}

function Statistics() {
    return (
        <Layout>
            <h2>统计页</h2>
        </Layout>
    );
}

function Tags() {
    return (
        <Layout>
            <h2>标签页</h2>
        </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>记账页</h2>
        </Layout>
    );
}
function NoMatch() {
    let location = useLocation();
    return (
        <h3>404 NOT FOUND <code>{location.pathname}</code></h3>
    );
}


export default App;