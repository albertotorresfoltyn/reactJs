/** @jsx React.DOM */
'use strict'
var React = require('react')
var Comment = require('./Comment')
module.exports = React.createClass({
					handleClick: function () {
					  this.props.expandEntry(this.props.blog);
					},
					render: function () {
					  var attributeId = this.props.blog.title; 
					  var comments = this.props.blog.comments.map(function(comment){
					    return (<Comment comment={comment}/>);
					  });
					  return (
					    <div className="row" onClick={this.handleClick}>
					     <div className="span4"><h2 className="post-title">{this.props.blog.title}</h2></div>
					     <p>{this.props.blog.text}</p>
					     <h3>Comments:</h3>
					     {comments}
					     </div>
					  );
					}
				});	