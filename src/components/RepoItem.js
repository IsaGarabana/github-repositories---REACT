import "../styles/components/repoItem.scss";

const RepoItem = (props) => {
	return (
		<>
			<a className="repoTitle" href={props.repo.repoLink}>
				<h4> {props.repo.repoName} </h4>
			</a>

			<p className="repoDetail"> {props.repo.repoDescr}</p>
		</>
	);
};
export default RepoItem;
