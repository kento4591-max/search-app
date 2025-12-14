import React from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";

const MenuScreen = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search"); // 検索画面に遷移
  };

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>メニュー画面</h2>
      <div className="menu-buttons">
        <button className="primary" onClick={handleSearchClick}>
          検索
        </button>
        <button className="disabled" disabled>
          登録
        </button>
        <button className="disabled" disabled>
          修正
        </button>
        <button className="disabled" disabled>
          削除
        </button>
      </div>
    </div>
  );
};

export default MenuScreen;
