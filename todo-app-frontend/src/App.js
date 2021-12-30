import { useEffect } from "react";
import axios from 'axios'
import './App.scss';
import Table from './components/Table'

function App() {
  // useEffect(async() => {
  //     const boards= await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/api/boards`)
  // }, [])
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
