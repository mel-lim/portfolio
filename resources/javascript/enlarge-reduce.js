// Function to show and hide the larger version of the thumbnail items

const enlargeReduce = (event, object) => {
  const targetElement = event.target;

  if (object.isEnlarged == false) {
    const clickToEnlargeButton = $(object.keyword + '-enlarge-button');
    const clickToEnlargeButtonP = $(object.keyword + '-enlarge-button-p');
    if (targetElement == clickToEnlargeButton ||targetElement == clickToEnlargeButtonP) {
        $(object.large.container).style.display = "flex";
        setTimeout(function () {
          if (object.media == "video") {
            $(object.large.video).className += " grow-in";
          } else if (object.media == "image") {
            console.log("image");
            $(object.large.image).className += " grow-in";
          }
          portfolioMain.style.opacity = "0.70";
        }, 100);
        object.isEnlarged = true;
        console.log("enlarged");
      } else {
        return;
      }
    } else if (object.isEnlarged == true) {
      const ancestor = $(object.large.container);
      const descendants = ancestor.getElementsByTagName('*');
      for (let i = 0; i < descendants.length; i++) {
        if (targetElement == descendants[i]) {
        return;
        } else {
        $(object.large.container).style.display = "none";
          if (object.media == "video") {
          $(object.large.video).className = "pre-grow";
          } else if (object.media == "image") {
          $(object.large.image).className = "pre-grow";
          }
        }
        portfolioMain.style.opacity = "1";
        object.isEnlarged = false;
        console.log("reduce function executed");
    }
  }
}

// Call the enlarge/reduce function on click
document.addEventListener("click", function (event) {
  console.log(event.target);
  enlargeReduce(event, javascriptGame);
  enlargeReduce(event, listmakerApp);
  enlargeReduce(event, interactiveWebsite);
  enlargeReduce(event, responsiveWebsite);
});