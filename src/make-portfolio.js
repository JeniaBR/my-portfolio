import catchOfTheDay from './img/portfolio/catch.png';
import emoji from './img/portfolio/emoji.png';
import battle from './img/portfolio/battle.png';
import delicious from './img/portfolio/delicious.png';
import reduxstagram from './img/portfolio/reduxstagram.png';
import simon from './img/portfolio/simon.png';
import tic from './img/portfolio/tic-tac-toe.png';

const portfolio = [
  {
    id: 0,
    title: "Now That's Delicious!",
    img: delicious,
    description: `Full stack restaurant application which users can search, geolocate, review and curate their favourite restaurants from around the world.
                  The application has three main models — Users, Stores and Reviews — all of which are relational. It is designed to hit upon many of today's application needs
                  such as user authentication, database storage, Ajax REST API, file upload and image resizing.`,
    technologies: ['nodejs-plain', 'mongodb-plain', 'express-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 1,
    title: "Catch of the Day",
    img: catchOfTheDay,
    description: `Real-time app for a trendy seafood market where price and quantity available are variable and can change at a moment's notice.
                  The app have a menu, an order form, and an inventory management area where authorized users can immediately update product details.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 2,
    title: "Reduxstagram",
    img: reduxstagram,
    description: `A simple photo app (Instagram kind of clone), you can like a photo, you can click on a photo and leave a comment.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 3,
    title: "Github Battle",
    img: battle,
    description: `Cool web app that interacts with Github REST API. It have a Battle page and Popular page (with React Router), Popular page will present popular repos from github
                  per selected language, Battle page will take you to form, input 2 users from github and see who wins.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    img: tic,
    description: `Tic Tac Toe Game, nothing special, an old good game. I've implemented minimax algorithm for the AI, so your best score is tie.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 5,
    title: "Emoji Search",
    img: emoji,
    description: `This app is for searching emoji. Search your emoji, click on it, it will be copied to your clipboard, paste it wherever you want.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  },
  {
    id: 6,
    title: "Simon Game",
    img: simon,
    description: `The memory game where a user has to repeat the sequence of 20 sounds in order to win. As the game progresses, the number of buttons to be pressed increases.
                  There are also a strict mode for the hardcore.`,
    technologies: ['react-original', 'webpack-plain', 'javascript-plain', 'html5-plain', 'css3-plain']
  }
];

export default portfolio;
