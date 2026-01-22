/** Chunk was on web.js **/
/** chunk id: 927170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk945810.mj)({
  kind: "user",
  name: "2025-10-krisp-at-end",
  defaultConfig: {
    noiseCancellationAfterProcessing: false,
    vadAfterWebrtc: false
  },
  variations: {
    1: {
      noiseCancellationAfterProcessing: true,
      vadAfterWebrtc: false
    },
    2: {
      noiseCancellationAfterProcessing: false,
      vadAfterWebrtc: true
    },
    3: {
      noiseCancellationAfterProcessing: true,
      vadAfterWebrtc: true
    }
  }
});

function s(e) {
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.p.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}