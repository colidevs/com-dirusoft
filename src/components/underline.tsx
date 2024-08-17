"use client";

import React from "react";
import Link from "next/link";

export function AnimatedLink({to, children}: {to: string; children: React.ReactNode}) {
  return (
    <Link className="relative inline-block text-blue-500 hover:text-blue-700" href={to}>
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transform bg-blue-500 transition-transform duration-300 ease-out hover:scale-x-100" />
      {children}
    </Link>
  );
}
