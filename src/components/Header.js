// import libs
import React from 'react'
import { Text, View } from 'react-native'

// make component
const Header = (props) => {
	const { textStyle, viewStyle } = styles

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: '#eee',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: 60,
		padding: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20
	}
}

// make the component availables
export default Header
