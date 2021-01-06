// Function to create each thumbnail subgrid element
const createSubgridVideoItem = (object, view) => {

  // Create the video container
  const videoContainer = document.createElement('div');
  videoContainer.id = object.keyword + '-container';
  videoContainer.className = 'subgrid-video-container';

  // Create the video element and set attributes
  const video = document.createElement('video');
  video.id = object.keyword + '-video';
  video.className = 'embedded-media thumbnail-video';
  video.muted = 'true';
  video.setAttribute('loop', 'true');
  video.setAttribute('autoplay', '');
  video.setAttribute('alt', object.altTag + ' demo');
  

  // Append video element into the video container
  videoContainer.appendChild(video);

  // Set the source and attributes for the video element
  const videoSource = document.createElement('source');
  videoSource.setAttribute('src', object.videoSource);
  videoSource.setAttribute('type', 'video/mp4');

  // Create the alternative image to display in case video doesn't load
  const altImg = document.createElement('img');
  altImg.setAttribute('src', object.altImg);
  altImg.setAttribute('alt', 'video not supported, ' + object.altTag + ' thumbnail');

  // Append video source and alternative image to the video element
  video.appendChild(videoSource);
  video.appendChild(altImg);

  // Create and append the thumbnail label
  const thumbnailLabelDiv = document.createElement('div');

  // If mobile view (<480px)
  if (view == "mobile") {

    // Create circle shape
    const circleShapeDiv = document.createElement('div');
    circleShapeDiv.className = 'circle-shape middle-circle';

    // Append circle shape to image container
    videoContainer.appendChild(circleShapeDiv);

    // Set class name for thumbnail label
    thumbnailLabelDiv.className = 'project-label';

    // Set id for thumbnail label
    thumbnailLabelDiv.id = object.keyword + '-label';

    // Append thumbnail label to circle shape
    circleShapeDiv.appendChild(thumbnailLabelDiv);

    // Create anchor tag and set all the attributes
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', object.external);
    anchorTag.className = 'button-link'
    anchorTag.setAttribute('target', '_blank');
    anchorTag.setAttribute('rel', 'noopener noreferrer');

    // Append anchor tag to circle shape
    circleShapeDiv.appendChild(anchorTag);

    // Create the go-to button and set attributes
    const goToButton = document.createElement('button');
    goToButton.className = "go-to-external";
    goToButton.id = 'go-to-' + object.keyword;
    goToButton.innerHTML = 'Try it out';

    // Append go-to button to anchor tag
    anchorTag.appendChild(goToButton);

    // If desktop or tablet view 
  } else if (view == "desktop" || view == "tablet") {
    // Set class name
    thumbnailLabelDiv.className = 'thumbnail-label';

    // Append thumbnail label to video container
    videoContainer.appendChild(thumbnailLabelDiv);

    // Create and append the click to enlarge button
    const clickToEnlargeButton = document.createElement('button');
    clickToEnlargeButton.id = object.keyword + '-enlarge-button';
    clickToEnlargeButton.className = 'click-to-enlarge-button';
    clickToEnlargeButtonP = document.createElement('p');
    clickToEnlargeButtonP.id = object.keyword + '-enlarge-button-p';
    clickToEnlargeButtonP.innerHTML = 'Click to enlarge';
    clickToEnlargeButton.appendChild(clickToEnlargeButtonP);
    videoContainer.appendChild(clickToEnlargeButton);
  }

  // Features common to all viewports
  
  // Create the p element for the label text
  const thumbnailLabelP = document.createElement('p');

  // Set the label
  thumbnailLabelP.innerHTML = object.labelName;

  // Append the label text to the thumbnail label container
  thumbnailLabelDiv.appendChild(thumbnailLabelP);
  
  return videoContainer;
}

// Function to create the secondary photo
const createSubgridPhoto = () => {
  const photoDiv = document.createElement('div');
  const photoImg = document.createElement('img');
  photoImg.className = 'embedded-media';
  photoImg.setAttribute('src', 'resources/images/profile-photo-ideas.jpeg');
  photoImg.setAttribute('alt', 'mel lim');

  photoDiv.appendChild(photoImg);

  return photoDiv;
}

