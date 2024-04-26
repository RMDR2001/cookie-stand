'use stric';

document.addEventListener('DOMContentLoaded', function() {
    
    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const seattle = {
        locationName: 'Seattle',
        minCustomerPerHour: 23,
        maxCustomerPerHour: 65,
        averageCustomerPerHour:6.3,
        cookiesEachHour:[],
        totalCookies: 0,

        estimateSales: function() {
            const cookiesEachHour = [];
            for (let i = 6; i <=19; i++){
                const customers = getRandomInt(this.minCustomerPerHour, this.maxCustomerPerHour);
                const cookiesSold = Math.round(customers * this.averageCustomerPerHour);
                cookiesEachHour.push(`${i <= 12 ? i + 'am' : (i-12) + 'pm'}: ${cookiesSold} galletas`)
                this.totalCookies += cookiesSold;
            }
            this.cookiesEachHour = cookiesEachHour;
        }
    }

    seattle.estimateSales();

    const salesSeattle = document.getElementById('salesSeattle');

    for (let i = 0; i < seattle.cookiesEachHour.length; i++) {
        const item = seattle.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesSeattle.appendChild(listItem);
    }
});
