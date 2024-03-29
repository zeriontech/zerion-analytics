import { client } from "defi-sdk";

const endpoint = "wss://api-v4.zerion.io";

declare global {
  interface Window {
    registerWeb3User?(address: string): void;
  }
}

function initZerionAnalytics() {
  const api_key = document.currentScript?.getAttribute("data-key") || "";

  client.configure({ url: endpoint, apiToken: api_key });

  window.registerWeb3User = (address: string) => {
    const { unsubscribe } = client.addressPortfolioDecomposition(
      {
        address,
        currency: "usd",
        nft_price_type: "not_included",
      },
      {
        onData: () => {
          // eslint-disable-next-line no-console
          console.info(`address ${address} is registered`);
          unsubscribe();
        },
      },
    );
  };
}

initZerionAnalytics();
