interface Clock {
    hour: number;
    minutes: number;
    seconds: number;
    buildWatch(): void;
}
// DigitalWatch class
class DigitalWatch implements Clock {
    hour = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();

    buildWatch(): void {
        buildDigitalWatch.call(this);
    }
}
// AnalogWatch class
class AnalogWatch extends DigitalWatch {
    buildWatch(): void {
        buildAnalogWatch.call(this);
    }
}
// HELPERS FUNCTION
// function for build DigitalWatch
function buildDigitalWatch(): void{
    let hourElement = document.querySelectorAll('.js-digital-hour');
    let minutesElement = document.querySelectorAll('.js-digital-minutes');
    let secondsElement = document.querySelectorAll('.js-digital-seconds');

    (<HTMLElement>hourElement[0]).innerHTML = this.hour;
    (<HTMLElement>minutesElement[0]).innerHTML = this.minutes;
    (<HTMLElement>secondsElement[0]).innerHTML = this.seconds;

    setInterval(() => {
        initNewTime.call(this);
        hourElement[0].innerHTML = this.hour;
        minutesElement[0].innerHTML = this.minutes;
        secondsElement[0].innerHTML = this.seconds;
    }, 600);
}
// function for set time
function initNewTime(): void{
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
}
// function for build AnalogWatch
function buildAnalogWatch(): void {
    let hourElement = document.querySelectorAll('.js-analog-hour');
    let minutesElement = document.querySelectorAll('.js-analog-minutes');
    let secondsElement = document.querySelectorAll('.js-analog-seconds');
    //hourElement
    (<HTMLElement>hourElement[0]).style.transform = 'rotateZ('+ ((this.hour * 30) + (this.minutes / 2)) +'deg)';
    (<HTMLElement>hourElement[0]).style.webkitTransform  = 'rotateZ('+ ((this.hour * 30) + (this.minutes / 2)) + 'deg)';
    // minutesElement
    (<HTMLElement>minutesElement[0]).style.transform = 'rotateZ('+ (this.minutes * 6) +'deg)';
    (<HTMLElement>minutesElement[0]).style.webkitTransform  = 'rotateZ('+ (this.minutes * 6) +'deg)';
    // secondsElement
    (<HTMLElement>secondsElement[0]).style.transform = 'rotateZ('+ (this.seconds * 6) +'deg)';
    (<HTMLElement>secondsElement[0]).style.webkitTransform  = 'rotateZ('+ (this.seconds * 6) +'deg)';
}

let digitalWatch: Clock = new DigitalWatch();
digitalWatch.buildWatch();

let analogWatch: Clock = new AnalogWatch();
analogWatch.buildWatch();