import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>作者：{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p style={{ textAlign: "center" }}>
        在此下載圖片：{" "}
        <a target="_blank" href={data.src.large}>
          按一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
