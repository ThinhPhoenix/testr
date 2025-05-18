import React from "react";
import NavItem from "./navitem/navitem";

export default function NavBar({ items = [] }) {
  return (
    <nav className="z-50 rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl px-3 py-0.5 flex justify-between">
      {items.map((item, index) => (
        <NavItem key={index} href={item.href}>
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
}
