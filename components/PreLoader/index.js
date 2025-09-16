import React, { useEffect, useState } from "react";
import JRLogo from "../JRLogo";

const PreLoader = () => {
  const [loader, handleLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.style.setProperty("--scrollBarWidth", "8px");
      handleLoader(false);
    }, 1500);
  }, []);

  return (
    <div className={`mk-pre-loader ${loader ? "mk-pre-loader-enabled" : "mk-pre-loader-disabled"}`}>
      <div className="mk-pre-loader-boarder" />
      <div className="mk-pre-loader-container">
        <JRLogo forceVisible />
      </div>
    </div>
  );
};

PreLoader.propTypes = {};

export default PreLoader;
