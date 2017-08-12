import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class PostItem extends Component {
	render() {
		let post = this.props.post;
		return (
			<div className="post-item">
				<Row>
					<Col md={12} >
						<h3 className="title">{post.title}</h3>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<div className="content">{post.content}</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<div className="user">{post.categories}</div>
					</Col>
					<Col md={6}>
						<div className="date"><div>2017.8.11</div></div>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col md={6}>
						<div className="read-more"><a href={`/posts/${post.id}`}>Read More</a></div>
					</Col>
				</Row>
			</div>
		)
	}
}
