import { Link } from "react-router-dom"

export default function Parana() 
{

    return (
        <div>
            <h1>Estado do Paraná</h1>

            <div className="conteudo">

            <img src="/PR.png" />

            <p>
            O **Paraná** é um estado da região Sul do Brasil e sua capital é **Curitiba**. 
            É conhecido pelas **Cataratas do Iguaçu**, por sua agricultura e pelas influências 
            culturais de diversos povos, como italianos, alemães, poloneses e ucranianos. 
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>

            </div>
        </div>
    )
}