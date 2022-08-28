import { Link } from 'react-router-dom';
import { GoGitCommit } from "react-icons/go";
import "./BranchCard.css";

const BranchCard = ({ branch }) => {
    return (
        <div className="card">
            <div className="header">
                <h4>{branch[0].name}</h4>
            </div>
            <div className="container">
                <p>{branch[0].commit.sha}</p>
            </div>
            <div className="footer">
                <Link to={`/commit?user=${branch[1]}&repo=${branch[2]}&sha=${branch[0].commit.sha}`}>
                    <GoGitCommit />
                </Link>
            </div>
        </div>
    );
};

export default BranchCard;

