import "./CommitList.css";

const CommitList = ({ commit }) => {
console.log(commit)
console.log(commit.name)
    return (
        <div className="card">
            <div className="header">
                <h4>{commit.sha}</h4>
            </div>
            <div className="container">
                <p>Autor: {commit.commit.author.name}</p>
                <p>Mensagem: {commit.commit.message}</p>
                <p>Data: {commit.commit.author.date.substr(0, 10).split('-').reverse().join('/')}</p>
            </div>
        </div>
    );
};

export default CommitList;

