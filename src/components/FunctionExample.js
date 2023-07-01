const FunctionExample = () => {
	const func1 = () => {
		console.log('Hi')
	}
	return (
		<div>
			<button onClick={() => func1()}>Click</button>
		</div>
	)
}

export default FunctionExample