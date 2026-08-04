import { Link } from "react-router-dom";

export default function MinasGerais()
{
    return (
        <div>
            <h1>Estado de Minas Gerais</h1>

            <div className="conteudo">
                <img src="/MG.png" />

                <p>
                O estado de Minas Gerais está localizado na região 
                Sudeste do Brasil e tem como capital a cidade de 
                Belo Horizonte. É conhecido por sua rica história, 
                culinária típica e importantes cidades históricas. 
                Sua economia se destaca pela mineração, agricultura, 
                pecuária, indústria e produção de café.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}