/** Chunk was on web.js **/
/** chunk id: 578817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_jump_to_voice_settings",
  label: "Jump to Voice Settings",
  defaultConfig: {
    jumpToVoice: false
  },
  treatments: [{
    id: 1,
    label: "Jump to voice settings while in call",
    config: {
      jumpToVoice: true
    }
  }]
});

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.Y.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return o.getCurrentConfig({
    location: e
  }, {
    disable: n,
    autoTrackExposure: t
  })
}