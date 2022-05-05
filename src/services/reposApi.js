const callReposApi = (user) => {
	user = "IsaGarabana";
	return fetch(`https://api.github.com/users/${user}/repos`)
		.then((response) => response.json())
		.then((data) => {
			return data.map((repo) => {
				return {
					repoId: repo.id,
					repoName: repo.name,
					repoDescr: repo.description,
					repoLink: repo.html_url,
				};
			});
		});
};

export default callReposApi;
