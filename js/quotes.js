/* jshint esversion: 6 */

/* Quote data */
const quotes = [
    {
        text: `Play2Learn completely transformed how our kids engage with foundational concepts.
        Learning isn't a chore anymore; it's an adventure they look forward to every single day.`,
        author: 'Justin Jest'
    },
    {
        text: `Witnessing how my children try to beat their high scores makes them learn more math and exponentially increases their grades in that subject.`,
        author: 'Yesenia Pichardo'
    },
    {
        text: `The game Math Facts Practice has helped my math students solve more arithmetic problems; the reward system greatly helps them retain information.`,
        author: 'John Smith'
    }
];

/* DOM elements */

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

/* State */

let currentIndex = 0;

/* Quote rotation */

const showNextQuote = () => {
   currentIndex = (currentIndex + 1) % quotes.length;
   quoteText.textContent = quotes[currentIndex].text;
   quoteAuthor.textContent = quotes[currentIndex].author;
};
setInterval(showNextQuote, 10000);