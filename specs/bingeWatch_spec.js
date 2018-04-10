const assert = require('assert');
const BingeWatchApp = require('../bingeWatchApp.js');
const TvShow = require('../tvShow.js');
const Season = require('../season.js');

describe('BingeWatchApp', function() {

  let bingeWatchApp;
  let tvShow;
  let seasons;
  let season1, season2, season3;
  let hoursInDay;


  beforeEach( function () {
    bingeWatchApp = new BingeWatchApp(5);
    tvShow = new TvShow('Ru Pauls Drag Race')

  });

  it('should get hours user can spend watching per day', function () {
    const result = bingeWatchApp.hoursInDay;
    assert.strictEqual(result, 5);
  });

  it('should work out number of days needed to binge watch tv show', function () {
    tvShow.addSeason(season1);
    tvShow.addSeason(season2);
    tvShow.addSeason(season3);
    tvShow.fullDuration();
    const result = bingeWatchApp.getDaysNeeded(tvShow, bingeWatchApp);
    assert.strictEqual(result, 439.4)
  });
});
