import { Outlet } from "react-router";
import "./RootLayout.css";

function RootLayout() {
  return (
    <>
      <header>
        <h1 className="title-page">Space Launch Central</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
