/** Chunk was on 82124 **/
/** chunk id: 270295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk314897 = require("./314897.js"),
  Chunk471253 = require("./471253.js"),
  Chunk590415 = require("./590415.js"),
  Chunk430104 = require("./430104.js");

function d(e) {
  let t = (0, i.e7)([o.default], () => o.default.getId()),
    n = (0, c.ZP)(t, e.id),
    d = n === c.xO.REQUESTED_TO_SPEAK || n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [p, f] = r.useState(d);
  return r.useEffect(() => {
    f(d)
  }, [d]), [p, function() {
    if ((0, u.u1)(e.id)) return void l.Z.showAgeVerificationGetStartedModal({
      entryPoint: a.cU.STAGE_CHANNEL_RAISE_HAND
    });
    n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, s.RK)(e, true) : (0, s.Q1)(e, !p), f(!p)
  }]
}