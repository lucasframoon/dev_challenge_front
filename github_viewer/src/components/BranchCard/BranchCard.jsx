import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import { GoGitBranch, GoMarkGithub } from "react-icons/go";
import "./RepoCard.css";

const RepoCard = ({ repository }) => {

    return (
        <div className="card">
            <div className="header">
                <h4>{repository.name}</h4>
            </div>
            <div className="container">
                <p>{repository.language ? repository.language : '-'}</p>
                <p>{repository.description ? repository.description : '-'}</p>
                <p>{repository.updated_at.substr(0, 10).split('-').reverse().join('/')}</p>
            </div>
            <div className="footer">
                <a href={repository.html_url} target="_blank">
                    <GoMarkGithub />
                </a>
                <a href={repository.branches_url}>
                    {/* LCSTODO fazer funcao: esse git branch é o link para a api buscar a branchs, tem q disparar funcao */}
                    <GoGitBranch />
                </a>
                {/* LCSTODO vai ser util commits_url / git_commits_url */}
            </div>
        </div>
    );
};

export default RepoCard;

