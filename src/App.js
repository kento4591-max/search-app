import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuScreen from "./MenuScreen";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    const params = new URLSearchParams({
      name: query.name,
      dob: query.dob,
      affiliation: query.affiliation,
    }).toString();

    fetch(`http://localhost:8080/api/search?${params}`)
      .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
          throw new Error("API呼び出しに失敗しました");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API結果:", data);
        setResults(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        alert("検索に失敗しました");
      });
  };

  return (
    <Router>
      <Routes>
        {/* 起動時は MenuScreen を表示 */}
        <Route path="/" element={<MenuScreen />} />

        {/* 検索画面 */}
        <Route path="/search" element={<SearchForm onSearch={handleSearch} />} />

        {/* 検索結果画面 */}
        <Route path="/result" element={<SearchResult data={results} />} />
      </Routes>
    </Router>
  );
}

export default App;
