import React from "react";

import Index2 from "../index2";
import Flist from "./flist";

const WebPage = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col">
          <Index2 />
        </div>
        <div className="col6">
          <Flist />
        </div>
      </div>
    </div>
  </div>
);

export default WebPage;
