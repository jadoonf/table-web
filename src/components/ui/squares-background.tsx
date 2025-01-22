"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SquaresProps {
  direction?: "diagonal" | "horizontal" | "vertical";
  speed?: number;
  squareSize?: number;
  borderColor?: string;
  hoverFillColor?: string;
  className?: string;
}

export function Squares({
  direction = "diagonal",
  speed = 0.5,
  squareSize = 40,
  borderColor = "#333",
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const squares: HTMLDivElement[] = [];
    const rows = Math.ceil(container.offsetHeight / squareSize);
    const cols = Math.ceil(container.offsetWidth / squareSize);

    // Clear existing squares
    container.innerHTML = "";

    // Create squares
    for (let i = 0; i < rows * cols; i++) {
      const square = document.createElement("div");
      square.className = "absolute transition-colors duration-500";
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.border = `1px solid ${borderColor}`;
      square.style.backgroundColor = "transparent";

      // Position squares
      const row = Math.floor(i / cols);
      const col = i % cols;
      square.style.top = `${row * squareSize}px`;
      square.style.left = `${col * squareSize}px`;

      // Add hover effect
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = hoverFillColor;
      });
      square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "transparent";
      });

      // Add animation
      const delay = direction === "diagonal" 
        ? (row + col) * speed
        : direction === "horizontal"
        ? col * speed
        : row * speed;
      
      square.style.animation = `squareFadeIn 0.5s ${delay}s forwards`;
      squares.push(square);
      container.appendChild(square);
    }

    // Add animation keyframes
    const style = document.createElement("style");
    style.textContent = `
      @keyframes squareFadeIn {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [direction, speed, squareSize, borderColor, hoverFillColor]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    />
  );
} 