const FilterByName = (props) => {
	const handleInput = (ev) => {
		props.handleFilterName(ev.currentTarget.value);
	};
	return (
		<section>
			<form>
				<label className="form_label">Filtrar</label>
				<input
					className="form_input_text"
					type="text"
					name="name"
					id="name"
					onChange={handleInput}
				></input>
			</form>
		</section>
	);
};

export default FilterByName;
