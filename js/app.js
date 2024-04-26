'use stric';

const seatle = {
    locationName: 'Seatle',
    minCostumerPerHour: 23,
    maxCostumerPerHour: 65,
    averageCostumerPerHour:6.3,
    cookiesEachHour:[],
    
    estimate: function() {
        this.cookiesEachHour = this.estimateSales(this);
    }
}