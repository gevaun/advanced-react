import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Reusability from "./pages/Reusability";
import Home from "./pages/Home"; // Import Home component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="reusability" element={<Reusability />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

