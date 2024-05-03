let backgroundImageIndex = 0;
const backgroundImageList = [
    'assets/1.gif',
    'assets/2.gif',
    'assets/3.gif',
    'assets/4.gif'
];

function changeBackgroundImage() {
    backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImageList.length;
    document.body.style.backgroundImage = `url('${backgroundImageList[backgroundImageIndex]}')`;
}
