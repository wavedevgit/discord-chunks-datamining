/** Chunk was on 83331 **/
/** chunk id: 333805, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk427679 = require("./427679.js"),
  Chunk388032 = require("./388032.jsx");

function c(n) {
  let t = a.Z.isLive(n.id);
  return n.isGuildStageVoice() && t ? (0, i.jsx)(l.sNh, {
    id: "report-stage",
    label: s.intl.string(s.t.JGj6Ci),
    action: () => (0, r.ic)(n),
    icon: l.U65,
    color: "danger"
  }) : null
}