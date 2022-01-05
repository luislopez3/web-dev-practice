/*
        When we send data to a server,
        we often need to format data to the "shape" the server expects from us. 

        This can mean:
            - "Cleaning up" data, ex. formatting strings
            - Converting data structures from one to another (ex, converting arrays to objects)

        And then, we need to prepare the request by...
            - Putting everything for our request into a single well-structured object
            - "Stringifying" it into JSON, before sending!

        Let's imagine the variables below are values provided by the user.
        For example, in a login form.

        Use the variables below to create a "request object" with the following attributes:

            1. key email, with value email
                format the email to ONLY be in lowercase, with whitespaces removed
            2. key password, with value ENCRYPTED password 
                use the result of the encrypt function
            3. key tweets, with value an OBJECT of tweets
                The tweet object should have timestamp as a key, and content as a value
                HINT: create an object, then loop over "tweets" to fill it (timestamp key, content value)

        Finally convert the object to a STRING, and then print it to the console
        You should see the full object, and NOT [Object, object]
    */
var email = "Aaron@freemote.com ";
var password = "helloworld";
var tweets = [
  { content: "im hungry", timestamp: Date.now() - 10000 },
  { content: "just got to mcdonalds", timestamp: Date.now() - 5000 },
  { content: "finished eating", timestamp: Date.now() },
];
function encrypt(pw) {
  return pw
    .split("")
    .map((char) => char.charCodeAt(0) + 10)
    .join("");
}

function tweetsObj(tweets) {
  let result = {};
  for (var tweet of tweets) {
    result[tweet.timestamp] = tweet.content;
  }
  return result;
}

var requestObject = {
  // to-do: add an email property (using the variable above)
  email: email.toLowerCase().trim(),
  // to-do: add a password property "encrypted" (with the encrypt function above)
  password: encrypt(password),
  tweets: tweetsObj(tweets),
};

console.log(JSON.stringify(requestObject));
