import './App.css';
import General from "./components/General/General";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Video from "./components/Video/Video";
import Audio from "./components/Audio/Audio";
import History from "./components/History/History";

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
    {
        path: '/history',
        element: <History/>
    }
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
