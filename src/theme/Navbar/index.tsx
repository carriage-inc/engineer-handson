import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";
import { useAuthGuard } from "@site/src/hooks/useAuthGuard";

export default function Navbar(): JSX.Element {
  useAuthGuard();
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
