import React, {useState} from "react";
import { TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core"

function FormularioCadastro({aoEnviar, aoValidarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, msg:""}})

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        }}>
            <TextField id="txtNome" required label="Nome" variant="outlined" margin="normal" fullWidth
            value={nome}
            onChange={(event) =>{
                setNome(event.target.value);
            }} />

            
            <TextField id="txtSobrenome" required label="Sobrenome" variant="outlined" margin="normal" fullWidth
            value={sobrenome} 
            onChange={(event) => {
                setSobrenome(event.target.value);
            }}/>


            <TextField id="txtCPF"  label="CPF" variant="outlined" margin="normal" fullWidth
            value={cpf}
            onChange={(event) =>{
                setCPF(event.target.value);
            }}
            onBlur={(event) =>{
                const ehValido = aoValidarCPF(event.target.value);
                console.log(ehValido);
                setErros({cpf:{ehValido}});
            }}
            
            error={!erros.cpf.valido}
            helperText={erros.cpf.msg}/>

            <FormControlLabel label="Promoções"
                control={<Checkbox checked={promocoes} 
                name="promocoes" color="primary"
                onChange={(event) =>{
                    setPromocoes(event.target.checked);
                }} />}
            />

            <FormControlLabel label="Novidades"
                control={<Checkbox checked={novidades} 
                name="novidades" color="primary"
                onChange={(event) =>{
                    setNovidades(event.target.checked);
                }} />}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;