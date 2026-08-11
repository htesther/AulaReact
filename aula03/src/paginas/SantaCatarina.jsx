import { Link } from "react-router-dom";

export default function SantaCatarina() {
    return (
        <div>
            <h1>Estado de Santa Catarina</h1>

            <div className="conteudo">

                <img src="/SC.png" />

                <p>
                    Santa Catarina é um estado da região Sul do Brasil,
                    e sua capital é Florianópolis. É conhecido pelas belas
                    praias, pelas cidades de influência europeia e pela
                    produção agrícola e industrial. Também possui pontos
                    turísticos famosos, como Beto Carrero World e a
                    Serra Catarinense.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}