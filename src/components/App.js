import React, { useState, useEffect } from "react";
import "../styles/index.css";
import callReposApi from "../services/reposApi";

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
			<article>
				<img src="./images/Isa.jpeg" alt="ProfilePicture"></img>
			</article>
			<div>
				<ul className="repoList">
					<li classname="repoItem">
						<p> REPO 1 NAME </p>
						<p> REPO 1 DESCRIPTION</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default App;
