'use client'
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 border-white">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React JS",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture, enabling dynamic and responsive web applications.",
    
  },
  {
    title: "TypeScript",
    description:
      "A superset of JavaScript that adds static types to improve code quality, maintainability, and developer experience.",
   
  },
  {
    title: "Tailwind CSS",
    description:
      " A utility-first CSS framework that allows rapid styling with predefined classes for creating custom designs without writing custom CSS.",
   
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, used for building scalable and high-performance backend services.",
    
  },
  {
    title: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework that helps in building robust and fast APIs quickly.",
    link: "https://amazon.com",
  },
  {
    title: "MongoDB",
    description:
      " A NoSQL database that stores data in a flexible, JSON-like format, ideal for scalable and high-performance applications.",
    link: "https://microsoft.com",
  },
];
