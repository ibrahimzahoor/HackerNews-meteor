Router.configure({
 layoutTemplate: 'layout'
});

//Router.route('/', {name: 'postsList'});

//Router.route('/postSubmit', {name: 'postSubmit'});

Router.route('/', function () {
  this.render('postsList');
});

Router.route('/postSubmit', function () {
  this.render('postSubmit');
});
