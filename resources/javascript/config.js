// Create a shorthand for the function document.getElementById()
function $(x) {
  return document.getElementById(x);
}

// Define the targets 

const portfolioMain = $("portfolio-main");
//const responsiveWebsite = $('responsive-website-container');

// Configure the tiles

const javascriptGame = {
  media: "video",
  keyword: "javascript-game",
  altTag: "javascript game",
  videoSource: "resources/videos/javascript-game-demo-v2.mp4",
  altImg: "resources/images/javascript-game-thumbnail.png",
  labelName: 'Polar bear javascript game',
  external: 'https://mel-lim.github.io/polar-bear-game/',
  small: {
    container: "javascript-game-container",
    video: "javascript-game-video",
    clickToEnlargeButton: "javascript-game-enlarge-button"
  },
  large: {
    container: "javascript-game-container-large",
    video: "javascript-game-video-large"
  },
  isEnlarged: false
}

const listmakerApp = {
  media: "video",
  keyword: "listmaker-app",
  altTag: "listmaker web app",
  videoSource: "resources/videos/listmaker-demo.mp4",
  altImg: "resources/images/interactive-listmaker-thumbnail.png",
  labelName: 'Listmaker web app',
  external: 'https://mel-lim.github.io/adventure-website/plan-adventure.html',
  small: {
    container: "listmaker-app-container",
    video: "listmaker-app-video",
    clickToEnlargeButton: "listmaker-app-enlarge-button"
  },
  large: {
    container: "listmaker-app-container-large",
    video: "listmaker-app-video-large"
  },
  isEnlarged: false
}

const interactiveWebsite = {
  media: "video",
  keyword: "interactive-website",
  altTag: "interactive website",
  videoSource: "resources/videos/interactive-website-demo.mp4",
  altImg: "resources/images/interactive-website-thumbnail.png",
  labelName: 'Interactive website',
  external: 'https://mel-lim.github.io/adventure-website/',
  small: {
    container: "interactive-website-container",
    video: "interactive-website-video",
    clickToEnlargeButton: "interactive-website-enlarge-button"
  },
  large: {
    container: "interactive-website-container-large",
    video: "interactive-website-video-large"
  },
  isEnlarged: false
}

const responsiveWebsite = {
  media: "image",
  keyword: "responsive-website",
  altTag: "responsive website",
  imageSource: "resources/images/thumbnail-responsive-webpage.png",
  labelName: 'Multi-page, responsive website',
  small: {
    container: "responsive-website-container",
    image: "responsive-website-image",
    clickToEnlargeButton: "responsive-website-enlarge-button"
  },
  large: {
    container: "responsive-website-container-large",
    image: "responsive-website-image-large"
  },
  isEnlarged: false
}