import React, { useEffect, useState } from "react";
 
export default function Typing() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
 
  const texts = ["GVD CRACKERS"]; // Texts to type and delete
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const pauseTime = 1000; // Pause time before deleting or switching text
 
  useEffect(() => {
    let timeout;
 
    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Switch to next text after deleting
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
    }
 
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);
 
  return (
<div className="typewriter whitespace-nowrap ">
<span>{displayText}</span> 
</div>
  );
}