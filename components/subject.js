import React from "react";
import PeriodType from "../components/periodType";

function Subject({ subinfo, changeQuota, quota }) {
  return (
    <div>
      <div>
        <div>
          {/* Subject Name  */}
          <p className="text-2xl">Subject: {subinfo.name}</p>
        </div>
        <div>
          {/* Total Scores */}
          <p className="text-1xl">Total Credits: {subinfo.score}</p>
        </div>
      </div>
      <div className="flex">
        {subinfo.subField &&
          subinfo.subField.map((element) => {
            return (
              <PeriodType
                subfieldInfo={element}
                key={Math.random() + 3}
                changeQuota={changeQuota}
                quota={quota}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Subject;
