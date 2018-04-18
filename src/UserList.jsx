import React from 'react';
import User from './User';
// import {Map, List} from 'immutable';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.users !== nextProps.users; 
  }

  renderUsers = () => {
    const { users } = this.props;
    return users.map((user) => (
      <User user={user} />
    ));
  }

  render() {
    console.log('UserList가 렌더링되고 있어요!');
    const { renderUsers } = this;
    return (
      <div>
        {renderUsers()}
      </div>
    );
  }
}

export default UserList;