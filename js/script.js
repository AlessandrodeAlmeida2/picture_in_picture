const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//pronpt to select media stream, pass to video video element, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whooops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});

//On load
selectMediaStream();