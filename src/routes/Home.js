import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  console.log(props);
  const [text, setText] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    toDos: state,
  };
};

export default connect(mapStateToProps)(Home);
