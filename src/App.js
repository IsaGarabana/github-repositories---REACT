import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import callReposApi from "./services/reposApi";
import RepoList from "./components/RepoList";
import FilterByName from "./components/FilterByName";
import callUserApi from "./services/userApi";
import UserData from "./components/UserData";

function App() {
	////Repos API and filter
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

	////User API

	const [user, setUser] = useState([]);

	useEffect(() => {
		callUserApi().then((userData) => {
			setUser(userData);
		});
	}, []);

	return (
		<>
			<header> </header>
			<main className="main">
				<section>
					<UserData user={user} />
				</section>
				<FilterByName handleFilterName={handleFilterName} />
				<RepoList repos={filteredRepos} />
			</main>
		</>
	);
}

export default App;
