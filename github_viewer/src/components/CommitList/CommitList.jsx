import "./CommitList.css";

const CommitList = ({ commit }) => {

    return (
        <div className="card">
            <div className="header">
                <h4>{commit.name}</h4>
            </div>
            <div className="container">
                <p>{commit.message}</p>
            </div>
            <div className="footer">
                <p>{commit.date}</p>
            </div>
        </div>
    );
};

export default CommitList;

