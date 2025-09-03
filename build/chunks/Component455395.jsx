/** Chunk was on 56826 **/
/** chunk id: 455395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk359119 = require("./359119.js"),
  Chunk832239 = require("./832239.js"),
  Chunk237292 = require("./237292.js"),
  Chunk100932 = require("./100932.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, s.x)(e),
    n = (0, o.y0)({
      location: "inappropriate_conversation_context_menu"
    });
  if (null === t || !n) return null;
  let {
    isTier1: u,
    isTier2: d
  } = t;
  return (0, r.jsxs)(r.Fragment, {
    children: [!u && (0, r.jsx)(i.sNh, {
      id: "mark-as-tier-1-inappro",
      label: c.intl.string(c.t.EuzCER),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !d && (0, r.jsx)(i.sNh, {
      id: "mark-as-tier-2-inappro",
      label: c.intl.string(c.t["tBw/1t"]),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}