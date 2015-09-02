/** @jsx React.DOM */
'use strict'
var FilterableBlogTable = require('./FilterableBlogTable')
var React = require('react')
var SearchBar = require('./SearchBar')
var blogs = [
{title:'First Journey with react',text:'This is an example ui for testing react. To add functionality to this I must. Then the wiki will grow a lot. My imagination is capped and can\'t imagine what to add ',comments:[{text:'this looks interesting', repplies: [],upvotes:10,downvotes:0, author: 'Alberto Torres'},
            {text:'this looks very interesting', repplies: [],upvotes:10,downvotes:0, author: 'Alberto Torres'}]},
{title:'Deeper look to react principles',text:'This is another article about how interesting can it be',comments:[],duration:1},
{title:'Third day big changes',text:'After the list, now we create the blog',comments:[]},
{title:'Fourth day, change display',text:'We add some more features',comments:[]},
{title:'reacting',text:'Now this is a full blog',comments:[]},
{title:'over reacting',text:'',comments:[],duration:1},
{title:'entry7',text:'',comments:[]},
{title:'entry8',text:'',comments:[]},
{title:'entry9',text:'',comments:[]},
{title:'entry10',text:'',comments:[]},
{title:'entry11',text:'',comments:[]}
];

React.render(
<FilterableBlogTable blogs={blogs}/>,document.getElementById('example')
);