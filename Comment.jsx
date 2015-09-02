/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
        handleClick: function (what) {
          console.log(what);
        },
        render: function() {
          return (
            <div>
              <div> {this.props.comment.text}</div>
              <div>
               <small><span>{this.props.comment.author} </span>
               <span className="vote" onClick={this.handleClick.bind(this,'up')}><i className="fa fa-thumbs-up fa-1">{this.props.comment.upvotes}</i></span>
               <span> </span>
               <span className="vote" onClick={this.handleClick.bind(this,'down')}><i className="fa fa-thumbs-down fa-1">{this.props.comment.downvotes}</i></span>
               </small>
              </div>
            </div>
          );
        }
      });