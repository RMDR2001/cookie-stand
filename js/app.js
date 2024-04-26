'use stric';

function getRandomInt(min, max){
    return Math.random() * (max - min) + min;
}

const seatle = {
    locationName: 'Seatle',
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    averageCustomerPerHour:6.3,
    cookiesEachHour:[],

    estimateSales: function() {
        const cookiesEachHour = [];
        for (let i = 6; i <=19; i++){
            const customer = getRandomInt(this.minCustomerPerHour, this.maxCustomerPerHour);
            const cookiesSold = Math.round(customer * this.averageCustomerPerHour);
            cookiesEachHour.push(`${i < 12 ? i + 'am' : (i-12) + 'pm'}: ${cookiesSold} galletas`)
        }
        return cookiesEachHour;
    },
    estimate: function() {
        this.cookiesEachHour = this.estimateSales(this);
    }
}

seatle.estimate();

const salesSeatle = document.getElementById('salesSeatle');
const salesDataSeatle = seatle.cookiesEachHour
