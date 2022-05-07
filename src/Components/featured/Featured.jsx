import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>552 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>250 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
