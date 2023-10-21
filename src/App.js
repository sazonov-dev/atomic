import './App.css';
import General from "./components/General/General";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <General/>,
    },
]);

function App() {

  return (
      <div className="app">
          <div className="app-line"></div>
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
