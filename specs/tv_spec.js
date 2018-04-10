const assert = require('assert');
const TvShow = require('../tvShow.js');
const Season = require('../season.js');

describe('TvShow', function () {

  let tvShow;
  let seasons;
  let season1, season2, season3;

  beforeEach( function () {
    tvShow = new TvShow('Ru Pauls Drag Race')
    season1 = new Season(1, 720);
    season2 = new Season(2, 735);
    season3 = new Season(3, 742);
  });

  it('should have a name', function () {
    const result = tvShow.name;
    assert.strictEqual(result, 'Ru Pauls Drag Race');
  });

  it('should have no seasons', function () {
    const result = tvShow.seasonCount();
    assert.strictEqual(result, 0);
  });

  it('should add a season', function () {
    tvShow.addSeason(season1);
    const result = tvShow.seasonCount();
    assert.strictEqual(result, 1);
  });

  it('should get a season duration', function () {
    tvShow.addSeason(season1);
    const result = tvShow.fullDuration();
    assert.strictEqual(result, 720);
  })

  it('should get duration of all seasons', function () {
    tvShow.addSeason(season1);
    tvShow.addSeason(season2);
    tvShow.addSeason(season3);
    const result = tvShow.fullDuration();
    assert.strictEqual(result, 2197);
  })
});
