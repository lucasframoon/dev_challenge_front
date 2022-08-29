import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import RepoCard from "../components/RepoCard/RepoCard";
import './Grid.css';

const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL

const Repo = () => {

    const [userRepositorys, setUserRepositorys] = useState([])
    const [searchParams] = useSearchParams()

    const getUserRepositorys = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        if (data.message == "Not Found") {
            setUserRepositorys([])
        } else {
            setUserRepositorys(data)
        }

    }

    useEffect(() => {
        const user = searchParams.get('user') ? searchParams.get('user') : 'lucasframoon';
        if (user) {
            const userRepositorys = `${githubApiUrl}users/${user}/repos`;
            getUserRepositorys(userRepositorys);
        }
    }, [searchParams])

    return (
        <div className="container">
            <h1>Repositórios</h1>
            <hr />
            <h2 className="title">
                <div className="repository-container">
                    {userRepositorys.length === 0 && <p>Nenhum resultado</p>}
                    {userRepositorys.length > 0 &&
                        userRepositorys.map((repository) =>
                            <RepoCard key={repository.id} repository={repository} />
                        )}

                </div>
            </h2>
        </div>
    );
};

export default Repo;
