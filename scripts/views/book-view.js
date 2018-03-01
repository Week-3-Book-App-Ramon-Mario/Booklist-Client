'use strict';

var app = app || {};

(function(module) {
const bookView = {};

bookView.initIndexPage = function() {
    $('.error-view-container').hide();
    $('.book-details').hide();
    $('#book-form').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
}

bookView.initDetailPage = function(ctx) {
  $('.book-view').show();
  $('.book-details').empty();
  // $('.error-view-container').hide();
  // $('#book-form').hide();
 let template = Handlebars.compile($('#book-details').text());
 $('.book-details').append(template(ctx));
}

bookView.initCreateFormPage= function() {
$('#book-form').show();
$('#create-form').on('submit', function(event) {
event.preventDefault();

let book = {
  title: event.target.title.value,
  author: event.target.author.value,
  isbn: event.target.isbn.value,
  image_url: event.target.image_url.value,
  description: event.target.description.value,  
}
})
}

module.bookView = bookView;
})(app)

$(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
})