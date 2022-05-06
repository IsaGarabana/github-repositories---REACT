const RepoItem = (props) => {
	return (
		<>
			<a href={props.repo.repoLink}>
				<h4> {props.repo.repoName} </h4>
			</a>

			<p> {props.repo.repoDescr}</p>
		</>
	);
};
export default RepoItem;
