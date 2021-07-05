import React, {Component} from 'react';
import CreateTodos from "./CreateTodos";
import Table from "./Table";
import Button from "@material-ui/core/Button";
import Redirect from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import {logOut} from "../store/actions/users";

class FullTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        }
    }
    logout = () => {
        this.setState({
            logout: true
        })
        this.props.logOut()
    }
    render() {
        const {logout} = this.state
        return (
            <div className="container">
                <CreateTodos
                    onAddTodo={this.onAddTodo}
                />
                <hr className="mb-5"/>
                <Table/>
                <Button onClick={this.logout} size='large' color='secondary' variant='contained'>LOGOUT</Button>
                {logout && <Redirect to='/'/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
    logOut,
}
const ContainerC = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FullTable)

export default ContainerC;
