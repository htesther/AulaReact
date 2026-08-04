import { Link } from "react-router-dom";

export default function RioJaneiro()
{
    return (
        <div>
            <h1>Estado do Rio de Janiero</h1>

            <div className="conteudo">
                <img src="/RJ.png" />

                <p>
                O estado do Rio de Janeiro está localizado na região
                Sudeste do Brasil e tem como capital a cidade do Rio de Janeiro. 
                É conhecido por suas belas praias, paisagens naturais e pontos 
                turísticos famosos, como o Cristo Redentor e o Pão de Açúcar. 
                Além do turismo, o estado também se destaca pela economia, com 
                atividades ligadas ao petróleo, à indústria, ao comércio e aos serviços.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}