import React, { Component } from 'react';
import { compose } from 'recompose';

import './CommentSection.css';

import NewComment from './NewComment/NewComment';
import Comment from './Comment/Comment';
import { withFirebase } from '../../Firebase';
import { withAuthUser } from '../../Firebase/Session';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsList: null,
      newComment: ''
    };
  }

  componentDidMount() {
    const { firebase, videoId } = this.props;

    firebase.db
      .ref('comment')
      .orderByChild('videoId')
      .equalTo(`${videoId}`)
      .on('value', snapshot => {
        const comments = snapshot.val();

        if (comments != null) {
          const commentsList = Object.keys(comments).map(key => ({
            ...comments[key],
            uid: key
          }));

          this.setState({ commentsList: commentsList });
        }
      });
  }

  onNewCommentChange = e => {
    this.setState({ newComment: e.target.value });
  };

  onSendComment = () => {
    const { firebase, videoId, authUser } = this.props;
    const { newComment } = this.state;

    const comment = {
      videoId: videoId,
      userId: authUser.uid,
      comment: newComment
    };

    firebase.comment
      .create(comment)
      .then(() => {
        console.log('Comment criado');
      })
      .catch(error => console.log(error));
  };

  onDeleteComment = comment => {
    const { firebase, authUser } = this.props;

    if (comment.userId === authUser.uid) {
      firebase.comment.delete(comment.uid, error => {
        console.log(error);
      });
    }
  };

  render() {
    const { videoId, userId } = this.props;
    const { commentsList, newComment } = this.state;

    const commentStyle = {
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridRowGap: '16px',
      margin: '16px'
    };

    const buttonStyle = {
      color: '#000',
      backgroundColor: '#fff'
    };

    return (
      <div className="CommentSection">
        <NewComment
          newComment={newComment}
          onChange={this.onNewCommentChange}
          onSend={this.onSendComment}
          videoId={videoId}
          userId={userId}
        />
        <h1 className="Small-Text-Bold">3 COMENTÁRIOS</h1>
        {commentsList &&
          commentsList.map(comment => {
            return (
              <div style={commentStyle}>
                <p>{comment.comment}</p>{' '}
                <button
                  style={buttonStyle}
                  onClick={() => this.onDeleteComment(comment)}
                >
                  Deletar
                </button>
              </div>
            );
          })}
        <div className="comments">
          <Comment>Esse filme é incríiiiveeeeeel</Comment>
          <Comment>Esse filme é incríiiiveeeeeel</Comment>
          <Comment>Esse filme é incríiiiveeeeeel</Comment>
        </div>
      </div>
    );
  }
}

export default compose(
  withFirebase,
  withAuthUser
)(CommentSection);
