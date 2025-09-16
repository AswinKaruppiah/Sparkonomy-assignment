import React from "react";
import Invoice from "./Invoice";
import YourInvoices from "./YourInvoices";
import Chart from "./Chart";

export default function Home() {
  return (
    <section className="home-section">
      <Invoice />
      <Chart />
      <YourInvoices />
    </section>
  );
}
