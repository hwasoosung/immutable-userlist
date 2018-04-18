import React from 'react';
// import {Map, List} from 'immutable';

class User extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const username = this.props.user.get('username');
    // const {username} = this.props.user.toJS();
    console.log('%s가 렌더링 되고 있어요!', username);
    return (
      <div>
        {username}
      </div>
    )
  }
}

export default User;