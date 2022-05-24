import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import callReposApi from "./services/reposApi";
import RepoList from "./components/RepoList";
import FilterByName from "./components/FilterByName";

function App() {
	const [repos, setRepos] = useState([]);
	const [filterName, setFilterName] = useState("");

	useEffect(() => {
		callReposApi().then((reposData) => {
			setRepos(reposData);
		});
	}, []);

	const handleFilterName = (data) => {
		setFilterName(data);
	};

	const filteredRepos = repos.filter((repo) => {
		return repo.repoName.toLowerCase().includes(filterName.toLowerCase());
	});

	return (
		<main>
			<section>
				<img src="" alt="ProfilePicture"></img>
			</section>
			<FilterByName handleFilterName={handleFilterName} filterName={filterName} />
			<RepoList repos={filteredRepos} />
		</main>
	);
}

export default App;
