import { useState, useEffect } from 'react'
import RepoCard from "../components/RepoCard/RepoCard";
import './Grid.css';

const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL

const Repo = () => {

    const [userBranchs, setUserBranchs] = useState([])

    const getUserBranchs = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUserBranchs(data)

    }

    useEffect(() => {
        const owner = 'lucasframoon';//owner.login
        const repo = 'app_super_gestao';//repo.name
        // const userBranchs = `${githubApiUrl}users/${user}/repos`
        const userBranchs = `${githubApiUrl}/repos/${owner}/${repo}/branches`
        
        
        setUserBranchs(userBranchs)//teste

        getUserBranchs(userBranchs)
    }, [])
    


    return (<div className="container">
                <h2 className="title">
                    <div className="branch-container">
                        {userBranchs.length === 0 && <p>Carregando...</p>}
                        {userBranchs.length > 0 && 
                            userBranchs.map((branch) => 
                                <RepoCard key={branch.id} branch={branch}/>
                        )}

                    </div>
                </h2>
            </div>)


}

export default Repo;
