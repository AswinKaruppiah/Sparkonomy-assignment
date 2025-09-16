import React from "react";
import CreateInvoice from "./CreateInvoice";
import TimePeriodFilter from "./TimePeriodFilter";
import FinancialSummary from "./FinancialSummary";
import YourInvoices from "./YourInvoices";

export default function Invoice() {
  return (
    <div className="invoice-dashboard">
      <CreateInvoice />
      <div className="space-y-4 col-span-1 lg:col-span-3">
        <TimePeriodFilter />
        <FinancialSummary />
      </div>
    </div>
  );
}
