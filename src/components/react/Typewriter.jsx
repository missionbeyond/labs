import React, { useEffect, useRef, useState } from "react";

export const Typewriter = ({ text = [] }) => {
  let paraCount = 0;
  const timer = useRef(null);
  const paras = text.map((p) => p.split(" "));
  const paraLengths = paras.map((p) => p.length);
  const paraStarts = paraLengths.map((_, i) =>
    paraLengths.slice(0, i).reduce((acc, l) => acc + l, 0)
  );
  const wordTotal = paras.reduce((acc, p) => acc + p.length, 0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setWordCount((wc) => wc + 1);
      }, 75);
    }
    return () => {
      if (!timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (timer.current && wordCount >= wordTotal) {
        clearInterval(timer.current);
    }
  }, [wordCount]);

  return (
    <div>
      {paras
        .filter((p, i) => wordCount > paraStarts[i])
        .map((p,i) => (
          <p key={`p-${i}`}>{p.slice(0, wordCount - paraStarts[i] + 1).join(" ")}</p>
        ))}
    </div>
  );
};
