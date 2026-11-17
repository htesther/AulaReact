import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <div>
            <h1>aula 06 - CRUD com React e Supabase</h1>

            <div className="conteudo">

               <h3>tabela de alunos</h3>

               <ul>
               <li> <Link to="/consulta">Consulta  tabela de alunos</Link></li>
               <li><Link to="/cadastro">Cadastro de Novos Alunos</Link></li>
               </ul>
            </div>   
        </div>
    );
}