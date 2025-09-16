import React from "react";

export default function FinancialSummary() {
  const metrics = [
    {
      label: "Total Earnings",
      amount: "$1,25,000",
      className: "total-earnings",
    },
    {
      label: "Payment Awaited",
      amount: "$25,000",
      className: "payment-awaited",
    },
    {
      label: "Payment Overdue",
      amount: "$25,000",
      className: "payment-overdue",
    },
  ];

  return (
    <div className="financial-summary-section">
      {metrics.map((metric) => (
        <div
          key={metric.className}
          className={`financial-card ${metric.className}`}
        >
          <span className="financial-label">{metric.label}</span>
          <span className="financial-amount">{metric.amount}</span>
        </div>
      ))}
    </div>
  );
}
