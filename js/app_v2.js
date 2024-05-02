'use strict';

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location (name, min, max,average){

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
            const item = this.cookiesEachHour[i];
            const cell = document.createElement('td');
            cell.textContent = item;
            row.appendChild(cell);
        }
        sales.appendChild(row);
    }
}

seattle = new Location('Seattle', 23, 65, 6.3);
tokyo = new Location('Tokyo', 3, 24, 1.2);
dubai = new Location('Dubai', 11, 38, 3.7);
paris = new Location('Paris', 20, 38, 2.3);
lima = new Location('Lima', 2, 16, 4.6);

seattle.add();
