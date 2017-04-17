/*
 * 学习mongoose model
 * http://mongoosejs.com/docs/guide.html
 */

 const mongoose = require('mongoose')
 const moment = require('moment')
 const blogSchema = require('./schema')['blogSchema']
 /*
  * Creating a model
  * 将schema塞入model
  */

 const Blog = mongoose.model('Blog', blogSchema)
 var blog = new Blog({
 	  title:  'gulp学习指南',
	  author: 'slashhuang',
	  body:   'hello world',
	  comments: [{ body: '真不错', date:moment().toDate()}],
	  // date:  moment().toDate(),
	  hidden: false,
	  meta: {
	    votes: 111,
	    favs:  12
	  }
 });
 blog.save((err,blog)=>{
 	console.log(err)
 })
 /*
  * 实例方法
  */
  blog.$findAll((err,list)=>{
    console.log('findall',list)
  })
