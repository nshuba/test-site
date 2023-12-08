async function clickHandler (e) {
    e.preventDefault();
    let res
    const me = document.querySelector('[name=query]');
    const resElement = document.querySelector('#result');
    console.log('me', me.value);
    try {
      const result = await navigator.permissions.query({ name: me.value });
      console.log('result from platform', result);
      res = { name: result.name, state: result.state }
    } catch (e) {
      res = e.message
    }
    resElement.value += JSON.stringify(res) + '\n'
  } 
  
  
function requestCamera() {
  navigator.mediaDevices.getUserMedia({video: true}, () => {}, () => {})
}

function requestMic() {
  navigator.mediaDevices.getUserMedia({audio: true}, () => {}, () => {})
}

function listen() {
  const perms = [
    "geolocation",
    "notifications",
    "push",
    "midi",
    "camera",
    "microphone",
    "background-fetch",
    "background-sync",
    "persistent-storage",
    "ambient-light-sensor",
    "accelerometer",
    "gyroscope",
    "magnetometer",
    "screen-wake-lock",
    "nfc",
    "display-capture",
    "accessibility-events",
    "clipboard-read",
    "clipboard-write",
    "payment-handler",
    "idle-detection",
    "periodic-background-sync",
    "system-wake-lock",
    "storage-access",
    "window-management",
    "window-placement",
    "local-fonts",
    "top-level-storage-access",
  ];
  
  var selectElement = document.getElementById("mSelect");
  for (const perm of perms) {
    var option = document.createElement("option");
    option.text = perm;
    option.value = perm;
    selectElement.add(option);
  }

  document.querySelector('#request').addEventListener('click', clickHandler);
  document.querySelector('#camera').addEventListener('click', requestCamera);
  document.querySelector('#mic').addEventListener('click', requestMic);
}

listen()