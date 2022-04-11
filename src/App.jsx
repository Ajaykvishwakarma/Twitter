import './App.css';
import { Feed } from './Components/Feed/Feed';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Widgets } from './Components//Widgets/Widgets';
import { AllRoutes } from "./Components/Routes"

function App() {
  return (
    <div className="app">
      <AllRoutes />
     

      {/* Sidebar/Navbar */}
          {/* <Sidebar /> */}
      {/* Home Feed */}
          {/* <Feed/> */}
      {/* Home Widgets */}
          {/* <Widgets/> */}
    </div>
  );
}

export default App;
