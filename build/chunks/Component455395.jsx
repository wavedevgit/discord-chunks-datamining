/** Chunk was on 56826 **/
/** chunk id: 455395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    isTier2: c
  } = t;
  return (0, i.jsxs)(i.Fragment, {
    children: [!u && (0, i.jsx)(r.sNh, {
      id: "mark-as-tier-1-inappro",
      label: d.intl.string(d.t.EuzCET),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !c && (0, i.jsx)(r.sNh, {
      id: "mark-as-tier-2-inappro",
      label: d.intl.string(d.t["tBw/1i"]),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}