import "../styles/components/filter.scss";

const FilterByName = (props) => {
	const handleInput = (ev) => {
		props.handleFilterName(ev.currentTarget.value);
		ev.preventDefault();
	};
	return (
		<section className="search">
			<form className="search--form">
				<input
					className="search--form__input"
					type="text"
					name="name"
					id="name"
					onChange={handleInput}
					value={props.filterName}
					placeholder="Find a repository..."
				></input>
			</form>
			<div className="button">
				<button className="button--type">Type</button>
				<button className="button--language">Language</button>
				<button className="button--sort">Sort</button>
				<button className="button--new">New</button>
			</div>
		</section>
	);
};

export default FilterByName;