// Function to create the responsive website tile
const createResponsiveWebsiteTile = (object, view) => {
  console.log(view);

  // Create the image container and set the id
  const imageContainer = document.createElement('div');
  imageContainer.id = object.keyword + '-container';
  
  // Create the image element, and set the source and attributes
  const image = document.createElement('img');
  image.src = object.imageSource;
  image.className = 'embedded-media';
  image.setAttribute('alt', object.altTag + ' thumbnail');

  // Append image element into the image container
  imageContainer.appendChild(image);

  // Create and append the thumbnail label
  const thumbnailLabelDiv = document.createElement('div');
  
  // If the viewport is desktop-sized or mobile-sized
  if (view == "desktop" || view == "mobile") {

    // Create circle shape
    const circleShapeDiv = document.createElement('div');
    circleShapeDiv.className = 'circle-shape middle-circle';

    // Append circle shape to image container
    imageContainer.appendChild(circleShapeDiv);

    // Set class name for thumbnail label
    thumbnailLabelDiv.className = 'project-label';

    // Set id for thumbnail label
    thumbnailLabelDiv.id = object.keyword + '-label';

    // Append thumbnail label to circle shape
    circleShapeDiv.appendChild(thumbnailLabelDiv);

    // Create anchor tag and set all the attributes
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', 'https://mel-lim.github.io/adventure-website/');
    anchorTag.className = 'button-link'
    anchorTag.setAttribute('target', '_blank');
    anchorTag.setAttribute('rel', 'noopener noreferrer');

    // Append anchor tag to circle shape
    imageContainer.appendChild(anchorTag);

    // Create the go-to button and set attributes
    const goToButton = document.createElement('button');
    goToButton.id = 'go-to-' + object.keyword;
    goToButton.innerHTML = 'Try it out';

    // Append go-to button to anchor tag
    anchorTag.appendChild(goToButton);

    // If the viewport is tablet-sized
  } else if (view == "tablet") {

    // Set class name
    thumbnailLabelDiv.className = 'thumbnail-label';

    // Append thumbnail label to image container
    imageContainer.appendChild(thumbnailLabelDiv);

    // Create and append the click to enlarge button
    const clickToEnlargeButton = document.createElement('button');
    clickToEnlargeButton.id = object.keyword + '-enlarge-button';
    clickToEnlargeButton.className = 'click-to-enlarge-button';
    const clickToEnlargeButtonP = document.createElement('p');
    clickToEnlargeButtonP.id = object.keyword + '-enlarge-button-p';
    clickToEnlargeButtonP.innerHTML = 'Click to enlarge';
    clickToEnlargeButton.appendChild(clickToEnlargeButtonP);
    imageContainer.appendChild(clickToEnlargeButton);
  }
  
  // These following elements are common for all viewports

  // Create the p element for the label text
  const thumbnailLabelP = document.createElement('p');

  // Set the label
  thumbnailLabelP.innerHTML = object.labelName;

  // Append the label text to the thumbnail label container
  thumbnailLabelDiv.appendChild(thumbnailLabelP);
  
  return imageContainer;
}

// Detect desktop viewport size
const mediaQueryDesktop = window.matchMedia('(min-width: 641px)');

// Detect mobile viewport size
const mediaQueryMobile = window.matchMedia('(max-width: 480px)');

// Desktop view - smaller subgrid tiles
const generateDesktopTiles = () => {
  // Create the subgrid container div
  const subgridDiv = document.createElement('div');
  subgridDiv.id = 'subgrid-container';

  // Insert it into the main
  portfolioMain.insertBefore(subgridDiv, null);

  // Append the video container to the subgrid
  subgridDiv.appendChild(createSubgridVideoItem(javascriptGame, "desktop"));
  subgridDiv.appendChild(createSubgridVideoItem(listmakerApp, "desktop"));
  subgridDiv.appendChild(createSubgridPhoto());
  subgridDiv.appendChild(createSubgridVideoItem(interactiveWebsite, "desktop"));

  portfolioMain.appendChild(createResponsiveWebsiteTile(responsiveWebsite, "desktop"));
}

// Tablet view - larger subgrid tiles
const generateTabletTiles = () => {
  // Insert the subgrid items directly into the main
  portfolioMain.appendChild(createSubgridVideoItem(javascriptGame, "tablet"));
  portfolioMain.appendChild(createSubgridVideoItem(listmakerApp, "tablet"));
  portfolioMain.appendChild(createSubgridPhoto());
  portfolioMain.appendChild(createSubgridVideoItem(interactiveWebsite, "tablet"));
  portfolioMain.appendChild(createResponsiveWebsiteTile(responsiveWebsite, "tablet"));
}

// Desktop view - smaller subgrid tiles
const generateMobileTiles = () => {
  // Insert the subgrid items directly into the main
  portfolioMain.appendChild(createSubgridVideoItem(javascriptGame, "mobile"));
  portfolioMain.appendChild(createSubgridVideoItem(listmakerApp, "mobile"));
  portfolioMain.appendChild(createSubgridPhoto());
  portfolioMain.appendChild(createSubgridVideoItem(interactiveWebsite, "mobile"));
  portfolioMain.appendChild(createResponsiveWebsiteTile(responsiveWebsite, "mobile"));
}

let view;

// Load the correct HTML, depending on the viewport size
const loadResponsiveTiles = (mqDesktop, mqMobile) => {
  if (mqDesktop.matches) {

    // If the viewport width is greater than 641px, generate HTML code for the tiles as smaller, subgrid items
    generateDesktopTiles();
    view = 'desktop';

  } else if (!mqDesktop.matches) {

    if (mqMobile.matches) {
      // If the viewport width is 480px or less, generate HTML code
      generateMobileTiles();
      view = 'mobile';

    } else if (!mqMobile.matches) {
        // If the viewport width is less than 640px, generate the HTML code for the tiles as larger grid items
        generateTabletTiles();
        view = 'tablet';
    }
  }
}

// This function detects whether the view port has passed from one 'type' to another - if so, reload
const handleResize = (mqDesktop, mqMobile) => {
  if (
    (mqDesktop.matches && view == 'tablet') ||
    (mqDesktop.matches && view == 'mobile') ||
    (!mqDesktop.matches && !mqMobile.matches && view == 'desktop') || 
    (!mqDesktop.matches && !mqMobile.matches && view == 'mobile') ||
    (mqMobile.matches && view == "desktop") ||
    (mqMobile.matches && view == "tablet")
    ) {
      location.reload();
  }
}

// Upon the loading of the website, generate the correct tiles for the viewport
window.addEventListener('load', function() {
  loadResponsiveTiles(mediaQueryDesktop, mediaQueryMobile);
});

// Upon the resizing of the window, trigger the function to work out whether the resize has gone into a different 'type'
window.addEventListener('resize', function() {
  handleResize(mediaQueryDesktop, mediaQueryMobile);
})



