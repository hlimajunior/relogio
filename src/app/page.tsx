"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = time.getDate().toString().padStart(2, "0");
  const month = time.getMonth().toString().padStart(2, "0");
  const year = time.getFullYear().toString().padStart(2, "0");
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="backcolor flex flex-col items-center justify-center p-0">
      <span className="font-semibold font-sans text-[150px]
       text-red-500 m-0">
        {`${hours}`}<br />
        {`${minutes}`}<br />
       
      </span>
      <br />
      <span className="font-thin font-sans text-[80px] text-teal-500 text-center" >
        {`${day}/${month}`}
      </span>
    </div>
  );
}
