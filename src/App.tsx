import { useState } from 'react'
import './App.css'
import { Button } from '@mui/base'
import CodeEditor from '@uiw/react-textarea-code-editor';
function App() {
  const [valores,setValores]=useState({
    clase:"",
    generadoFrontend:""
  });
  const handleChange = (x:React.ChangeEvent<HTMLTextAreaElement|undefined>)=>
  {
    setValores({
      ...valores,
      [x.target.name]:x.target.value,
    });
   generar(x.target.value);
  }
  const generar = (entrada:string)=>{
    setValores({
      ...valores,
      generadoFrontend:logicaGenerar(entrada),
    })
  };
function logicaGenerar(entrada:string){
  var c = entrada.split("\n");
  let nombreComponente=c.shift();
  let cols:string="";
  let rows:string="   {";
  c.forEach((campo)=>{
    let [name,title]=campo.split(",");
    cols += `   { name: '${name}', title: '${title}' },\n`;
    rows +=` ${name}:""`;
  });

  var template = `
  import React, { useState } from 'react'
  import DeleteIcon from 'icons/DeleteIcon';
  import Edit from 'icons/Edit';
  import { DataTablaStandar } from 'components/data-table/data-table-standar';

  export const ${nombreComponente} = () => {
    const [rows, setRows] = useState([
${rows}])
    const [columns, setColumns] = useState([
${cols}]);
  }
    `
  return template;
}
  return (
    <>
      <div style={{ display: 'flex', width: "100vw", gap: "10px" }}>
        <CodeEditor style={{ width: '-webkit-fill-available', height: "90vh" }}
          value={valores.clase}
          onChange={handleChange}
          name='clase'
          language="csharp"
          data-color-mode='dark'
        ></CodeEditor>

        <CodeEditor style={{ width: '-webkit-fill-available', height: "90vh" }}
          value={valores.generadoFrontend}
          name='generado'
          language="jsx"
          data-color-mode='dark'
        ></CodeEditor>
    </div>
    {/* <div style={{display:'flex'}}>
      <Button style={{margin:"auto"}} onClick={generar}>convertir</Button>
    </div> */}
    </>
  )
}

export default App
