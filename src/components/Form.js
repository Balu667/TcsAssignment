import "./Form.css";
import React, { useState } from "react";
import List from "./List";

export default function Form(props) {
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState();
  const [probability, setProbability] = useState();
  const [impact, setImpact] = useState();
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      type,
      probability,
      impact,
    };

    console.log(data);
    setList([...list, { data }]);
    setTitle("");
    setDescription("");
    setType("");
    setImpact("");
    setProbability("");
  };

  console.log(list, "list items");

  return (
    <div className="List-1">
      <form onSubmit={submitHandler}>
        <div>
          <label>Title:</label>
          <input
            className="title-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="Description-1"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
          />
        </div>
        <div>
          <label>Type</label>
          <select
            className="type-1"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">enter your type</option>
            <option value="Risk">Risk</option>
            <option value="Issue">Issue</option>
          </select>
        </div>
        <div>
          <label>probability</label>
          <select
            className="probability-1"
            value={probability}
            onChange={(e) => setProbability(e.target.value)}
          >
            <option value="">Select a Probability</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Impact</label>
          <select
            className="Impact-1"
            value={impact}
            onChange={(e) => setImpact(e.target.value)}
          >
            <option value="">Select a Impact</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button className="btn-1" type="submit">
          Submit
        </button>
      </form>
      <List ranga={list} />
    </div>
  );
}
