/** Chunk was on 56826 **/
/** chunk id: 455395, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk359119 = require("./359119.js"),
  Chunk832239 = require("./832239.js"),
  Chunk237292 = require("./237292.js"),
  Chunk100932 = require("./100932.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, d.x)(t),
    e = (0, a.y0)({
      location: "inappropriate_conversation_context_menu"
    });
  if (null === n || !e) return null;
  let {
    isTier1: o,
    isTier2: c
  } = n;
  return <i.Fragment>{!o && <r.sNh id={"mark-as-tier-1-inappro"} label={u.intl.string(u.t.EuzCER)} action={() => (0, s.KK)(t.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)} />}{!c && <r.sNh id={"mark-as-tier-2-inappro"} label={u.intl.string(u.t["tBw/1t"])} action={() => (0, s.KK)(t.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)} />}</i.Fragment>
}