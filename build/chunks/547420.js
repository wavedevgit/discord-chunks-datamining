/** Chunk was on web.js **/
/** chunk id: 547420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MY: () => c,
  RC: () => l,
  UF: () => s,
  ZP: () => u
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return a.yqN.ZOOM_SCALES[Math.max(0, Math.min(a.yqN.ZOOM_SCALES.indexOf(i.Z.zoom) + e, a.yqN.ZOOM_SCALES.length - 1))]
}
let s = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(o(1)), false)
  },
  l = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(o(false)), false)
  },
  c = {
    binds: ["mod+0"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk857595.cq)(Chunk981631.yqN.ZOOM_DEFAULT), false)
  },
  u = {
    ZOOM_IN: s,
    ZOOM_OUT: l,
    ZOOM_RESET: c
  }