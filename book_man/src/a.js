// import logo from './logo.svg';
import Form from "./Form";
import Login from "./Login";
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
    path: "login",
    element: <Login/>
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
