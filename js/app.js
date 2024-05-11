'use strict';

const attencionHours=["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"]

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

function Location(name, min, max, avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.average = avg;
    this.cookiesEachHour = [];
    this.totalCookies = 0;
}

Location.prototype.estimate = function(){
    this.cookiesPerHour = estimateSales();
}
