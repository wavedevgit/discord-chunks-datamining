/** Chunk was on 91053 **/
/** chunk id: 270295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk314897 = require("./314897.js"),
  Chunk471253 = require("./471253.js"),
  Chunk590415 = require("./590415.js"),
  Chunk430104 = require("./430104.js");

function u(e) {
  let t = (0, i.e7)([s.default], () => s.default.getId()),
    n = (0, c.ZP)(t, e.id),
    u = n === c.xO.REQUESTED_TO_SPEAK || n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [p, h] = r.useState(u);
  return r.useEffect(() => {
    h(u)
  }, [u]), [p, function() {
    if ((0, d.u1)()) return void l.Z.showAgeVerificationGetStartedModal({
      entryPoint: a.cU.STAGE_CHANNEL_RAISE_HAND
    });
    n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.RK)(e, true) : (0, o.Q1)(e, !p), h(!p)
  }]
}