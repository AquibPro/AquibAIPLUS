"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2cef74bb-c1b3-4949-bf3e-224020ed0727");
  }, []);

  return null;
};
