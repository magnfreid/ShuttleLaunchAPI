import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Info from "./components/Info.jsx";
import { DataContext } from "./data/context.js";
import { fetchLaunches } from "./main.js";
import CircularProgress from "@mui/material/CircularProgress";
import RootLayout from "./RootLayout.jsx";

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const launchModels = await fetchLaunches(true);
      setData(launchModels);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <CircularProgress />
        <p>Loading...</p>
      </>
    );
  }
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/info/:id",
        element: <Info />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
