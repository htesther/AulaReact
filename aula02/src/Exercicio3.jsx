export default function Exercicio2( {nota1, nota2} )
{
    let media = (Number(nota1) + Number(nota2)) / 2;
    let situacao = media >= 6 ? "aprovado" : "reprovado";

    return (
        <div>
            A média do aluno é {media} e ele está {situacao}.
        </div>
    )
}