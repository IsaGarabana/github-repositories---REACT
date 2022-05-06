import RepoItem from "./RepoItem";

function RepoList(props) {
	const repoElements = props.repos.map((repo) => {
		console.log(repo);
		return (
			<li key={repo.repoId}>
				<RepoItem repo={repo} />
			</li>
		);
	});

	return (
		<section>
			<ul className="repoList">{repoElements}</ul>
		</section>
	);
}

export default RepoList;
