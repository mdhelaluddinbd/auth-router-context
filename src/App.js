import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './routers/PrivateRoute';
import Service from './Components/Service';


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },

        {
          path:"/service",
          element:<PrivateRoute><Service></Service></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>,
          
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
