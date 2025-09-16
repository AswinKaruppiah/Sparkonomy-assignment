import React from "react";
import { ChevronDownIcon, BellIcon, EditIcon } from "../../utils/icons";

export default function YourInvoices() {
  const invoices = [
    {
      id: 1,
      title: "Client Name",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "update-status",
      btnText: "Update Status",
      btn: true,
      btnIcon: <ChevronDownIcon className="w-3 h-3" />,
    },
    {
      id: 2,
      title: "Client Name",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "unpaid",
      statusText: "Unpaid",
    },
    {
      id: 3,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "disputed",
      statusText: "Disputed",
    },
    {
      id: 4,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusText: "Paid",
    },
    {
      id: 5,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusText: "Paid",
    },
    {
      id: 6,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "partially-paid",
      statusText: "Partially Paid",
    },
    {
      id: 7,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusText: "Paid",
      icon: "",
    },
    {
      id: 8,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "overdue",
      statusText: "Overdue",
      icon: <BellIcon className="h-4 sm:h-6 w-4 sm:w-6" />,
    },
    {
      id: 9,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "awaited",
      statusText: "Awaited",
      icon: <BellIcon className="h-4 sm:h-6 w-4 sm:w-6" />,
    },
    {
      id: 9,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "draft",
      statusText: "Draft",
      icon: <EditIcon className="h-4 sm:h-6 w-4 sm:w-6" />,
    },
    {
      id: 10,
      title: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusText: "Paid",
    },
  ];

  return (
    <div className="your-invoices-section">
      <div className="invoices-header">
        <h2 className="invoices-title">Your Invoices</h2>
        <button className="dropdown-button">
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="invoices-list">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="invoice-item">
            <div className="invoice-left">
              <h3 className="invoice-title">{invoice.title}</h3>
              <div className="invoice-details">
                <span className="invoice-amount">{invoice.amount},</span>
                <span className="invoice-due">Due: {invoice.dueDate}</span>
              </div>
            </div>
            <div className="invoice-right">
              {invoice?.statusText && (
                <span className={`status-badge ${invoice.status}`}>
                  {invoice.statusText}
                </span>
              )}
              {invoice.btn && (
                <button className={`${invoice.status}`}>
                  {invoice?.btnText}
                  {invoice?.btnIcon}
                </button>
              )}
              {invoice?.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
