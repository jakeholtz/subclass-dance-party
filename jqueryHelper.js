$(document).ready(function() {
  $('.addDancerButton').on('click', function() {
    var $bodyBelowBar = $('.dancing');
    $bodyBelowBar.html('');
    var appendToBodyAfterBar = function() {
      for (var i = 0; i < arguments.length; i++) {
        $('body').append(arguments[i]);
      }
    }
    appendToBodyAfterBar('<div class="dancer"><a href="dancefloor.html"><img src="dancerchicken.png" alt="Dancer"></a></div>');
  });
});


    // for (var user in streams.users) {
    //   $('#users').append('<li class="link" data-user='+user+'>@' + user + '</li>');
    // }

    // var tweetList = streams.home;

    // function displayTweets(begin, end, tweetList) {
    //   var i = end;
    //   while (begin <= end) {

    //     var tweet = tweetList[i];
    //     var user = tweetList[i].user;
    //     var date = tweetList[i].created_at;

    //     var $tweet = $('<div class="tweet"><div class="title">' + '@' + '<span id="smallUser">' + user + '</span>' + ' ' + '<span class ="date">'+ date + '</span>' + '</div>' + tweet.message + '</div>');

    //     $tweet.prependTo($('#tweets').fadeIn());

    //     begin += 1;
    //   }
    // }

    // displayTweets(0, (streams.home.length - 1), tweetList);


    // $('#users').on('click', '.link', function(element) {
    //   element.preventDefault();

    //   $('#tweets').empty();

    //   var name = $(this).attr('data-user');
    //   var timeline = streams.users[name].length - 1;

    //   while (timeline >= 0) {
    //     displayTweets(0, timeline, streams.users[name]);
    // //     timeline -= 1;
    //   }
    // });