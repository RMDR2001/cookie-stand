'use strict';

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location (name, min, max, average){

    this.locationName= name;
    this.minCustomerPerHour= min;
    this.maxCustomerPerHour= max;
    this.averageCustomerPerHour= average;
    this.cookiesEachHour= [];
    this.totalCookies= 0;

    this.estimate = function() {
        const cookiesEachHour = [];
        for (let i = 6; i <= 19; i++){
            const customers = getRandomInt(this.minCustomerPerHour, this.maxCustomerPerHour);
            const cookiesSold = Math.round(customers*this.averageCustomerPerHour);
            cookiesEachHour.push(cookiesSold);
            this.totalCookies += cookiesSold;
        }
        this.cookiesEachHour = cookiesEachHour;
    }

    this.add = function() {
        this.estimate();
        const sales = document.getElementById('sales');
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = this.locationName;
        row.appendChild(nameCell);
        for (let i=0; i < this.cookiesEachHour.length; i++) {            
            const cell = document.createElement('td');
            cell.textContent = this.cookiesEachHour[i];
            row.appendChild(cell);
        }
        const totalCell = document.createElement('td');
        totalCell.textContent = this.totalCookies;
        row.appendChild(totalCell);
        sales.appendChild(row);
    }
}

let locations = [];

let seattle = new Location('Seattle', 23, 65, 6.3);
locations.push(seattle);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
locations.push(tokyo);
let dubai = new Location('Dubai', 11, 38, 3.7);
locations.push(dubai);
let paris = new Location('Paris', 20, 38, 2.3);
locations.push(paris);
let lima = new Location('Lima', 2, 16, 4.6);
locations.push(lima);

function totalCookiesPerHour(){
    let totalCookiesPerHour = new Array(14).fill(0);
    let totalDailyCookies = 0;
    for (let i=0; i<locations.length; i++) {
        for (let j=0; j<locations[i].cookiesEachHour.length; j++) {
            totalCookiesPerHour[j] += locations[i].cookiesEachHour[j];
            totalDailyCookies += locations[i].cookiesEachHour[j];
        }
    }

    const tfoot = document.getElementById('resumen');
    const row = document.createElement('tr');
    const nameCell = document.createElement('th');
    nameCell.textContent = "Total por hora";
    row.appendChild(nameCell);
    for (let i = 0; i <totalCookiesPerHour.length; i++) {
        const cell = document.createElement('td');
        cell.textContent = totalCookiesPerHour[i];
        row.appendChild(cell);
    }
    tfoot.appendChild(row);

    const totalDailyCell = document.createElement('td');
    totalDailyCell.textContent = totalDailyCookies;
    row.appendChild(totalDailyCell);
}




document.addEventListener("DOMContentLoaded", function() {
    seattle.add();
    tokyo.add();
    dubai.add();
    paris.add();
    lima.add();
    totalCookiesPerHour();
});