/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
                    handleChange: function () {
                      this.props.onFilterInput(this.refs.filterTextInput.getDOMNode().value);
                    },
                    render: function () {
                      return <div className="row">
                               <div className="col-lg-offset-4">
                                <input type="search" className="form-control" onChange={this.handleChange} placeholder="Search for an entry" value={this.props.filterText} ref="filterTextInput"/>
                               </div>  
                             </div>
                    }
                  });