/** Chunk was on 56826 **/
/** chunk id: 455395, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  i: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk359119 = require("./359119.js"),
  Chunk832239 = require("./832239.js"),
  Chunk237292 = require("./237292.js"),
  Chunk100932 = require("./100932.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let n = (0, o.x)(e),
    t = (0, s.y0)({
      location: "inappropriate_conversation_context_menu"
    });
  if (null === n || !t) return null;
  let {
    isTier1: c,
    isTier2: u
  } = n;
  return (0, i.jsxs)(i.Fragment, {
    children: [!c && (0, i.jsx)(r.sNh, {
      id: "mark-as-tier-1-inappro",
      label: d.intl.string(d.t.EuzCET),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !u && (0, i.jsx)(r.sNh, {
      id: "mark-as-tier-2-inappro",
      label: d.intl.string(d.t["tBw/1i"]),
      action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}