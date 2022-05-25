import "../styles/components/userData.scss";

function UserData(props) {
	const UserInfo = props.user;

	return (
		<article className="userdetail">
			<img
				className="userdetail--image"
				src={UserInfo.image}
				alt={`${UserInfo.name}'s face`}
				title={UserInfo.name}
			/>
			<p className="userdetail--name"> {UserInfo.name}</p>
			<p className="userdetail--login">{UserInfo.login}</p>
			<p className="userdetail--bio">{UserInfo.bio}</p>
			<div className="userdetail--follow">
				<small> {UserInfo.followers} followers </small>
				<span>·</span>
				<small> {UserInfo.following} following </small>
			</div>
			<p className="userdetail--company">{UserInfo.company}</p>
			<p className="userdetail--location">{UserInfo.location}</p>
			<p className="userdetail--blog">
				<a href={UserInfo.blog}>{UserInfo.blog}</a>
			</p>
			<p className="userdetail--twitter">
				<a href={`https://twitter.com/${UserInfo.twitter}`}>{`@${UserInfo.twitter}`}</a>
			</p>
		</article>
	);
}

export default UserData;
