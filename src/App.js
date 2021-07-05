import React, {Component} from 'react';
import  {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTodos from "./components/CreateTodos";
import Table from "./components/Table";
import {createTodo} from './store/actions/table';
import {connect} from "react-redux";
import Account from "./helpers/Account";
import reducers from "./store/reducers";
import users from "./store/reducers/users";
import FullTable from "./components/FullTable";

const token = Account.getToken();

class App extends Component {
    onAddTodo = data => {
        this.props.createTodo(data)
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    {this.props.token && <Route path="/table" exact component={FullTable}/>}
                </Switch>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.users.auth
});

const mapDispatchToProps = {
    createTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
