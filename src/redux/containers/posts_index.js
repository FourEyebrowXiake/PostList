import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Grid, Col} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { fetchPosts } from "../actions";
import PostItem  from "../../components/posts/PostItem";


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div>
        <Col md={4} key={post.id}>
          <PostItem post={post} />
        </Col>
        </div>
      );
    });
  }

  render() {
    return (
        <Grid  >
          <Row  >
              {this.renderPosts()}
          </Row>
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
