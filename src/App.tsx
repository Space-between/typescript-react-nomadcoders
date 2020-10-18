import React, { Component } from 'react';
import { Form, Input } from './Input';
import Number from './Number';

interface IState {
  counter: number; //state안에 있는 counter의 타입을  number로 지정한 것이다. 
  name: string;
}

class App extends Component<{}, IState> { //Component옆에 있는 <>여기안에다 interface로 타입의 형식을 지정한 객체를 넣어서 props와 state의 타입을 지정할 수 있다. 첫번쨰 인자가 props이고 두번째 인자가 state이다. 
  state = {
    counter: 0,
    name: ""
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />  
        </Form>
       <Number count={counter} /> <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {//Input엘리먼트의 onChange라는 props에다가 현재 옆에위치하고 있는 onChange함수를 호출시키는 것을 전달하고 있다. 매개변수에 있는 event의 타입은 HTMLInputElement이라고 해놨다.
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };


  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }
}

export default App;
