import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="flex-center min-h-screen w-full">{children}</main>;
}
