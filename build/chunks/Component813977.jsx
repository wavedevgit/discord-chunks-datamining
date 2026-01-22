/** Chunk was on 95153 **/
/** chunk id: 813977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = !o.isPlatformEmbedded,
    n = (0, l.bG)([s.A], () => s.A.getMode()),
    d = (t, l) => (0, i.jsx)(r.iDA, {
      id: t,
      group: "input-modes",
      label: l,
      checked: n === t,
      action: () => a.A.setMode(t, true, true, {
        analyticsLocations: e
      })
    }, t);
  return [d(c.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)), d(c.TBI.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL))]
}