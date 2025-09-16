import React from "react";
import { PlusIcon } from "../../utils/icons";

export default function CreateInvoice() {
  return (
    <div className="create-invoice-section">
      <div className="create-invoice-card">
        <div className="create-icon">
          <PlusIcon className="plus-icon" />
        </div>
        <h2 className="create-title">Create New Invoice</h2>
        <p className="create-description">
          Start by creating and sending new invoice
        </p>
      </div>
      <p className="upload-text">
        Or Upload an existing invoice and set payment reminder
      </p>
    </div>
  );
}
