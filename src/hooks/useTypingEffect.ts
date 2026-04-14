"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(text: string, speed = 70) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setOutput(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
}
