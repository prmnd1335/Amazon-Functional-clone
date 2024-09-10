AllFunctionCall();

function AllFunctionCall() {
    ImageBaner(number = 0);
    SlideShow(index = -1);
}

var number = 0;
function ImageBaner() {
    let ImageCont = document.getElementsByClassName("AddResponse");
    for (let i = 0; i < ImageCont.length; i++) {
        ImageCont[i].style.display = "none";
    }

    if (number >= ImageCont.length) {
        number = 0;
    }
    ImageCont[number].style.display = "block";
    number++;
    setTimeout(ImageBaner, 2000);
}

var index = -1;
function SlideShow(n = -1) {
    let AllSlise = document.getElementsByClassName("SideIMageBaner");
    for (let i = 0; i < AllSlise.length; i++) {
        AllSlise[i].style.display = "none";
    }
    if (n === -1) {
        index++;
        if (index >= AllSlise.length) {
            index = 0;
        }

        if (AllSlise.length > index) {
            AllSlise[index].style.display = "block";
        }
        setTimeout(SlideShow, 3000);

    }
    if (n === 1) {
        index--;
        if (index === -1) {
            index = AllSlise.length;
            index--;
        }
        AllSlise[index].style.display = "block";
    }
}
