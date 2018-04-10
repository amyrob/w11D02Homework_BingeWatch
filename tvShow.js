const Season = require('./season.js');

const TvShow = function ( name, seasons ) {
  this.name = name;
  this.seasons = [];
};


TvShow.prototype.seasonCount = function () {
  return this.seasons.length;
};

TvShow.prototype.addSeason = function (season) {
  this.seasons.push(season)
};

TvShow.prototype.fullDuration = function () {
  let duration = 0;
  for(var i = 0; i < this.seasons.length; i ++) {
    for (const season of this.seasons){
      duration += season.duration;
    }
    return duration;
  };
};

module.exports = TvShow;
