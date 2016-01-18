
var articles = [];

module.exports.create = function(req,res){

console.log(req.body);
	articles.push(req.body)
	//res.redirect('/articles');

	res.json(req.body.title);
}

module.exports.index = function(req,res) {

	res.json(articles);
}

module.exports.new = function(req,res) {
	var response = "<form method='post' action='/articles'>\
					<input type='text' placeholder='title' name='title'>\
					<input type='text' placeholder='author' name='author'>\
					<textarea name='body'></textarea>\
					<button type='submit' value='submit'>Post</button>\
					</form>";

	res.send(response);
}