print("\x1b[7m",'::Welcome to MongoDB Task1::', "\x1b[0m");
print('\n');
conn = new Mongo();
db 		= conn.getDB("blog");
newdb	=  conn.getDB("posts");
newdb.dropDatabase();

var posts = db.posts.find(); 

posts.forEach(function(a){
	var temp 	= {};
	temp.title 	= a.title;
	temp.body	= a.post;
	
	var author 	= db.authors.findOne( { 'author_id' : a.author_id} );
	temp.author = author.username;	

	temp.date	= a.date;

	var post_comments 	= db.post_comments.find( { 'post_id' : a.post_id} );
	var comments = [];
	post_comments.forEach(function(a){
		comments.push(db.comments.findOne({ 'comment_id' : a.comment_id }, { '_id' : 0, 'comment_id' : 0 }));
	});
	temp.comments 	= comments;	
	
	var post_tags 	= db.post_tags.find( { 'post_id' : a.post_id} );
	var tags = [];
	post_tags.forEach(function(a){
		tags.push(db.tags.findOne({ 'tag_id' : a.tag_id }).name);
	});
	temp.tag = tags;	

	// print("\x1b[33m",'');
	// printjson(temp);
	// print("\x1b[0m");
	newdb.blogs.save(temp);
});


print("\x1b[7m",'New Database \'posts\'', "\x1b[0m");

var col = newdb.getCollectionNames(); 

col.forEach(function(a){
	print('\n\nCollection name: '+a +'\n\nElements:\n');
	cursor = newdb[a].find({}, {});
	while ( cursor.hasNext() ) {
	   printjson(cursor.next() );
	}
});

print("\x1b[34m", '');
print("\x1b[7m",'New Database \'posts\'', "\x1b[0m");
col.forEach(function(a){
	print('\nCollection name: '+a);
});
print("\x1b[37m", '');







