import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuScreen from "./MenuScreen";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./common.css";


function App() {
  const [results, setResults] = useState([]); //「このコンポーネントは results という状態を持ちます。setResults が呼ばれたら UI を描き直します」

  const handleSearch = (query) => {
    const params = new URLSearchParams({
      name: query.name,
      dob: query.dob,
      affiliation: query.affiliation,
    }).toString();

    fetch(`https://search-api-whna.onrender.com/api/search?${params}`)
      .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
          throw new Error("API呼び出しに失敗しました");
        }
        return response.json(); //jsonで帰ってきた結果を、jsオブジェクトに変換
      })
      .then((data) => { //dataには検索結果のjsオブジェクト
        console.log("API結果:", data);
        setResults(data);
        navigate("/result");
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
