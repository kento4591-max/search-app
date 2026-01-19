import React from "react";
import "../common.css"; // components配下なので ../ に修正

function SearchResult({ data }) {
  if (!data || data.length === 0) {
    return <p>検索結果がありません。</p>;
  }

  return (
    <div className="container result">
      <h3>検索結果</h3>
      <table className="result-table">
        <thead>
          <tr>
            <th>名前</th>
            <th>所属</th>
            <th>生年月日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.affiliation}</td>
              <td>{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResult;
