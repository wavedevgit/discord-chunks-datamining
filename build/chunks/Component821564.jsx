/** Chunk was on 84007 **/
/** chunk id: 821564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = !a.isPlatformEmbedded,
    n = (0, l.e7)([o.Z], () => o.Z.getMode()),
    u = (t, l) => (0, i.jsx)(s.k5B, {
      id: t,
      group: "input-modes",
      label: l,
      checked: n === t,
      action: () => d.Z.setMode(t, true, true, {
        analyticsLocations: e
      })
    }, t);
  return [u(c.pM4.VOICE_ACTIVITY, r.intl.string(r.t.cHCEOJ)), u(c.pM4.PUSH_TO_TALK, t ? r.intl.string(r.t["1AINrB"]) : r.intl.string(r.t.Q8gkVL))]
}