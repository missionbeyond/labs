import React, { useState, useRef, useEffect } from "react";

export const ScrollSpy = ({ children, elements = "", options }) => {
  const r = useRef();
  const [els, setEls ] = useState([]);
  const [currentIntersectingElementIndex] = useScrollspy(els, { root: document });
  
  useEffect(()=> {

    // find h3 elements that aren't direct children of a section element
    // and wrap them with sections

    if (!r.current) return;
    const root = r.current.querySelector("div.prose");
    let currentSection = null;
    const kids = Array.from(root?.children ?? []);
    console.log(kids)
    for (const el of kids) {
      if (el.tagName === "H3") {
        const section = document.createElement("section");
        root.insertBefore(section, el);
        section.appendChild(el);
        section.setAttribute("data-heading", el.getAttribute("id") ?? "");
        currentSection = section;
      } else if (currentSection) {
        currentSection.appendChild(el);
      }
    }



    const e = (root ?? document).querySelectorAll("section");
    const ae = Array.from(e);
    console.log(ae);
    setEls(ae);
  }, [])
  
  useEffect(() => {
    const section = els[currentIntersectingElementIndex];
    if (section) {
      console.log(section.getAttribute("data-heading"));
    }
  }, [currentIntersectingElementIndex]);
  return <div ref={r}>{children}</div>;
};

// https://blog.maximeheckel.com/posts/scrollspy-demystified/

const useScrollspy = (elements, options) => {
  const observer = useRef();
  const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
    useState(-1);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        const idx = entries.findIndex((entry) => entry.intersectionRatio > 0);
        setCurrentIntersectingElementIndex(idx);
      },
      {
        root: (options && options.root) || null,
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;

    // observe all the elements passed as argument of the hook
    elements.forEach((element) =>
      element ? currentObserver.observe(element) : null
    );

    return () => currentObserver.disconnect();
  }, [elements, options, rootMargin]);

  return [currentIntersectingElementIndex];
};
