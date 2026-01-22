/** Chunk was on web.js **/
/** chunk id: 602853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o
}), require("./321073.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk534409 = require("./534409.js");

function o(e, t) {
  let {
    theme: n,
    density: o
  } = (0, i.wRf)(), l = (0, r.bG)([a.A], () => a.A.saturation), c = (0, r.bG)([a.A], () => a.A.isHighContrastModeEnabled), u = (0, s.qK)("useToken"), d = (0, s.k5)("useToken"), f = (0, s.lV)("useToken"), p = [];
  return u && p.push("refresh-fast-follow-avatars"), d && p.push("refresh-fast-follow-guild-bg"), f && p.push("refresh-fast-follow-distinct-borders"), e.resolve({
    theme: null != t ? t : n,
    saturation: l,
    enabledExperiments: p,
    density: o,
    highContrastModeEnabled: c
  })
}