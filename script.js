const tweetsContainer = document.querySelector('.tweets');
        const newTweetForm = document.querySelector('.new-tweet');
        const newTweetTextarea = document.querySelector('.new-tweet textarea');
        const newTweetButton = document.querySelector('.new-tweet button[type="submit"]');

        newTweetButton.addEventListener('click', (e)=> {
            e.preventDefault();
            const newTweetText = newTweetTextarea.value.trim();
            if (newTweetText !== '') {
                const newTweetHTML = `
                <div class = "tweet">
                <span class = "username">@${prompt('Enter your usename')}</span>
                <p class = "tweet-text">${newTweetText}</p>
                <p class = "tweet-actions">
                <a href = "#">Reply</a>
                <a href = "#">Retweet</a>
                <a href = "#">Like</a>
                </div>
                `;

                tweetsContainer.innerHTML += newTweetHTML;
                newTweetTextarea.value = '';
            }
        });