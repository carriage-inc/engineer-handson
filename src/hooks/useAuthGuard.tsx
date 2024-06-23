// src/hooks/useAuthGuard.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const useAuthGuard = () => {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const guestPages = siteConfig.customFields.guestPages as string[];
  const baseUrl = siteConfig.baseUrl;

  useEffect(() => {
    const isGuestPage = (path: string): boolean => {
      return guestPages.some((pattern) => {
        const regexPattern = pattern.replace(/\*$/, ".*");
        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(path);
      });
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const pathname = location.pathname.replace(baseUrl, "/");
      if (!user && !isGuestPage(pathname)) {
        localStorage.setItem("redirect", location.pathname);
        window.location.href = "/engineer-handson/login";
      }
    });
    return () => unsubscribe();
  }, [location.pathname, guestPages]);
};
