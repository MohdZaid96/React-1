// import GrandChild from './GrandChild'

const Child = (props) => {
	return (
		<div className="Child">
			<h2 id='main-heading'>{props.firstName} {props.lastName}</h2>
			{/* <GrandChild /> */}
		</div>
	)
}

export default Child