import React from 'react'

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({count: current.count + 1}))
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}))
  }

  render() {
    return (
      <div>
        <h1>
          The number is: {this.state.count}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}


export default App;


//children component로 정보를 보내는 방법을 할거야
//application에서 food component로 정보를 보내고
// 그다음에 foodcomponent에서 정보를 사용해보자.
//dish는 object다!! 꼭기억해 
//
//setState를 사용하면 새 state를 업데이트하고 render function이 호출된다. 
//state를 set할때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
/*
NOT 
add = () => {
  this.setState({count: this.state.count + 1})
}
DO
add = () => {
    this.setState(current => ({count: current.count + 1}))
  }
*/