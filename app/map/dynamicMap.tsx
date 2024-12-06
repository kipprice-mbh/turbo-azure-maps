"use client";

import dynamic from "next/dynamic";

export const AzureMap = dynamic(() => import("./Map"), {
  loading: () => <p className="p">Loading ...</p>,
  ssr: false,
});
