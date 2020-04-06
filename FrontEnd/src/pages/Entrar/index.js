import React, {useState} from 'react'
import './styles.css'
import '../../global.css'
import {FaRegUserCircle} from "react-icons/fa"

export default function Entrar(){  
    const [values, setValues] = useState({"senha":"", "usuario":""});
    const [errors, setErrors] = useState({"senha":"", "usuario":""});
   
    const handleSubmit = (event) => {
        console.log("handleSubmit")
        event.preventDefault();
        setErrors(validate(values)); 
        return true;                   
    };

    const handleChange = (event) => {
        console.log({ ...values, [event.target.name]: event.target.value })
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    function validate(values) { 

        let errors = {};
        errors.senha = "";
        errors.usuario = "";
      
        if(!values.usuario || values.usuario == ""){
          errors.usuario = "Usuário é necessário"
        }
        if(!values.senha || values.senha == ""){
          errors.senha = "Senha é necessário"
        }
        return errors;
    };

    return(
        <div className="container">
            <div className="container2">
                <FaRegUserCircle size={100} className="logo"/>
                <section className="form">
                    <form onSubmit={handleSubmit}>
                        <input 
                            className="input" 
                            id="usuario" 
                            name="usuario" 
                            placeholder="Usuário" 
                            autoFocus 
                            value={values.usuario || ''}
                            onChange={handleChange}
                            
                            >
                        </input>                         
                        <p className="mensagem-erro">{errors.usuario}</p>
                        <input 
                            name="senha"
                            type="password" 
                            placeholder="Senha"  
                            value={values.senha || ''}
                            onChange={handleChange}
                            >
                        </input>    
                        <p className="mensagem-erro">{errors.senha}</p>                   
                  
                       <button 
                            className="botao" 
                            type="submit">
                            Entrar
                        </button>                
                            
                    </form>


                    

                </section>
            </div>
        </div>

    )
}