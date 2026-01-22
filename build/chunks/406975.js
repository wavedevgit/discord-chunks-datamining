/** Chunk was on web.js **/
/** chunk id: 406975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => u,
  O$: () => c,
  Ur: () => o,
  hU: () => l
});
var Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return a.hH7.ZOOM_SCALES[Math.max(0, Math.min(a.hH7.ZOOM_SCALES.indexOf(i.A.zoom) + e, a.hH7.ZOOM_SCALES.length - 1))]
}
let o = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(s(1)), false)
  },
  l = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(s(false)), false)
  },
  c = {
    binds: ["mod+0"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(a.hH7.ZOOM_DEFAULT), false)
  },
  u = {
    ZOOM_IN: o,
    ZOOM_OUT: l,
    ZOOM_RESET: c
  }