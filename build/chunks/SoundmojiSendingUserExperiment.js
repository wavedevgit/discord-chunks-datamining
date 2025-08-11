/** Chunk was on web.js **/
/** chunk id: 125900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J2: () => o,
  V2: () => s,
  dX: () => a,
  g2: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2024-11_soundmoji_sending",
  label: "Send soundmojis",
  kind: "user",
  defaultConfig: {
    enabled: false,
    showSoundmojiInEmojiPicker: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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

function a(e) {
  let {
    location: t
  } = e;
  return o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return o.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function l(e) {
  let {
    location: t
  } = e;
  return o.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).showSoundmojiInEmojiPicker
}