"use client";

import { useEffect, useState } from "react";
import { utcToZonedTime } from "date-fns-tz";

export default function Clock() {
  const saoPauloTimeZone = "America/Sao_Paulo";
  const [time, setTime] = useState(
    utcToZonedTime(new Date(), saoPauloTimeZone)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(utcToZonedTime(new Date(), saoPauloTimeZone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = time.getDate().toString().padStart(2, "0");
  const month = (time.getMonth()+1).toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <span
        className="flex flex-col justify-center items-center 
            font-semibold font-sans text-[250px] text-red-500"
      >
        {hours}
        <br />
        {minutes}
        <br />
        <span className="text-[50px]">{seconds}</span>
      </span>
      <br />
      <div className="font-thin font-sans text-[100px] text-teal-500 text-center">
        {`${day}/${month}`}
      </div>
    </div>
  );
}
