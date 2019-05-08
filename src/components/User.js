import React, {Component} from 'react';

class User extends Component {
    render () {
        return (
            <h2>Infomation about {this.props.match.params.username}</h2>
        )
    }
}

export default User;