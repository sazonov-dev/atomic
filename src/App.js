import './App.css';
import General from "./components/General/General";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Video from "./components/Video/Video";
import Audio from "./components/Audio/Audio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <General/>,
    },
    {
        path: "/video",
        element: <Video/>
    },
    {
        path: "/audio",
        element: <Audio/>
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
