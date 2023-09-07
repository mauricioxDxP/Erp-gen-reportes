import { useState } from 'react'
import './App.css'
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CodeEditorFunction from './components/CodeEditorFunction';
import { modalTexto } from './generacionTextos/modal';
import { apiHooks } from './generacionTextos/apiHooks';
function App() {
  const [valores, setValores] = useState({
    clase: "",
    generadoFrontend: ""
  });
  const handleChange = (x: React.ChangeEvent<HTMLTextAreaElement | undefined>) => {
    console.log(x.target.value)
    setValores({
      ...valores,
      [x.target.name]: x.target.value,
    });
    generar(x.target.value);
  }
  const generar = (entrada: string) => {
    setValores({
      ...valores,
      generadoFrontend: logicaGenerar(entrada),
    })
  };
  function logicaGenerar(entrada: string) {
    const c = entrada.split("\n");
    const nombreComponente = c.shift();
    let cols: string = "";
    let rows: string = "   {";
    c.forEach((campo) => {
      const [name, title] = campo.split(",");
      cols += `   { name: '${name}', title: '${title}' },\n`;
      rows += ` ${name}:""`;
    });

    const template = `
  import React, { useState } from 'react'
  import DeleteIcon from 'icons/DeleteIcon';
  import Edit from 'icons/Edit';
  import { DataTablaStandar } from 'components/data-table/data-table-standar';

  export const ${nombreComponente} = () => {
    const [rows, setRows] = useState([
${rows}])
    const [columns, setColumns] = useState([
${cols}]);
return (
  <DataTablaStandar
    columns={columns}
    rows={rows}
  />
)
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
        <Tabs defaultValue={1} style={{ width: '-webkit-fill-available', height: "90vh" }}>
          <TabsList>
            <Tab value={1}>Generar</Tab>
            <Tab value={2}>Componentes</Tab>
            <Tab value={3}>Three</Tab>
          </TabsList>
          <TabPanel value={1}>
            <CodeEditorFunction valor={valores.generadoFrontend} tamano='80vh' />
          </TabPanel>
          <TabPanel value={2}>
            <Tabs defaultValue={1} orientation='vertical'>
              <TabsList>
                <Tab value={1}> Modal</Tab>
                <Tab value={2}> apihook</Tab>
              </TabsList>
              <TabPanel value={1}>
                <CodeEditorFunction valor={modalTexto()} tamano='80vh' />
              </TabPanel>
              <TabPanel value={2}>
                <CodeEditorFunction valor={apiHooks()} tamano='80vh' />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel value={3}>Third page</TabPanel>
        </Tabs>

      </div>
      {/* <div style={{display:'flex'}}>
      <Button style={{margin:"auto"}} onClick={generar}>convertir</Button>
    </div> */}
    </>
  )
}
/* const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  gap: 16px;
  width: 200px;
`;

const StyledTabsList = styled(TabsList)(
  () => `
  min-width: 80px;
  background-color: #F0F7FF;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  padding: 6px;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px f6f8fa;
  `,
); */
export default App
