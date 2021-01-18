import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
} from "react-router-dom";

function App() {
    return(<Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/tags">标签页</Link>
                    </li>
                    <li>
                        <Link to="/money">记账页</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计页</Link>
                    </li>
                </ul>
            </nav>


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
        </div>
    </Router>)
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