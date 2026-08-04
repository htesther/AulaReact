import { Link } from "react-router-dom";

export default function SaoPaulo()
{
    return (
        <div>
            <h1>Estado de São Paulo</h1>

            <div className="conteudo">
                <img src="/SP.png" />

                <p>
                O estado de São Paulo está localizado na região Sudeste do Brasil
                e tem como capital a cidade de São Paulo. É o estado mais populoso
                e um dos mais importantes do país, destacando-se pela economia forte,
                baseada na indústria, no comércio, na agricultura e nos serviços. 
                Além disso, São Paulo é conhecido por sua diversidade cultural e por 
                sua grande importância para o desenvolvimento do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}