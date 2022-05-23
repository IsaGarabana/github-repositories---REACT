const callUserApi = (user) => {
	user = "IsaGarabana";
	return fetch(`https://api.github.com/users/${user}`)
		.then((response) => response.json())
		.then((data) => {
			return {
				image: data.avatar_url,
				login: data.login,
				name: data.name,
				bio: data.bio,
				followers: data.followers,
				following: data.following,
				company: data.company,
				location: data.location,
				blog: data.blog,
				twitter: data.twitter_username,
			};
		});
};

export default callUserApi;
