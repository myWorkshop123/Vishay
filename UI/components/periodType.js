import React, { useEffect, useState } from "react";
export default function PeriodType({ subfieldInfo,updateQuotaWithToggle }) {
  return (
    subfieldInfo && (
      <div className="p-6 card bordered bg-neutral w-1/5 ">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text text-primary-content">
              {subfieldInfo.name}
            </span>
            <span
              className="label-text text-primary-content"
              id="PeriodTypeValue"
            >
              {subfieldInfo.score}
            </span>
            <input
              className="toggle toggle-secondary"
              onChange={updateQuotaWithToggle}
              type="checkbox"
              value={subfieldInfo.score}
            />
          </label>
        </div>
      </div>
    )
  );
}
