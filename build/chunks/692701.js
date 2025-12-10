/** Chunk was on 50751 **/
/** chunk id: 692701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./642613.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk884439 = require("./884439.js"),
  Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk752048 = require("./752048.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk26033 = require("./26033.js"),
  Chunk561308 = require("./561308.js");
let h = Chunk70956.Z.Millis.WEEK;

function p(e) {
  let t = (0, o.N)(e),
    n = (0, l.cj)([a.Z], () => a.Z.getUserAffinitiesMap());
  return i.useMemo(() => null == t ? [] : t.filter(t => (0, u.dX)(t) && (0, u.m9)(t) && t.extra.application_id === e && c.default.age(t.id) < h).sort((e, t) => m(n, t) - m(n, e)), [t, e, n])
}
let f = 30 * Chunk70956.Z.Seconds.MINUTE;

function m(e, t) {
  let n = t.participants;
  if (0 === n.length) return 0;
  let i = Math.max(...n.map(t => {
      var n;
      let i = e.get(t);
      return (null != (n = null == i ? true : i.communicationProbability) ? n : 0) + 1e-4
    })),
    l = Math.exp(-(c.default.age(t.id) / 1e3 / f * .01)),
    o = t.traits.some(e => e.type !== r.N.DURATION_SECONDS),
    a = (0, d.n2)(t);
  return i * l * (1 + .6 * (o && !a ? 1 : 0))
}