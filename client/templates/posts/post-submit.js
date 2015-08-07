Template.postSubmit.helpers({

});

Template.postSubmit.events({

  "submit form": function (event, template) {
    Posts.insert({
      title: event.target.title.value,
      url: event.target.url.value,
      description: event.target.description.value
    });
  }


});
