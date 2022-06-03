import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2  bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  setCounter() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.setCounter()} </span>
        <button
          onClick={() => this.props.onAdd(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Add to Cart
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
