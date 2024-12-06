import { AzureMap } from "./map/dynamicMap";

export default function Home() {
  return (
    <AzureMap subscriptionKey={process.env.AZURE_SUBSCRIPTION_KEY ?? ""} />
  );
}
