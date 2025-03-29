"use client"; // Required since this is client-side logic

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.1,
});

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500); // Add a delay for smoothness

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]); // Run effect on route change

  return null;
}
