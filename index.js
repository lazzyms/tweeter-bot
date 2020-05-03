var twitter = require('twit')
// var twitter = require('twitter')
var config = require('./config.js')
var fs = require('fs');
var t = new twitter(config)

var param = {
    track: 'Harry Potter'
}

let myReply = 'This is an magic influeted reply to your tweet regarding the great wizard Harry Potter.'

/* To get the stream of tweets */
var stream = t.stream('statuses/filter', param)

stream.on('tweet', function (tweet) {
    let id = tweet.id_str
    let username = tweet.user.screen_name

    let status = '@' + username + ' ' + myReply
    console.log(status)
    // t.post('statuses/update', { in_reply_to_status_id: id, status: status}, (err, reply) => {

    //     console.log({ reply })
    //     console.error({ err })
    // })
})

/* search and reply to a recent tweet
var params = {
    q: 'Harry Potter',
    count: 1,
    result_type: 'recent',
    lang: 'en'
}

t.get('search/tweets', params, (err, data, resp) => {
    if (!err) {
        for (let i = 0; i < data.statuses.length; i++) {
            let id = data.statuses[i].id
            let id_str = data.statuses[i].id_str
            let user = data.statuses[i].user.screen_name
            // console.log('org tweet :', data.statuses[i])
            t.post('statuses/update', { status: '@' + user + ' hogwarts elf', in_reply_to_status_id: id_str }, (err, reply) => {
                if (!err) {
                    console.log('Tweeted :', reply)
                } else {
                    console.error('reply error : ', err)
                }
            })
        }
    } else {
        console.error('search error :', err)
    }
})

*/

/* post a tweet to your feed

t.post('statuses/update', {status: 'Look where did I tweet from'}, (error, tweet, response) => {
    if(error){
        throw error
    }

    console.log(tweet)
    console.log(response)
})

*/

/* Search and like tweet

t.get('search/tweets', params, function (err, data, response) {
    if (!err) {
        // This is where the magic will happen

        // Loop through the returned tweets
        for (let i = 0; i < data.statuses.length; i++) {
            // Get the tweet Id from the returned data
            let id = { id: data.statuses[i].id_str }
            // Try to Favorite the selected Tweet
            t.post('favorites/create', id, function (err, response) {
                // If the favorite fails, log the error message
                if (err) {
                    console.log(err[0].message);
                }
                // If the favorite is successful, log the url of the tweet
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            });
        }
    } else {
        console.log(err);
    }
})

*/