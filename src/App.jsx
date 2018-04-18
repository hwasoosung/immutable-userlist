import React, { Component } from 'react';
import logo from './logo.svg';
import UserList from './UserList'
import './App.css';
import {Map, List} from 'immutable';

class App extends Component {
  constructor(props) {
    super(props);

    this.id = 3;
    this.state = {data:Map({
      input: '',
      users: List([
        Map({ id: 1, username: 'a' }),
        Map({ id: 2, username: 'b' })
      ])
    })}

    this.onChange = this.onChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;
    // this.setState({
    //   data: data.set('input', value)
    // });

    /* my code */
    // const { value } = e.target;
    // console.log(this.state.data.set('input', value));
    this.setState((prevState) => {
      
    //    (X)
    //    return prevState.data.set('input', value);
    //    (O)
       return {data: data.set('input', value)};
    });
  }


  onButtonClick = (e) => {
    // input을 빈칸으로 바꾸고 -> set
    // users에 추가 -> inner push
    let { data } = this.state;
    let dataArr = data.get('users');

    dataArr = dataArr.push(Map({id: this.id++, username: data.get('input')}));

    data = data.set('input', '');
    data = data.set('users', dataArr);
    this.setState({
      data: data
    })
    // this.setState({
    //   data: data.set('input', '')
    //             .update('users', users=> users.push(Map({ id: this.id++, username: data.get('input')})) )
    // });

    // this.setState( ({input, users}) => ({
    //   input: '',
    //   users: users.concat({
    //     id: this.id++,
    //     username: input
    //   })
    // }));
  }
  
  render() {
    const { onChange, onButtonClick } = this;
    const {data} = this.state;

    // Map 혹은 List 의 값을 읽을땐 
    // data.users 이런식으로는 읽지 못하고, 
    // data.get(‘users’) 이런식으로 읽어야 합니다.
    const input = data.get('input');
    const users = data.get('users');

    // 부모 컴포넌트가 리렌더링 되면, 자식 컴포넌트들 또한 리렌더링이 됩니다.
    // 이 과정은, 가상 DOM 에만 이뤄지는 렌더링이며, 렌더링을 마치고, 리액트의 diffing 알고리즘을 통하여 변화가 일어나는 부분만 실제로 업데이트 해줍니다.
    // 지금은 인풋 내용이 수정 될 때마다 UserList 도 새로 렌더링이 되고있습니다.
    // 실제 DOM 에는 반영되지는 않겠지만, 그래도 CPU 쪽에 미세한 낭비가 발생하게 되죠.
    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
