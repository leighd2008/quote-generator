const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}
// comment out lines 20-55, 88 & 93 and uncomment lines 57-74, 87 & 94 to use local quotes and visa versa to use api
// let apiQuotes = [];

// // Show New Quote
// function newQuote() {
//   // Pick a random quote from localQuotes.js array
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   //  If Author is blank, add 'Unknown'
//     if (quote.author === '') {
//       authorText.innerText = 'Unknown'
//     } else {
//       authorText.innerText = quote.author;
//     }
//     if (quote.text.length > 120) {
//       quoteText.classList.add('long-quote');
//     } else {
//       quoteText.classList.remove('long-quote');
//     }
//     quoteText.innerText = quote.text;
//     removeLoadingSpinner();
// }

// // Get Quote from API
// async function getQuote() {
//   showLoadingSpinner();
//   const apiUrl = 'https://type.fit/api/quotes';

//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//     removeLoadingSpinner();
//   } catch (error) {
//     console.log(error);
//     getQuote();
//   }
// }

// Show New Quote
function newLocalQuote() {
  // Pick a random quote from localQuotes.js array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //  If Author is blank, add 'Unknown'
    if (quote.author === '') {
      authorText.innerText = 'Unknown'
    } else {
      authorText.innerText = quote.author;
    }
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = quote.text;
    removeLoadingSpinner();
}



// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newLocalQuote);
// newQuoteBtn.addEventListener('click', getQuote);

twitterBtn.addEventListener('click', tweetQuote);

// On Load
// getQuote();
newLocalQuote();