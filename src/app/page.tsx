"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
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
  const month = time.getMonth().toString().padStart(2, "0");
  const year = time.getFullYear().toString().padStart(2, "0");
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const formattedTime = format(time, "HH:mm:ss");

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <span
        className="flex flex-col justify-center items-center font-semibold font-sans text-[250px]
       text-red-500"
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
