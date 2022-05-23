const callUserApi = (user) => {
	user = "IsaGarabana";
	return fetch(`https://api.github.com/users/${user}`)
		.then((response) => response.json())
		.then((data) => {
			return {
				userImage: data.avatar_url,
				userCompany: data.company,
				userLocation: data.location,
				userBlog: data.blog,
				userTwitter: data.twitter_username,
				userOrganizations: data.organizations_url,
			};
		});
};

export default callUserApi;
