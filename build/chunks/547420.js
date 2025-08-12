/** Chunk was on 20501 **/
/** chunk id: 547420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MY: () => c,
  RC: () => o,
  UF: () => l,
  ZP: () => d
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return s.yqN.ZOOM_SCALES[Math.max(0, Math.min(s.yqN.ZOOM_SCALES.indexOf(r.Z.zoom) + e, s.yqN.ZOOM_SCALES.length - 1))]
}
let l = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(a(1)), false)
  },
  o = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(a(false)), false)
  },
  c = {
    binds: ["mod+0"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(Chunk981631.yqN.ZOOM_DEFAULT), false)
  },
  d = 12633 == require.j ? {
    ZOOM_IN: l,
    ZOOM_OUT: o,
    ZOOM_RESET: c
  } : null