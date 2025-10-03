/** Chunk was on 98878 **/
/** chunk id: 7697, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk699682 = require("./699682.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk954313 = require("./954313.js");

function p(e, n, t) {
  let a = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
    p = (0, o.Z)(t),
    [b, g] = i.useState(null != t && null != a ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(a.scheduled_start_time)) : []);
  i.useEffect(() => {
    if (null == p || null == t || null == a || r().isEqual(p, t)) return;
    let e = (0, _.Ho)(t);
    g((0, _.PJ)(b.length, e, new Date(a.scheduled_start_time)))
  }, [t, b.length, a, p]), i.useEffect(() => {
    if (null == n) return;
    let t = b.map(e => s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND));
    d.Z.getGuildEventUserCounts(n, e, t)
  }, [e, n, b]);
  let h = i.useMemo(() => {
    if (null == t || 0 === b.length || (null == a ? true : a.scheduled_start_time) == null) returnfalse;
    let e = new Date;
    e.setFullYear(e.getFullYear() + _.hn);
    let n = b[b.length - 1],
      i = (0, _.Ho)(t).after(n);
    return null != i && i <= e
  }, [t, b, null == a ? true : a.scheduled_start_time]);
  return {
    recurrenceStartTimes: b,
    canViewMoreRecurrences: h,
    updateRecurrenceStartTimes: () => {
      if (null == t || null == a) return;
      let e = (0, _.Ho)(t),
        n = b[b.length - 1];
      g([...b, ...(0, _.PJ)(4, e, n, true)])
    }
  }
}