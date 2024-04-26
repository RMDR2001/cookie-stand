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

    const tokyo = {
        locationName: 'Tokyo',
        minCustomerPerHour: 3,
        maxCustomerPerHour: 24,
        averageCustomerPerHour: 1.2,
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

    const dubai = {
        locationName: 'Dubai',
        minCustomerPerHour: 11,
        maxCustomerPerHour: 38,
        averageCustomerPerHour:3.7,
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

    const paris = {
        locationName: 'Paris',
        minCustomerPerHour: 20,
        maxCustomerPerHour: 38,
        averageCustomerPerHour:2.3,
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

    const lima = {
        locationName: 'Lima',
        minCustomerPerHour: 2,
        maxCustomerPerHour: 16,
        averageCustomerPerHour:4.6,
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
    tokyo.estimateSales();
    dubai.estimateSales();
    paris.estimateSales();
    lima.estimateSales();

    const salesSeattle = document.getElementById('salesSeattle');
    
    for (let i = 0; i < seattle.cookiesEachHour.length; i++) {
        const item = seattle.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesSeattle.appendChild(listItem);
    }
    const totalCookiesSeattle = document.createElement('li');
    totalCookiesSeattle.textContent = `Total: ${seattle.totalCookies} galletas`;
    salesSeattle.appendChild(totalCookiesSeattle);

    const salesTokyo = document.getElementById('salesTokyo');
    
    for (let i = 0; i < tokyo.cookiesEachHour.length; i++) {
        const item = tokyo.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesTokyo.appendChild(listItem);
    }
    const totalCookiesTokyo = document.createElement('li');
    totalCookiesTokyo.textContent = `Total: ${tokyo.totalCookies} galleras`;
    salesTokyo.appendChild(totalCookiesTokyo);

    const salesDubai = document.getElementById('salesDubai');
    
    for (let i = 0; i < dubai.cookiesEachHour.length; i++) {
        const item = dubai.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesDubai.appendChild(listItem);
    }
    const totalCookiesDubai = document.createElement('li');
    totalCookiesDubai.textContent = `Total: ${dubai.totalCookies} galletas`;
    salesDubai.appendChild(totalCookiesDubai);

    const salesParis = document.getElementById('salesParis');
    
    for (let i = 0; i < dubai.cookiesEachHour.length; i++) {
        const item = dubai.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesParis.appendChild(listItem);
    }
    const totalCookiesParis = document.createElement('li');
    totalCookiesParis.textContent = `Total: ${paris.totalCookies} galletas`;
    salesParis.appendChild(totalCookiesParis);
    
    const salesLima = document.getElementById('salesLima');
    
    for (let i = 0; i < lima.cookiesEachHour.length; i++) {
        const item = lima.cookiesEachHour[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        salesLima.appendChild(listItem);
    }
    const totalCookiesLima = document.createElement('li');
    totalCookiesLima.textContent = `Total: ${lima.totalCookies} galletas`;
    salesLima.appendChild(totalCookiesLima);

});
