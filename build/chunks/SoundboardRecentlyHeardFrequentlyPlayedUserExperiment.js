/** Chunk was on web.js **/
/** chunk id: 477851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => i,
  d: () => a
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2023-11_soundboard_recently_heard_frequently_played",
  label: "Soundboard Recently Heard & Frequently Played",
  defaultConfig: {
    canSeeRecentlyHeard: false,
    canSeeFrequentlyPlayed: false
  },
  treatments: [{
    id: 1,
    label: "User can see Recently Heard soundboard section",
    config: {
      canSeeRecentlyHeard: true,
      canSeeFrequentlyPlayed: false
    }
  }, {
    id: 2,
    label: "User can see Frequently Played soundboard section",
    config: {
      canSeeRecentlyHeard: false,
      canSeeFrequentlyPlayed: true
    }
  }, {
    id: 3,
    label: "User can see Frequently Played & Recently Heard soundboard sections",
    config: {
      canSeeRecentlyHeard: true,
      canSeeFrequentlyPlayed: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  })
}

function a(e) {
  let {
    autoTrackExposure: t,
    location: n
  } = e;
  return r.useExperiment({
    location: n
  }, {
    autoTrackExposure: t
  })
}