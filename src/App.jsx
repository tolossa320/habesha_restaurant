import styles from "./App.module.css";
import {useContext, useEffect} from 'react'
import { Check, ShoppingBag, X } from "lucide-react";
import AppRout from "./AppRout";
import { DataContext } from "./Components/dataProvider/DataProvider";
import { Type } from "./utility/ActionTypes";
import { auth } from "./utility/Firebase.js";
function App() {
  const [{user }, dispatch] = useContext(DataContext);
  
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        
         dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else{
         dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <AppRout />
    </div>
  );
}

export default App;
