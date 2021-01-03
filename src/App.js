import './App.css';
import FormularioCadastro from "./componenets/FormularioCadastro/FormularioCadastro";
import ValidaCPF from "./ValidaCPF"

import {Typography, Container } from "@material-ui/core"

function App() {
  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h3" component="h1">Cadastrar Usuário</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} aoValidarCPF={VerificaCPF}/>
    </Container >
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function VerificaCPF(strCPF){
    if (!ValidaCPF(strCPF)){
      return {valido:false, msg:"CPF inválido."};
    } else{
      return {valido:true, msg:""};
    }
}
export default App;
