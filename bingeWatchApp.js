const Season = require('./season.js');
const TvShow = require('./tvShow.js');

const BingeWatchApp = function ( hoursInDay ) {
  this.hoursInDay = hoursInDay;
};

BingeWatchApp.prototype.getDaysNeeded = function (tvShow) {
var hours = this.hoursInDay
return tvShow / hours;
};

module.exports = BingeWatchApp;
