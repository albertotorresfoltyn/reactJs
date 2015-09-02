/** @jsx React.DOM */
'use strict'
var React = require('react')
var BlogEntry = require('./BlogEntry')
var OpenedBlogEntry = require('./OpenedBlogEntry')
module.exports = React.createClass({
                  render: function () {
                    var props = this.props;
                    var rows = this.props.blogs.filter(function(blog){return blog.title.toLowerCase().indexOf(props.filterText.toLowerCase())>-1; }).map(function(blog){
                      if (blog.title == props.openedEntry) {
                        return <OpenedBlogEntry key={blog.title} blog={blog} expandEntry={props.expandEntry}/>
                      } else {
                        return <BlogEntry key={blog.title} blog={blog} expandEntry={props.expandEntry}/>
                      }
                    });
                  return  <div className="row" >
                           <div className="col-lg-offset-4">
                            {rows}
                           </div>
                          </div>
                  }
                });