
/**
 * WPCOM module
 */

var WPCOM = require('../');
var Site = require('../lib/site');
var Media = require('../lib/media');
var util = require('./util');
var assert = require('assert');

/**
 * Testing data
 */

var test = require('./data');

/**
 * WPCOM instance
 */

describe('WPCOM#Site#Media', function(){

  // Create a new_media before to start the tests

  var new_media;
  before(function(done){
    util.addMedia(function(err, media) {
      if (err) throw err;

      new_media = media;
      done();
    });
  });

  describe('sync', function(){

    it('should create an `Media` instance from `Site`', function(){
      var media = WPCOM().site().media();
      assert.ok(media instanceof Media);
    });

  });

  describe('async', function(){

    describe('media.get()', function(){

      it('should get added media', function(done){
        var site = util.private_site();
        var media = site.media(test.media_id);

        media.get(function(err, info){
          if (err) throw err;

          assert.equal(3, info.id);
          done();
        });
      });

    });

  });

});