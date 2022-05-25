import RepoItem from "./RepoItem";
import "../styles/components/repoList.scss";

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
			<ul className="eachRepo">{repoElements}</ul>
		</section>
	);
}

export default RepoList;
