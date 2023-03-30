
function tryLaunch() {
    var launchOk = 1
    var msg ="";
    var objectMessage = document.getElementById('msg');
    
    if (parking == 1) {
        launchOk = 0;
        msg = "Parking break engaged";
    }

    if (battery == 0) {
        launchOk = 0;
        msg ="Battery not charged.";
    }

    if (trac == 1) {
        launchOk = 0;
        msg ="Disable traction control.";
    }

    if (gasLevel == 0) {
        launchOk = 0;
        msg ="Need gas.";
    }

    if (intMode < 3) {
        launchOk = 0;
        msg = "Must be in Sport mode";
    }


// Launch OK (launch sound)
    if (launchOk == 1) {
        objectMessage.innerText = ""
        launch.src = "./assets/images/lca1.png";
        new Audio("./assets/media/launch.mp3").play();
    }

// Not ready for launch (sputter sound)
    else {
        objectMessage.innerText = msg
        new Audio("./assets/media/sputter.mp3").play();
    }
}
