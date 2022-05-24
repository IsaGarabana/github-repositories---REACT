function UserData(props) {
	const UserInfo = props.user;

	return (
		<article className="article">
			<img src={UserInfo.image} />
			<p> {UserInfo.name}</p>
			<p>{UserInfo.login}</p>
			<p>{UserInfo.bio}</p>
			<small> {UserInfo.followers} followers </small>
			<small> {UserInfo.following} following </small>
			<p>{UserInfo.company}</p>
			<p>{UserInfo.location}</p>
			<a href={UserInfo.blog}> {UserInfo.blog}</a>
			<p>
				<a href={`https://twitter.com/${UserInfo.twitter}`}>{`@${UserInfo.twitter}`}</a>
			</p>
		</article>
	);
}

export default UserData;
