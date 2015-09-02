/** @jsx React.DOM */
'use strict'
var React = require('react')
var SearchBar = require('./SearchBar')
var BlogList = require('./BlogList')
module.exports = React.createClass({
					getInitialState: function () {
					  return {
					      filterText: '',
					      openedEntry: ''
					  }
					},
					expandEntry: function(entry){
					  //console.log('You clicked: ', entry  );
					  this.setState({
					    openedEntry: entry.title
					  });
					},
					handleInputBox: function (filterText) {
					  this.setState({
					    filterText: filterText
					  });
					},
					render: function () {
					  return <div className="spacer">
					          <SearchBar onFilterInput={this.handleInputBox} filterText={this.state.filterText} />
					          <BlogList blogs={this.props.blogs} filterText={this.state.filterText} openedEntry={this.state.openedEntry} expandEntry={this.expandEntry}/>
					         </div>
					}
				});
