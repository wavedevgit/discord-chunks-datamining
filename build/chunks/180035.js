/** Chunk was on web.js **/
/** chunk id: 180035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => l
}), require("./539854.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk591146 = require("./591146.js"),
  Chunk377089 = require("./377089.js");

function l(e, t) {
  let {
    theme: n,
    density: l
  } = (0, i.TCT)(), c = (0, r.e7)([a.Z], () => a.Z.saturation), u = (0, r.e7)([a.Z], () => a.Z.isHighContrastModeEnabled), d = (0, o.Ml)("useToken"), f = (0, o.CL)("useToken"), p = (0, o.VM)("useToken"), _ = (0, s.U)("useToken"), h = [];
  return d && h.push("refresh-fast-follow-avatars"), f && h.push("refresh-fast-follow-guild-bg"), p && h.push("refresh-fast-follow-distinct-borders"), _ && h.push("mana-text-inputs"), e.resolve({
    theme: null != t ? t : n,
    saturation: c,
    enabledExperiments: h,
    density: l,
    highContrastModeEnabled: u
  })
}