import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import CommitList from "../components/CommitList/CommitList";
import './Grid.css';

const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL

const Commit = () => {

    const [commits, setCommits] = useState([])
    const [searchParams] = useSearchParams()

    const getCommits = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setCommits(data)

    }

    useEffect(() => {

        const user = searchParams.get('user');
        const repo = searchParams.get('repo');
        const sha = searchParams.get('sha');

        if (user) {
            const commits = `${githubApiUrl}repos/${user}/${repo}/commits/${sha}`;
            getCommits(commits);
        }
    }, [])

    return (<div className="container">
        <h1>Commits</h1>
        <hr />
        <h2 className="title">
            <div className="commit-list">
                {commits.length === 0 && <li>Nenhum resultado</li>}
                {commits.length > 0 &&
                    commits.map((commit) =>
                        <CommitList key={commit.sha} commit={commit} />
                    )}
            </div>
        </h2>
    </div>)


}

export default Commit;
