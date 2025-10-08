var typed = new Typed(".develop", {
  strings: ["Frontend Developer", "Full Stack Developer", "Designer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
import React, { useEffect, useState } from "react";
import "./pacman.css";

export default function PacmanGame() {
  const [pacmanPosition, setPacmanPosition] = useState({ x: 1, y: 1 });
  const gridSize = 10;

  const handleKeyDown = (e) => {
    setPacmanPosition((prev) => {
      switch (e.key) {
        case "ArrowUp":
          return { ...prev, y: Math.max(0, prev.y - 1) };
        case "ArrowDown":
          return { ...prev, y: Math.min(gridSize - 1, prev.y + 1) };
        case "ArrowLeft":
          return { ...prev, x: Math.max(0, prev.x - 1) };
        case "ArrowRight":
          return { ...prev, x: Math.min(gridSize - 1, prev.x + 1) };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Pac-Man Coding Section 🎮</h2>
      <p className="text-gray-700 mb-4">
        Move Pac-Man with your arrow keys! This mini game demonstrates my JavaScript and animation skills.
      </p>

      <div className="pacman-grid">
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          const isPacman = pacmanPosition.x === x && pacmanPosition.y === y;

          return (
            <div key={i} className="cell">
              {isPacman && <div className="pacman"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
