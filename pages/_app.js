// pages/_app.js
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { CheckCircleFilled } from "@ant-design/icons";
import Layout from "./layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CheckCircleFilled style={{ fontSize: "24px", color: "green" }} />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
