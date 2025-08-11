/** Chunk was on 49152 **/
/** chunk id: 270295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk471253 = require("./471253.js"),
  Chunk590415 = require("./590415.js");

function o(e) {
  let t = (0, i.e7)([l.default], () => l.default.getId()),
    n = (0, s.ZP)(t, e.id),
    o = n === s.xO.REQUESTED_TO_SPEAK || n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [c, u] = r.useState(o);
  return r.useEffect(() => {
    u(o)
  }, [o]), [c, function() {
    n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, true) : (0, a.Q1)(e, !c), u(!c)
  }]
}