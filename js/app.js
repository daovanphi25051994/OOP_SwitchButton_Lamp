function addClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(myClass);
    }
}
function removeClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
}

function SwitchButton() {
    this.status = false;
    this.switchOn = function () {
        this.status = true;
    }
    this.switchOff = function () {
        this.status = false;
    }
    this.connectToLamp = function (lamp) {
        lamp.status = this.status;
    }
}
function ElectricLamp() {
    this.status = false;
    this.activate = function () {
      if (this.status){
        addClass(".electric-lamp", "yellow");
          console.log("light");
      }else {
          removeClass(".electric-lamp", "yellow")
          console.log("not light")
      }
    }
}

let switchButton = new SwitchButton();
let lamp = new ElectricLamp();

function changeStatusLamp() {
    if (switchButton.status){
        switchButton.switchOff();
        switchButton.connectToLamp(lamp);
        lamp.activate();
    }else {
        switchButton.switchOn();
        switchButton.connectToLamp(lamp);
        lamp.activate();
    }
}