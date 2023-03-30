showTime();

var gasLevel = 0;
var trac = 1;
var battery = 0;
var parking = 1;
var intMode = 0;



// Vehicle starts in park with traction control on

// When gas button light is lit, gas level is up; when button light is off, gas is at zero
function getGas() {
    if (gasLevel == 0) {
        gasLevel = 1;
        document.getElementById('bttn_gas').src="./assets/images/bttn_gas_1.png";
        document.getElementById('gas').src="./assets/images/gas1.png";
    } else {
        gasLevel = 0;
        document.getElementById('bttn_gas').src="./assets/images/bttn_gas_0.png";
        document.getElementById('gas').src="./assets/images/gas0.png";
    }
}

/* When traction button is lit, traction control is on; when button is not lit, traction control is off and dashboard indicator says it's off */
function traction() {
    if (trac == 0) {
        trac = 1;
        document.getElementById('bttn_trac').src="./assets/images/bttn_trac_1.png";
        document.getElementById('trac').src="./assets/images/trac1.png";
    } else {
        trac = 0;
        document.getElementById('bttn_trac').src="./assets/images/bttn_trac_0.png";
        document.getElementById('trac').src="./assets/images/trac0.png";

    }
}

// When battery button is lit, charge is up; when button is not lit, charge is off
function charge() {
    if (battery == 0) {
        battery = 1;
        document.getElementById('bttn_batt').src="./assets/images/bttn_batt_1.png";
        document.getElementById('batt').src="./assets/images/batt1.png";
    } else {
        battery = 0;
        document.getElementById('bttn_batt').src="./assets/images/bttn_batt_0.png";
        document.getElementById('batt').src="./assets/images/batt0.png";
    }
}

/* When brake button is lit, parking brake is on, red "P" dashboard indicator is lit, and right guage says "PARK"; when button is not lit, parking brake is off, dashboard indicator is off, right guage reads "READY" */
function brake() {
    if (parking == 0) {
        parking = 1;
        document.getElementById('bttn_park').src="./assets/images/bttn_park_1.png";
        document.getElementById('brake').src="./assets/images/p1.png";

    } else {
        parking = 0;
        document.getElementById('bttn_park').src="./assets/images/bttn_park_0.png";
        document.getElementById('brake').src="./assets/images/p0.png";
    }
}

function setMode(){
    var status = document.getElementById('mode');
    var shifter = document.getElementById('bttn_shifter');
    switch (intMode) {
        case 0:
            intMode = 1;
            shifter.style.top = '725px';
            status.innerText = 'ECO PRO';
            break;
        case 1:
            intMode = 2;
            shifter.style.top = '750px';
            status.innerText = 'COMFORT';
            break;
        case 2:
            intMode = 3;
            shifter.style.top = '775px';
            status.innerText = 'SPORT';
            break;
        default:
            intMode = 0;
            shifter.style.top = '700px';
            status.innerText = 'PARK';
            break;

    }


}








// function checkstatus() {''
//     var launchok = document.getElementById('msg');
//     var launchok = 1, msg = ""
//         case 1:
//             msg = "Disable parking break" 
//             var launchok = document.getElementById('msg');
//             parking == 1
//             launchok = 0


// }

 