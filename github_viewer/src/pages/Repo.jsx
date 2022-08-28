import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import RepoCard from "../components/RepoCard/RepoCard";
import './Grid.css';

const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL

const Repo = () => {

    const [userRepositorys, setUserRepositorys] = useState([])

    const getUserRepositorys = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUserRepositorys(data)

    }

    useEffect(() => {
        const [searchParams] = useSearchParams()
        const user = searchParams.get('user')
        const userRepositorys = `${githubApiUrl}users/${user}/repos`
               
        getUserRepositorys(userRepositorys)
    }, [])
    
    return (<div className="container">
                <h2 className="title">
                    <div className="repository-container">
                        {userRepositorys.length === 0 && <p>Carregando...</p>}
                        {userRepositorys.length > 0 && 
                            userRepositorys.map((repository) => 
                                <RepoCard key={repository.id} repository={repository}/>
                        )}

                    </div>
                </h2>
            </div>)


}

export default Repo;
