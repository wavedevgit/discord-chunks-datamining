/** Chunk was on 46290 **/
/** chunk id: 692701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./642613.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk884439 = require("./884439.js"),
  Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk740589 = require("./740589.js"),
  Chunk752048 = require("./752048.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk26033 = require("./26033.js"),
  Chunk561308 = require("./561308.js");
let h = Chunk70956.Z.Millis.WEEK;

function f(e, t) {
  let n = (0, l.N)(e),
    r = (0, o.cj)([s.Z], () => s.Z.getUserAffinitiesMap()),
    {
      treatmentType: c
    } = (0, a.ZB)(t);
  return i.useMemo(() => {
    if (null == c || null == n) return [];
    let t = n.filter(t => (0, d.dX)(t) && (0, d.m9)(t) && t.extra.application_id === e && u.default.age(t.id) < h);
    return "recency" === c ? t.sort((e, t) => u.default.compare(t.id, e.id)) : "art" === c ? t.sort((e, t) => g(r, t) - g(r, e)) : t
  }, [n, e, c, r])
}
let m = 30 * Chunk70956.Z.Seconds.MINUTE;

function g(e, t) {
  let n = t.participants;
  if (0 === n.length) return 0;
  let i = Math.max(...n.map(t => {
      var n;
      let i = e.get(t);
      return (null != (n = null == i ? true : i.communicationProbability) ? n : 0) + 1e-4
    })),
    o = Math.exp(-(u.default.age(t.id) / 1e3 / m * .01)),
    l = t.traits.some(e => e.type !== r.N.DURATION_SECONDS),
    a = (0, p.n2)(t);
  return i * o * (1 + .6 * (l && !a ? 1 : 0))
}