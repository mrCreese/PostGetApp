import { useEffect, useState } from 'react';
import './App.css';
import Row from './components/Row';
import Form from './components/Form';

function App() {
  const [dataBase, setDataBase]= useState([])
  const [tableHeader, setTableHeader] = useState([])
 


const date = async () => {
  try {
      const response = await fetch('http://localhost:4050/');
      if(response.ok) {
        const data = await response.json()
        const firstObject = data[0] || {}
        const cols = []
        for (let key in firstObject) {
          cols.push(key)
        }
        setTableHeader(cols)
        setDataBase(data)
      }
  } catch (error) {
    console.log(error)
  }
} 



useEffect (()=>{
 date()
},[dataBase])


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {tableHeader.map((head, index) => {
             return <th key={index}>{head}</th>
            })}
          </tr>
        </thead>
        <tbody>
            {dataBase.map((row,index)=> {
              return <Row key={index} row={row}/>
            })}
        </tbody>
      </table>
      <Form />
    </div>
  );
}

export default App;
