/** Chunk was on web.js **/
/** chunk id: 422797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk427164.le)({
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

function a(e) {
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}