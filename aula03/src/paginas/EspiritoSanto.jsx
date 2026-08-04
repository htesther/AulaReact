import { Link } from "react-router-dom";

export default function EspiritoSanto()
{
    return (
        <div>
            <h1>Estado do Espirito Santo</h1>

            <div className="conteudo">
                <img src="/ES.png" />

                <p>
                O estado do Espírito Santo está localizado na região 
                Sudeste do Brasil e tem como capital a cidade de Vitória. 
                É conhecido por suas belas praias, montanhas e pela produção 
                de café. Sua economia se destaca pela atividade portuária, 
                indústria, agricultura e extração de minério.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}