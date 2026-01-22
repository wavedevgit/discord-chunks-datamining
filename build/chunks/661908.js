/** Chunk was on 71447 **/
/** chunk id: 661908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./638769.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk974690 = require("./974690.js"),
  Chunk311907 = require("./311907.js"),
  Chunk205184 = require("./205184.js"),
  Chunk21119 = require("./21119.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk20805 = require("./20805.js"),
  Chunk583846 = require("./583846.js");
let p = Chunk927813.A.Millis.WEEK;

function h(e) {
  let t = (0, a.s)(e),
    n = (0, l.cf)([o.A], () => o.A.getUserAffinitiesMap());
  return i.useMemo(() => null == t ? [] : t.filter(t => (0, u.zD)(t) && (0, u.P)(t) && t.extra.application_id === e && c.default.age(t.id) < p).sort((e, t) => m(n, t) - m(n, e)), [t, e, n])
}
let f = 30 * Chunk927813.A.Seconds.MINUTE;

function m(e, t) {
  let n = t.participants;
  if (0 === n.length) return 0;
  let i = Math.max(...n.map(t => {
      var n;
      let i = e.get(t);
      return (null != (n = null == i ? true : i.communicationProbability) ? n : 0) + 1e-4
    })),
    l = Math.exp(-(c.default.age(t.id) / 1e3 / f * .01)),
    a = t.traits.some(e => e.type !== r.K.DURATION_SECONDS),
    o = (0, d.I5)(t);
  return i * l * (1 + .6 * (a && !o ? 1 : 0))
}