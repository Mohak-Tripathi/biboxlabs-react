import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import SelectParts from './components/SelectParts';
import AssembleParts from './components/AssembleParts';
import FinalParts from './components/FinalParts';
import { PartsProvider } from './contexts/PartsContext';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/select-parts",
    element: <SelectParts />
  },
  {
    path: "/assemble-parts",
    element: <AssembleParts />
  },
  {
    path: "final-product/",
    element: <FinalParts />
  },
]);


function App() {
  return (
    <>
   
   <PartsProvider>
        <RouterProvider router={appRouter} />
      </PartsProvider>
   
    </>
  );
}

export default App;
