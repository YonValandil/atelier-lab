import React, {Component} from 'react';

//HOC avec une fonction pure
// const withClass = (WrappedComponent, className) => {
// 	return (props) => (
// 		<div className={className}>
// 			<WrappedComponent {...props}/>
// 		</div>
// 	);
// };

//HOC avec une classe
const withClass = (WrappedComponent, className) => {
	return class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent {...this.props}/>
				</div>
			);
		}
	}
}

export default withClass;
