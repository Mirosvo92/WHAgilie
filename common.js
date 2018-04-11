var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// DigitalWatch class
var DigitalWatch = /** @class */ (function () {
    function DigitalWatch() {
        this.hour = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
    }
    DigitalWatch.prototype.buildWatch = function () {
        buildDigitalWatch.call(this);
    };
    return DigitalWatch;
}());
// AnalogWatch class
var AnalogWatch = /** @class */ (function (_super) {
    __extends(AnalogWatch, _super);
    function AnalogWatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalogWatch.prototype.buildWatch = function () {
        buildAnalogWatch.call(this);
    };
    return AnalogWatch;
}(DigitalWatch));
// HELPERS FUNCTION
// function for build DigitalWatch
function buildDigitalWatch() {
    var _this = this;
    var hourElement = document.querySelectorAll('.js-digital-hour');
    var minutesElement = document.querySelectorAll('.js-digital-minutes');
    var secondsElement = document.querySelectorAll('.js-digital-seconds');
    hourElement[0].innerHTML = this.hour;
    minutesElement[0].innerHTML = this.minutes;
    secondsElement[0].innerHTML = this.seconds;
    setInterval(function () {
        initNewTime.call(_this);
        hourElement[0].innerHTML = _this.hour;
        minutesElement[0].innerHTML = _this.minutes;
        secondsElement[0].innerHTML = _this.seconds;
    }, 600);
}
// function for set time
function initNewTime() {
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
}
// function for build AnalogWatch
function buildAnalogWatch() {
    var hourElement = document.querySelectorAll('.js-analog-hour');
    var minutesElement = document.querySelectorAll('.js-analog-minutes');
    var secondsElement = document.querySelectorAll('.js-analog-seconds');
    //hourElement
    hourElement[0].style.transform = 'rotateZ(' + (this.hour * 30) + (this.minutes / 2) + 'deg)';
    hourElement[0].style.webkitTransform = 'rotateZ(' + (this.hour * 30) + (this.minutes / 2) + 'deg)';
    // minutesElement
    minutesElement[0].style.transform = 'rotateZ(' + (this.minutes * 6) + 'deg)';
    minutesElement[0].style.webkitTransform = 'rotateZ(' + (this.minutes * 6) + 'deg)';
    // secondsElement
    secondsElement[0].style.transform = 'rotateZ(' + (this.seconds * 6) + 'deg)';
    secondsElement[0].style.webkitTransform = 'rotateZ(' + (this.seconds * 6) + 'deg)';
}
var digitalWatch = new DigitalWatch();
digitalWatch.buildWatch();
var analogWatch = new AnalogWatch();
analogWatch.buildWatch();
