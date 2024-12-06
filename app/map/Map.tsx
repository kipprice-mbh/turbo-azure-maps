"use client";

import "azure-maps-control/dist/atlas.min.css";
import React from "react";
import {
  AuthenticationType,
  AzureMap,
  AzureMapsProvider,
} from "react-azure-maps";

export type _AzureMapProps = {
  subscriptionKey: string;
};

const DynamicAzureMap: React.FC<_AzureMapProps> = ({ subscriptionKey }) => {
  return (
    <div className="h-[100vh] w-[100vw] relative z-0 border border-white">
      <AzureMapsProvider>
        <AzureMap
          options={{
            authOptions: {
              authType: AuthenticationType.subscriptionKey,
              subscriptionKey,
            },
          }}
        />
      </AzureMapsProvider>
    </div>
  );
};

export default DynamicAzureMap;
