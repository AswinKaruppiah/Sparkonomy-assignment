import React from "react";
import Invoice from "./Invoice";
import YourInvoices from "./YourInvoices";

export default function Home() {
  return (
    <section className="home-section">
      <Invoice />
      <YourInvoices />
    </section>
  );
}
