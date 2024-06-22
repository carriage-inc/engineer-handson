import { auth } from "@site/src/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useAuthGuard = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "login";
      }
    });
    return () => unsubscribe();
  }, []);
};
