/** Chunk was on web.js **/
/** chunk id: 180035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s
}), require("./539854.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk591146 = require("./591146.js");

function s(e, t) {
  let {
    theme: n,
    density: s
  } = (0, i.TCT)(), l = (0, r.e7)([a.Z], () => a.Z.saturation), c = (0, r.e7)([a.Z], () => a.Z.isHighContrastModeEnabled), u = (0, o.Ml)("useToken"), d = (0, o.CL)("useToken"), f = (0, o.VM)("useToken"), p = [];
  return u && p.push("refresh-fast-follow-avatars"), d && p.push("refresh-fast-follow-guild-bg"), f && p.push("refresh-fast-follow-distinct-borders"), e.resolve({
    theme: null != t ? t : n,
    saturation: l,
    enabledExperiments: p,
    density: s,
    highContrastModeEnabled: c
  })
}