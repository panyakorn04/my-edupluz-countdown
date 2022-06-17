import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";
import logo from "./logo.svg";

export default function App() {
  const THREE_DAYS_IN_MS = 15 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="flex justify-center ...  items-center  h-[100vh] w-[100vw]">
      <div className="flex flex-col justify-center items-center space-y-6 p-10">
        <img src={logo} alt="logo" className="h-40" />
        <h1 className="text-4xl font-samibold md:text-7xl text-white">
          จะเปิดให้บริการในอีก...
        </h1>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
  );
}
