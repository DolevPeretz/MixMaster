import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCoockteLoader } from "./pages/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <SinglePageError />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCoockteLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        action: newsletterAction,
        errorElement: <SinglePageError />,
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
