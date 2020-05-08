(function() {
  // When page is ready setup video format checking and video playing
  $(function() {
    var base, button, canPlay, codecs, dom, i, id, len, ref, row, td, test, type, types, value, video;
    // setup video types, their codecs and samples
    types = {
      mp4: {
        sample: 'ChickenWingBuffalo.mp4'
      },
      mp4: {
        sample: 'ChickenWingBaked.mp4'
      },
            mp4: {
        sample: 'ChickenWingHot.mp4'
      },
            mp4: {
        sample: 'ChickenWingTeriyaki.mp4'
      },
      mp4: {
        sample: 'ChickenWholeRoasted.mp4'
      },
      mp4: {
        sample: 'ChickenWholePoached.mp4'
      },
      mp4: {
        sample: 'ChickenWholeSousVide.mp4'
      },
      mp4: {
        sample: 'ChickenDrumstickBaked.mp4'
      },
      mp4: {
        sample: 'ChickenDrumstickBBQ.mp4'
      },
      mp4: {
        sample: 'ChickenDrumstickSpiced.mp4'
      },
      mp4: {
        sample: 'ChickenBreastBaked.mp4'
      },
      mp4: {
        sample: 'ChickenBreastCreamyGarlic.mp4'
      },
      mp4: {
        sample: 'ChickenBreastPanRoasted.mp4'
      },
      mp4: {
        sample: 'PorkShoulderBBQ.mp4'
      },
      mp4: {
        sample: 'PorkShoulderSlowRoasted.mp4'
      },
      mp4: {
        sample: 'PorkShoulderSmoked.mp4'
      },
      mp4: {
        sample: 'PorkBellyCrispy.mp4'
      },
      mp4: {
        sample: 'PorkBellySlowRoasted.mp4'
      },
      mp4: {
        sample: 'PorkBellyKakuni.mp4'
      },
      mp4: {
        sample: 'PorkChopHoneyGarlic.mp4'
      },
      mp4: {
        sample: 'PorkChopOvenBaked.mp4'
      },
      mp4: {
        sample: 'PorkChopTonkatsu.mp4'
      },
      mp4: {
        sample: 'BeefSteakGrilled.mp4'
      },
      mp4: {
        sample: 'BeefSteakButterBaisted.mp4'
      },
      mp4: {
        sample: 'BeefSteakChickenFried.mp4'
      },
      mp4: {
        sample: 'BeefSteakSaltAndPepper.mp4'
      },
      mp4: {
        sample: 'BeefSteakTeriyaki.mp4'
      },
      mp4: {
        sample: 'BeefStewCutBeefStew.mp4'
      },
      mp4: {
        sample: 'BeefStewCutKabobs.mp4'
      },






    };
    // get page elements
    dom = {
      sources: $('source')
    };
    ref = ['check_video', 'video_support', 'links', 'video'];
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      dom[id] = $(`#${id}`);
    }
    // initialize variables
    [video, canPlay] = [$('video')[0], 'None'];
    // display supported video formats when asked for
    dom.check_video.click(function() {
      return dom.video_support.text(`Browser supports: ${canPlay}`);
    });
// add elements for video types; find out which types are supported
    for (type in types) {
      value = types[type];
      row = $('<tr>').appendTo(links);
      // labeled field for URLs
      $('<td>').text(`Enter Pathway (Inner -> Outer) `).appendTo(row);
      td = $('<td>').appendTo(row);
      $('<input>').attr({
        type: 'text',
        id: `${type}_url`
      }).val(value.sample).appendTo(td);
      // button that loads video from URL
      td = $('<td>').appendTo(row);
      button = $('<button>').attr({
        id: `load_${type}`
      }).text('Load').appendTo(td);
      // when button is clicked, loads the video from the URL in the corresponding field
      (function(type_) { // Trick: wrap click into a function that remembers 'type'
        return button.click(() => {
          dom.sources.attr({
            type: `video/${type_}`,
            src: $(`#${type_}_url`).val()
          });
          if (video.load != null) {
            return video.load();
          } else {
            return alert(`Can't play '${url}'`);
          }
        });
      })(type);
      // if the format is supported add it to the list of supported formats
      codecs = value.codecs != null ? value.codecs.join() : '';
      test = `video/${type}; codecs=\"${codecs}\"`;
      if (typeof (base = dom.video[0]).canPlayType === "function" ? base.canPlayType(test) : void 0) {
        canPlay = canPlay === 'None' ? type : `${canPlay}, ${type}`;
      }
    }
    return null;
  });

}).call(this);
