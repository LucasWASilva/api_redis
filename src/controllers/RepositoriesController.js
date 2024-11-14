const githubAPI = require('../services/githubAPI');

async function listAllRepositoriesByOrg(req, res) {

    try {
        const { organization } = req.params;

        const { data } = await githubAPI.get(`/orgs/${organization}/repos`);

        const { login, id, avatar_url } = data[0].owner;
        
        const organizationData = { login, id, avatar_url };

        const formatteRepositoriesData = [];
        
        for (const repo of data) {
            formatteRepositoriesData.push(
                {
                    "id": repo.id,
                    "name": repo.name,
                    "private": repo.private,
                    "url": repo.url,
                    "created_at": repo.created_at,
                    "language": repo.language
                }
            );    
        }

        return res.status(200).json({ 
            "org": organizationData,
            "repos": formatteRepositoriesData
        });

    } catch (error) {
        return res.status(400).json({
            message: "Failed to list all repositories!"
        });
    }

}

module.exports = { listAllRepositoriesByOrg }