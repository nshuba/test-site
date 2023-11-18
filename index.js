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
  document.querySelector('#request').addEventListener('click', clickHandler);
  document.querySelector('#camera').addEventListener('click', requestCamera);
  document.querySelector('#mic').addEventListener('click', requestMic);
}

listen()