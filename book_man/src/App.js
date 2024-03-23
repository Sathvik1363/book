import Form from "./Form";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>
  },
 
  {
    path: "form",
    element: <Form/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
   
  );
}

export default App;
