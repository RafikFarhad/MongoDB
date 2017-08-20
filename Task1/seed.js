print('Welcome to MongoDB Seed::');

print("\x1b[33m",'');
conn = new Mongo();
db = conn.getDB("blog");
db.dropDatabase();

db.posts.save({
	'post_id'   : 1,
	'author_id'	: 1,
	'title'		: '1st blog post',
	'post' 		: 'Lorem Impsum',
	'date'		: new Date()
});
db.posts.save({
	'post_id'   : 2,
	'author_id'	: 1,
	'title'		: '2nd blog post',
	'post' 		: 'Hello World',
	'date'		: new Date()
});
db.posts.save({
	'post_id'   : 3,
	'author_id'	: 2,
	'title'		: '3rd blog post',
	'post' 		: 'SUST',
	'date'		: new Date()
});
db.posts.save({
	'post_id'   : 4,
	'author_id'	: 2,
	'title'		: '4th blog post',
	'post' 		: 'Hello all. Nice to meet you!!!',
	'date'		: new Date()
});
db.authors.save({
	'author_id'	: 1,
	'username'	: 'farhad',
	'password' 	: 'wow',
});
db.authors.save({
	'author_id'	: 2,
	'username'	: 'rafik',
	'password' 	: 'wow',
});
db.tags.save({
	'tag_id'	: 1,
	'name'		: 'Science',
});
db.tags.save({
	'tag_id'	: 2,
	'name'		: 'CSE',
});
db.tags.save({
	'tag_id'	: 3,
	'name'		: 'EEE',
});
db.comments.save({
	'comment_id'	: 1,
	'name'			: 'farhad2',
	'comment'		: 'appy nys lagsa',
	'email'		 	: 'test@test.com',
});
db.comments.save({
	'comment_id'	: 2,
	'name'			: 'mahir',
	'comment'		: 'mahirbabu',
	'email'		 	: 'tes2t@tes2t.com',
});
db.comments.save({
	'comment_id'	: 3,
	'name'			: 'meem',
	'comment'		: 'nai nai',
	'email'		 	: 'tes3t@tes3t.com',
});
db.comments.save({
	'comment_id'	: 4,
	'name'			: 'meem',
	'comment'		: 'arekbarnai nai',
	'email'		 	: 'tes3t@tes3t.com',
});
db.comments.save({
	'comment_id'	: 5,
	'name'			: 'mahir',
	'comment'		: 'arekbar mahirbabu',
	'email'		 	: 'tes2t@tes2t.com',
});
db.post_tags.save({
	'tag_id'	: 3,
	'post_id'	: 1,
});
db.post_tags.save({
	'tag_id'	: 2,
	'post_id'	: 1,
});
db.post_tags.save({
	'tag_id'	: 1,
	'post_id'	: 3,
});
db.post_tags.save({
	'tag_id'	: 2,
	'post_id'	: 3,
});
db.post_tags.save({
	'tag_id'	: 3,
	'post_id'	: 2,
});
db.post_comments.save({
	'comment_id'	: 1,
	'post_id'		: 3,
});
db.post_comments.save({
	'comment_id'	: 2,
	'post_id'		: 1,
});
db.post_comments.save({
	'comment_id'	: 3,
	'post_id'		: 1,
});
db.post_comments.save({
	'comment_id'	: 4,
	'post_id'		: 2,
});
db.post_comments.save({
	'comment_id'	: 5,
	'post_id'		: 2,
});







var col = db.getCollectionNames(); 

col.forEach(function(a){
	print('\n\nCollection name: '+a +'\n\nElements:\n');
	cursor = db[a].find();
	while ( cursor.hasNext() ) {
	   printjson(cursor.next() );
	}
});
print("\x1b[34m", '');
col.forEach(function(a){
	print('\nCollection name: '+a);
});
print("\x1b[37m", '');





///COLOR

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
