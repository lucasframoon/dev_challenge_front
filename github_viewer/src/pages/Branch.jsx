import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import BranchCard from "../components/BranchCard/BranchCard";
import './Grid.css';

const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL

const Branch = () => {

    const [branchs, setBranchs] = useState([])
    const [searchParams] = useSearchParams()

    const getBranchs = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setBranchs(data)

    }

    useEffect(() => {
        const user = searchParams.get('user');
        const repo = searchParams.get('repo');

        if (user) {
            const branchs = `${githubApiUrl}repos/${user}/${repo}/branches`;
            getBranchs(branchs);
        }

    }, [])

    return (<div className="container">
        <h1>Branchs</h1>
        <hr />
        <h2 className="title">
            <div className="branch-container">
                {branchs.length === 0 && <p>Nenhum resultado</p>}
                {branchs.length > 0 &&
                    branchs.map((branch) =>
                        <BranchCard key={branch.name} branch={[branch, searchParams.get('user'), searchParams.get('repo')]} />
                    )}

            </div>
        </h2>
    </div>)


}

export default Branch;
