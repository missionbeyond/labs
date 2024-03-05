import { useRef, useEffect, useState } from "react";

export const Highlighter = ({ children, terms = [] }) => {
  const r = useRef();
  const [highlighted, setHighlighted] = useState(true);
  useEffect(() => {
    if (highlighted) {
      const text = (r.current ?? document).querySelector("div.prose");
      if (text) {
        for (const { term, definition } of terms) {
          const regex = new RegExp(`\\b${term}\\b`, "gi");
          text.innerHTML = text.innerHTML.replace(regex, `<em title="${definition}">${term}</em>`);
        }
        setHighlighted(true);
      }
    }
  }, [highlighted]);
  return <div ref={r}>{children}</div>;
};
