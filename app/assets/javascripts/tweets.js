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
			dataType: 'html',
			data: $(tweet).serialize()	
		}).done(function(response){

			tweetList.insertAdjacentHTML('afterbegin',response)

		})
	})
})