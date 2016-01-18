var express = require('express'),
	app = express();

var articles = require('./controllers/articles')

// CRUD
// CREATE READ UPDATE DELETE

 /*
	a post can be like this :
	{
		title:"".
		body :"",
		author:"",
		comments:[]
	}

	a comment would like
	{
		name :""
		text :""
	}

 */

var posts = [];

var notImplemented = function(req,res) {
	res.send(501);
}


//app.use(express.logger());
//app.use(express.bodyParser());

// articles
app.get('/articles',articles.index); // show them all posts
app.get('/articles/new',articles.new); // create a new one
app.get('/articles/:articleId',notImplemented); // reading one
app.post('/articles',articles.create);    // post new one
app.put('/articles/:articleId',notImplemented);  // update post
app.delete('/articles/:articleId',notImplemented); // delete post

// comments
app.get('articles/:articleId/comments',notImplemented);
app.get('articles/:articleId/comments/:commentId',notImplemented);


app.listen(8000);

