import React, { useState } from "react";
import "../common.css";


const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロードを防ぐ
    onSearch({ name, dob, affiliation }); // 親(App.js)に検索条件を渡す
  };

  return (
    <form className="container form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">名前：</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">生年月日：</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">所属：</label>
        <input
          type="text"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="primary">検索</button>
      </div>
    </form>
  );
};

export default SearchForm;
