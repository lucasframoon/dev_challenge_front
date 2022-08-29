import { GoGitBranch, GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom';

import "./RepoCard.css";

const RepoCard = ({ repository }) => {

    return (
        <div className="card">
            <div className="header">
                <h4>{repository.name}</h4>
            </div>
            <div className="container">
                <p>Linguagem: {repository.language}</p>
                <p>Descrição: {repository.description}</p>
                <p>Ultima atualização: {repository.updated_at.substr(0, 10).split('-').reverse().join('/')}</p>
            </div>
            <div className="footer">
                <a href={repository.html_url} target="_blank">
                    Github
                    <GoMarkGithub />
                </a>
                <Link to={`/branch?user=${repository.owner.login}&repo=${repository.name}`}>
                    Branchs
                    <GoGitBranch />
                </Link>
            </div>
        </div>
    );
};

export default RepoCard;

