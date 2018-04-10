const Season = require('./season.js');
const TvShow = require('./tvShow.js');

const BingeWatchApp = function ( hoursInDay ) {
  this.hoursInDay = hoursInDay;
};

BingeWatchApp.prototype.getDaysNeeded = function (tvShow) {
var tvShowinHours = tvShow.fullDuration() / 60;
var hours = this.hoursInDay
return Math.ceil(tvShowinHours / hours);
};

module.exports = BingeWatchApp;
