/** Chunk was on web.js **/
/** chunk id: 821564, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = !l.isPlatformEmbedded,
    n = (0, i.e7)([s.Z], () => s.Z.getMode()),
    d = (t, i) => (0, r.jsx)(a.k5B, {
      id: t,
      group: "input-modes",
      label: i,
      checked: n === t,
      action: () => o.Z.setMode(t, true, true, {
        analyticsLocations: e
      })
    }, t);
  return [d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOD)), d(c.pM4.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrK"]) : u.intl.string(u.t.Q8gkVF))]
}