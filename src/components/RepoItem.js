import "../styles/components/repoItem.scss";

const RepoItem = (props) => {
	return (
		<div className="repoItem">
			<a className="repoItem--title" href={props.repo.repoLink}>
				<h4> {props.repo.repoName} </h4>
			</a>

			<p className="repoItem--detail"> {props.repo.repoDescr}</p>
		</div>
	);
};
export default RepoItem;
