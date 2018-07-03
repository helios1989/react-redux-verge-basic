import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName, setAge } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeAge={() => this.props.setAge(33)} changeUsername={() => this.props.setName("Anna")}/>
                <User age={this.props.user.age} username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge: (age) => {
            dispatch(setAge(age));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);