import React from "react";

const Refresh = ({onClick}) => {
  return (
    <div className="refresh" onClick={onClick}>
      Refresh <i className="fas fa-sync-alt"></i>
    </div>
  );
};

export default Refresh;
