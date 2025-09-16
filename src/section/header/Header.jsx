import React from "react";
import { ChevronIcon } from "../../utils/icons";

export default function Header() {
  return (
    <nav>
      <div className="wrapper">
        <button>
          <ChevronIcon className="size-3 -mb-[2px]" />
          <span>Back</span>
        </button>
        <h5>Dashboard</h5>
        <div className="profile">
          <img src="/header/Shape.png" alt="profile" />
        </div>
      </div>
    </nav>
  );
}
