import Link from "next/link";
import React from "react";

export default function NavItem({ children, href }) {
  return (
    <Link
      className="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-violet-600"
      href={href}
    >
      <p className="text-sm">{children}</p>
      <span className="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
      <span className="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
        <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full"></span>
      </span>
    </Link>
  );
}
