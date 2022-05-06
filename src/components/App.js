import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import callReposApi from "../services/reposApi";
import RepoList from "./RepoList";

function App() {
	//API
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		callReposApi().then((reposData) => {
			setRepos(reposData);
		});
	}, []);

	return (
		<main>
			<section>
				<img src="./images/Isa.jpeg" alt="ProfilePicture"></img>
			</section>
			<RepoList repos={repos} />
		</main>
	);
}

export default App;
