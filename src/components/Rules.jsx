import { useState } from "react";
import { rules } from "../data";

export default function Rules() {

  let [showRules, setShowRules] = useState(false);

  return (
    <div className="rules">
      <button className="btn position-fixed rules text-white fs-5" onClick={() => setShowRules(true)}>Rules</button>
      <div className={"position-fixed overlay blured centered w-100 h-100 " + (!showRules ? "d-none" : "")} onClick={() => setShowRules(false)}>
        <ul>
          {rules.map((rule, index) => {
            return (
              <li key={index} className="text-start mb-3 fs-5">{rule}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};