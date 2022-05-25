import RepoItem from "./RepoItem";

function RepoList(props) {
	const repoElements = props.repos.map((repo) => {
		return (
			<li key={repo.repoId}>
				<RepoItem repo={repo} />
			</li>
		);
	});

	return (
		<section>
			<ul>{repoElements}</ul>
		</section>
	);
}

export default RepoList;
