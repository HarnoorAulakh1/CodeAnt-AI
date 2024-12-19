import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./applayout";
import Repositories from "./components/repositories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "repositories",
          element: <Repositories />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
