import React, { useState } from "react";
import { CrownIcon, CalendarIcon } from "../../utils/icons";

export default function TimePeriodFilter() {
  const [selectedPeriod, setSelectedPeriod] = useState(2);

  const periods = [
    { id: 1, label: "1 Month" },
    { id: 2, label: "3 Months" },
    {
      id: 3,
      label: "1 Year",
      icon: <CrownIcon className="w-6 h-6" />,
      iconPosition: "end",
    },
    {
      id: 4,
      label: "Custom",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="time-period-section">
      <div className="time-period-card">
        <div className="time-period-header">
          <span className="time-period-label">Time Period</span>
          <span className="date-range-placeholder">
            dd:mm:yyyy - dd:mm:yyyy
          </span>
        </div>
        <div className="period-buttons">
          {periods.map((period) => {
            const IconComponent = period.icon;
            return (
              <button
                key={period.id}
                className={`period-button ${
                  selectedPeriod === period.id ? "active" : ""
                }`}
                onClick={() => setSelectedPeriod(period.id)}
              >
                {!(period.iconPosition === "end") && period.icon && period.icon}
                <span>{period.label}</span>
                {period.iconPosition === "end" && IconComponent && period.icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
