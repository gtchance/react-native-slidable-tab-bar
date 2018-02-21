import React from 'react';
import {
	Dimensions,
	StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Animated, } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default class SlidableTabBar extends React.Component {

	state = {
    selectedTopic: 0,
  };

  selectTopic(index){
		this.setState({selectedTopic: index});
	}

  renderCenterView(thisView, index){
		if(this.state.selectedTopic === index){
			return thisView;
		}
	}

  renderTabBarOption(title, color, index) {
		return(
			<TouchableHighlight
				onPress={() => this.selectTopic(index)}
				underlayColor='white'>
				<View style={[styles.tabBarOption, {backgroundColor:(this.state.selectedTopic === index)? '#D3D1D0': '#EEEDE7', borderColor: color}]}>
					<Text style={{letterSpacing: 3, color: '#5D5035', fontWeight: '300'}}>{title}</Text>
				</View>
			</TouchableHighlight>
		);
	}

  render() {

		return(
			<View style={{flex:1}}>
				
				{/*Tab Bar*/}
				<View style={{flexDirection:'row'}}>
					<ScrollView
						automaticallyAdjustContentInsets={false}
						horizontal={true}
						bounces={false}
						showsHorizontalScrollIndicator={false} 
						style={styles.tabBar}>
						{this.props.children.map((child, i) => this.renderTabBarOption(child.props.title, child.props.color, i))}
					</ScrollView>
				</View>

				{/*Main Content*/}
				<View style={{flex:1}}>
					{this.props.children.map((child, i) => this.renderCenterView(child, i))}
				</View>

			</View>
		);
	}
}

var styles = StyleSheet.create({
	tabBarOption: {
		justifyContent: 'center',
		paddingLeft:23,
		paddingRight:23,
		paddingBottom:14,
		paddingTop:12,
		borderBottomWidth:7,
	},
	tabBar: {
		position: 'relative',
	},
	tabBarSwipeIcon: {
		paddingLeft: 2,
		paddingRight: 2,
		position: 'absolute',
		right: 0,
		height: 43,
		width:28,
		justifyContent: 'center',
		backgroundColor: '#EEEDE7',
	},
});
