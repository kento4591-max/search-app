import React from "react";

function SearchResult({ data }) {
  if (!data || data.length === 0) {
    return <p>検索結果がありません。</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>検索結果</h3>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={thStyle}>名前</th>
            <th style={thStyle}>所属</th>
            <th style={thStyle}>生年月日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.affiliation}</td>
              <td style={tdStyle}>{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px"
};

export default SearchResult;
