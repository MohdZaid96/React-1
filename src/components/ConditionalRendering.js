const ConditionalRendering = () => {
	let likesIcecream = false
	return (
		<div>
			<h1>Conditional Rendering</h1>
			{likesIcecream && <h3>Student likes ice cream</h3>}
		</div>
	)
}

export default ConditionalRendering