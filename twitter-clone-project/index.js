var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    tweetCount: "13.6K",
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assests/elonmusk.jpg',
    coverPhotoURL: 'assests/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    tweetCount: 3781,
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var headerContainer = document.querySelector(".header-container");
var coverPhotoContainer = document.querySelector(".cover-photo-container");
var profileDetailsContainer = document.querySelector(".profile-details-container");


headerContainer.innerHTML = `
<div class="header-btn">
    <button class="back-btn">←</button>
</div>
<div class="header-info">
    <h2>${user1.displayName}<button class="verified-btn">✓</button></h2>
    <p class="lighter-text">${user1.tweetCount} Tweets</p>
</div>
`;

coverPhotoContainer.innerHTML = `
    <img src=${user1.coverPhotoURL} alt="Cover Photo or User">
`;

profileDetailsContainer.innerHTML = `
    <img class="profile-photo" src=${user1.avatarURL} alt="Avatar Photo of User's Choice">
    <h2>${user1.displayName}<button class="verified-btn">✓</button></h2>
    <p class="lighter-text">${user1.userName}</p></br>
    <p class="lighter-text"><img style="width: 20px"src="https://img.icons8.com/ios/250/0/calendar.png"> Joined ${user1.joinedDate}</p></br>
    <h2>${user1.followingCount} <p class="lighter-text">Following</p> ${user1.followerCount} <p class="lighter-text">Followers</p></h2>
`;
