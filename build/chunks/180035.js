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
  } = (0, i.TCT)(), c = (0, r.e7)([o.Z], () => o.Z.saturation), u = (0, r.e7)([o.Z], () => o.Z.isHighContrastModeEnabled), d = (0, a.Ml)("useToken"), f = (0, a.CL)("useToken"), p = (0, a.VM)("useToken"), _ = (0, s.U)("useToken"), m = [];
  return d && m.push("refresh-fast-follow-avatars"), f && m.push("refresh-fast-follow-guild-bg"), p && m.push("refresh-fast-follow-distinct-borders"), _ && m.push("mana-text-inputs"), e.resolve({
    theme: null != t ? t : n,
    saturation: c,
    enabledExperiments: m,
    density: l,
    highContrastModeEnabled: u
  })
}