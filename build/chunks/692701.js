/** Chunk was on 50751 **/
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
let p = Chunk70956.Z.Millis.WEEK;

function f(e, t) {
  let n = (0, o.N)(e),
    r = (0, l.cj)([s.Z], () => s.Z.getUserAffinitiesMap()),
    {
      treatmentType: u
    } = (0, a.ZB)(t);
  return i.useMemo(() => {
    if (null == u || null == n) return [];
    let t = n.filter(t => (0, d.dX)(t) && (0, d.m9)(t) && t.extra.application_id === e && c.default.age(t.id) < p);
    return "recency" === u ? t.sort((e, t) => c.default.compare(t.id, e.id)) : "art" === u ? t.sort((e, t) => g(r, t) - g(r, e)) : t
  }, [n, e, u, r])
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
    l = Math.exp(-(c.default.age(t.id) / 1e3 / m * .01)),
    o = t.traits.some(e => e.type !== r.N.DURATION_SECONDS),
    a = (0, h.n2)(t);
  return i * l * (1 + .6 * (o && !a ? 1 : 0))
}