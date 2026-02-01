/** Chunk was on 9207 **/
/** chunk id: 406975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => d,
  O$: () => c,
  Ur: () => a,
  hU: () => o
});
var Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return l.hH7.ZOOM_SCALES[Math.max(0, Math.min(l.hH7.ZOOM_SCALES.indexOf(i.A.zoom) + e, l.hH7.ZOOM_SCALES.length - 1))]
}
let a = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(s(1)), false)
  },
  o = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(s(false)), false)
  },
  c = {
    binds: ["mod+0"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Qp)(l.hH7.ZOOM_DEFAULT), false)
  },
  d = 21552 == require.j ? {
    ZOOM_IN: a,
    ZOOM_OUT: o,
    ZOOM_RESET: c
  } : null