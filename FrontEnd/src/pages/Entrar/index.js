import React from 'react'
import './styles.css'
import { FaRegUserCircle} from "react-icons/fa"

export default function Entrar(){
    return(
        <div className="container">
            <div className="container2">
                <FaRegUserCircle size={100} className="logo"/>
                <section className="form">
                    <form>
                        <input placeholder="Usuário"/>
                        <input type="password" placeholder="Senha" />
                        <button className="botao" type="submit" >Entrar</button>
                    </form>
                </section>
            </div>
        </div>

    )
}