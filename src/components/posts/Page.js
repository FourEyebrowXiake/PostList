import React, {Component} from 'react';

export default class Page extends Component {
	render() {
		let post = this.props.post;
		return (
			<div className="page">

				<h1 className="title">
					{post.title}
				</h1>
				<div className="date">2017.8.12</div>
				<div className="content">
					{post.content}
				</div>
				<a href="/"><div className="btn-red">返回首页</div></a>
			</div>
		)
	}
}
