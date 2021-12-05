import React, { useState } from "react";
function PeriodType({ subfieldInfo, changeQuota, quota }) {

  function handleChange(event) {
    let isChecked = event.target.checked;
    let answer = event.target.value;
    if (isChecked === true) {
      // changeQuota(quota-answer);
      console.log("went inside true");
    }
    if (isChecked === false) {
      // changeQuota(quota+answer);
      console.log("went inside false");
    }
  }
  return (
    subfieldInfo && (
      <div className="p-6 card bordered bg-neutral w-1/5 ">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text text-primary-content">
              {subfieldInfo.name}
            </span>
            <span className="label-text text-primary-content" id="PeriodTypeValue" >
              {subfieldInfo.score}
            </span>
            <input
              type="checkbox"
              className="toggle toggle-secondary"
              defaultValue={subfieldInfo.score}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    )
  );
}

export { PeriodType };
