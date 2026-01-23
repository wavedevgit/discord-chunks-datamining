/** Chunk was on 95153 **/
/** chunk id: 813977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
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

function u(e) {
  let t = !c.isPlatformEmbedded,
    n = (0, r.bG)([o.A], () => o.A.getMode()),
    u = (t, r) => (0, i.jsx)(l.iDA, {
      id: t,
      group: "input-modes",
      label: r,
      checked: n === t,
      action: () => a.A.setMode(t, true, true, {
        analyticsLocations: e
      })
    }, t);
  return [u(s.TBI.VOICE_ACTIVITY, d.intl.string(d.t.cHCEOJ)), u(s.TBI.PUSH_TO_TALK, t ? d.intl.string(d.t["1AINrB"]) : d.intl.string(d.t.Q8gkVL))]
}