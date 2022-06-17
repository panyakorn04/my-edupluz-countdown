import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="p-10">
      <h1 className="flex justify-center font-extrabold text-6xl  rounded-md">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p className="text-teal-500">:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p className="text-teal-500">:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p className="text-teal-500">:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </h1>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
