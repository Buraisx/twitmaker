// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded',function(){
	var tweet = document.querySelector('#new_tweet')
	var tweetList = document.querySelector('.tweets')
	tweet.addEventListener('submit',function(e){
		e.preventDefault()
		$.ajax({
			url: tweet.getAttribute('action'),
			method: tweet.getAttribute('method'),
			dataType: 'json',
			data: $(tweet).serialize()	
		}).done(function(response){
			var newTweet = `<li class="tweet">
				<p>${response.message}</p>
				<time>${response.created_at}</time>
			</li>`;
			$(tweetList).prepend(newTweet)

		})
	})
})