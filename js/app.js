document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    const attencionHours = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function Location(name, min, max, avg) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.average = avg;
        this.cookiesEachHour = [];
        this.totalCookies = 0;
    }

    Location.prototype.estimate = function () {
        const cookiesEachHour = [];
        for (let i = 0; i < attencionHours.length; i++) {
            const numCustomers = getRandomInt(this.min, this.max);
            const cookiesSold = Math.round(numCustomers * this.average);
            cookiesEachHour.push(cookiesSold);
            this.totalCookies += cookiesSold;
        }
        this.cookiesEachHour = cookiesEachHour;
    }

    Location.prototype.addTable = function () {
        this.estimate();
        const sales = document.getElementById('sales');
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = this.name;
        row.appendChild(nameCell);
        for (let i = 0; i < this.cookiesEachHour.length; i++) {
            const cell = document.createElement('td');
            cell.textContent = this.cookiesEachHour[i];
            row.appendChild(cell);
        }
        const totalCell = document.createElement('td');
        totalCell.textContent = this.totalCookies;
        row.appendChild(totalCell);
        sales.appendChild(row);
    }

    let seattle = new Location('Seattle', 23, 65, 6.3);
    let tokyo = new Location('Tokyo', 3, 24, 1.2);
    let dubai = new Location('Dubai', 11, 38, 3.7);
    let paris = new Location('Paris', 20, 38, 2.3);
    let lima = new Location('Lima', 2, 16, 4.6);

    let locations = [seattle, tokyo, dubai, paris, lima];

    function calculateTotalCookiesPerHour() {
        let totalCookiesPerHour = new Array(14).fill(0);
        let totalDailyCookies = 0;
        for (let i = 0; i < locations.length; i++) {
            for (let j = 0; j < locations[i].cookiesEachHour.length; j++) {
                totalCookiesPerHour[j] += locations[i].cookiesEachHour[j];
                totalDailyCookies += locations[i].cookiesEachHour[j];
            }
        }
        const tfoot = document.getElementById('resumen');
        const row = document.createElement('tr');
        const nameCell = document.createElement('th');
        nameCell.textContent = "Total por hora";
        row.appendChild(nameCell);
        for (let i = 0; i < totalCookiesPerHour.length; i++) {
            const cell = document.createElement('td');
            cell.textContent = totalCookiesPerHour[i];
            row.appendChild(cell);
        }
        tfoot.appendChild(row);
        const totalDailyCell = document.createElement('td');
        totalDailyCell.textContent = totalDailyCookies;
        row.appendChild(totalDailyCell);
    }

    seattle.addTable();
    tokyo.addTable();
    dubai.addTable();
    paris.addTable();
    lima.addTable();

    calculateTotalCookiesPerHour();

    document.getElementById('newLocalForm').addEventListener('submit', sendForm);

    function sendForm(event) {
        event.preventDefault();
        
        const name = document.getElementById('locationName').value;
        const min = parseInt(document.getElementById('minCustomerPerHour').value);
        const max = parseInt(document.getElementById('maxCustomerPerHour').value);
        const avg = parseFloat(document.getElementById('AverageCustomerPerHour').value);
        
        let newLocation = new Location(name, min, max, avg);
        locations.push(newLocation);
        newLocation.addTable();
        
        calculateTotalCookiesPerHour();
        
        document.getElementById('newLocalForm').reset();
    }
});
