export default function Exercicio4({ tipo, base, altura }) {

    let area = 0;

    if (tipo == "retangulo") {
        area = Number(base) * Number(altura);
    }

    else if (tipo == "triangulo") {
        area = (Number(base) * Number(altura)) / 2;
    }

    return (
        <div>
            Polígono {tipo} de base {base} e altura {altura} possui a Área de {area}
        </div>
    )
}