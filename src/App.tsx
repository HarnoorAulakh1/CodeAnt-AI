import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./applayout";
import Repositories from "./components/repositories";
import { useState } from "react";
import { menuContext } from "./contexts/menu";

function App() {

  const [state,set]=useState(false);
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
    <menuContext.Provider value={{state,set}}>
      <RouterProvider router={router}></RouterProvider>
    </menuContext.Provider>
    </>
  );
}

export default App;
