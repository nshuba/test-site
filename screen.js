function enterFullScreen() {
  document.documentElement.requestFullscreen()
}

function lockOrientation(e) {
  e.preventDefault();
  const orientation = document.querySelector('[name=orientation]').value;
  const resElement = document.querySelector('#result');

  screen.orientation
    .lock(orientation)
    .then(() => {
      resElement.value += `Locked to ${orientation}\n`;
    })
    .catch((error) => {
      resElement.value += `${error}\n`;
    });
}

function listen() {
  const options = [
    "any",
    "natural",
    "landscape",
    "portrait",
    "portrait-primary",
    "portrait-secondary",
    "landscape-primary",
    "landscape-secondary",
    "unsupported"
  ]

  var selectElement = document.getElementById("mSelect");
  for (const orientation of options) {
    var option = document.createElement("option");
    option.text = orientation;
    option.value = orientation;
    selectElement.add(option);
  }

  document.querySelector('#enterFullScreen').addEventListener('click', enterFullScreen);
  document.querySelector('#lockOrientation').addEventListener('click', lockOrientation);
}

listen()