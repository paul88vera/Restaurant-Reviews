import { Outlet, useNavigation } from "react-router";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <Nav />
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
