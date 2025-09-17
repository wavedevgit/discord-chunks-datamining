/** Chunk was on 70127 **/
/** chunk id: 270295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk471253 = require("./471253.js"),
  Chunk590415 = require("./590415.js");

function s(e) {
  let t = (0, i.e7)([l.default], () => l.default.getId()),
    n = (0, o.ZP)(t, e.id),
    s = n === o.xO.REQUESTED_TO_SPEAK || n === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [c, u] = r.useState(s);
  return r.useEffect(() => {
    u(s)
  }, [s]), [c, function() {
    n === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, true) : (0, a.Q1)(e, !c), u(!c)
  }]
}