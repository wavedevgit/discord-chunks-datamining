/** Chunk was on web.js **/
/** chunk id: 956358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk846573 = require("./846573.js");
let o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_desktop_skipped_updates",
    label: "Optional desktop updates at startup",
    defaultConfig: {
      allowOptionalDesktopUpdates: false
    },
    treatments: [{
      id: 1,
      label: "Allow optional desktop updates",
      config: {
        allowOptionalDesktopUpdates: true
      }
    }]
  }),
  s = (0, Chunk427164.le)({
    name: "2025-07-desktop-skipped-updates",
    kind: "user",
    defaultConfig: {
      allowOptionalDesktopUpdates: false
    },
    variations: {
      1: {
        allowOptionalDesktopUpdates: true
      }
    }
  });

function l(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = a.X.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n || s.getConfig({
    location: t
  }), o.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}