import React from "react";


function Map() {
  let background = document.getElementById("background")
  background.style.backgroundImage = "url('./map.jpeg')"
  // background.style.backgroundPosition = "-400px -100px"
  // background.style.yIndex = 200
  return (
    <div >
    <div>React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with and it'll basically:

Verify that the components inside are following some of the recommended practices and warn you if not in the console.
Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.
As the documentation says, strict mode is development oriented so you don't need to worry about it impacting on your production build.</div>
    </div>
  )
}

export default Map;
