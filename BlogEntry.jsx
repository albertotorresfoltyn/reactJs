/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
        handleClick: function () {
          this.props.expandEntry(this.props.blog);
        },
        render: function () {
          var attributeId = this.props.blog.title; 
          return (
            <div className="row" onClick={this.handleClick}>
             <div className="span4"><h2 className="post-title">{this.props.blog.title}</h2></div>
            </div>
          );
        }
      });