import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ProgressBar} from 'react-bootstrap';

import { fetchPost } from "../actions";
import Page from "../../components/posts/Page";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div className="loading">
          <p>loading...</p>
          <ProgressBar active now={100} />
        </div>
      );
    }

    return (
      <Page post={post} />
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
