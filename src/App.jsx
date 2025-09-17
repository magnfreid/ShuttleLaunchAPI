import "./App.css";
import { useContext } from "react";
import LaunchListItem from "./components/LaunchListItem.jsx";
import { DataContext } from "./data/context.js";

function App() {
  const { data } = useContext(DataContext);

  return (
    <ul>
      {data.map((launch) => (
        <LaunchListItem key={launch.id} launch={launch} />
      ))}
    </ul>
  );
}

export default App;
