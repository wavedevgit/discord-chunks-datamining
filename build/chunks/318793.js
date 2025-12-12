/** Chunk was on web.js **/
/** chunk id: 318793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a
});
var Chunk722733 = require("./722733.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk722733.Z)({
  kind: "user",
  name: "2025-10-surface-unwatched-streams",
  defaultConfig: {
    showInCallGrid: false
  },
  variations: {
    1: {
      showInCallGrid: true
    }
  }
});

function a(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}