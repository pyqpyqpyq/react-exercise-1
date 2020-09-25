import React,{ Component } from "react";
import"./Counter.css"

class Counter extends Component{
  // state = {
  //     count: this.props.value,
  // };

  // handleIncrement=()=>{
  //     this.setState({
  //         count:this.state.count+1,
  //     });
  // };

  // handleMinus=()=>{
  //     this.setState({
  //         count:this.state.count-1,
  //     });
  // };

  render() {
    const { onPlus, onMinus, onDelete ,value} = this.props;
    return (
      <div className="counter">
        <button onClick={onMinus}> - </button>
        <span className="count">{value}</span>
        <button onClick={onPlus}> + </button>
        <button className="delete" onClick={onDelete}>
          delete
        </button>
      </div>
    );
  }
}

export default Counter;