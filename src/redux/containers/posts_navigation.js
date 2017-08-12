import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from "../../components/navigation/Header"

class PostNavigation extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

export default connect()(PostNavigation);
