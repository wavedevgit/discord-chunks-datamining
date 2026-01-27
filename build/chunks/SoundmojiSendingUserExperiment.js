/** Chunk was on web.js **/
/** chunk id: 704591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AA: () => o,
  Ym: () => l,
  ks: () => a,
  tj: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  id: "2024-11_soundmoji_sending",
  label: "Send soundmojis",
  kind: "user",
  defaultConfig: {
    enabled: false,
    showSoundmojiInEmojiPicker: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled w/o emoji section",
    config: {
      enabled: true,
      showSoundmojiInEmojiPicker: false
    }
  }, {
    id: 2,
    label: "Enabled w/ emoji section",
    config: {
      enabled: true,
      showSoundmojiInEmojiPicker: true
    }
  }]
});

function o(e) {
  let {
    location: t
  } = e;
  return a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function l(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).showSoundmojiInEmojiPicker
}