/** Chunk was on 28099 **/
/** chunk id: 7697, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk699682 = require("./699682.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk954313 = require("./954313.js");

function b(e, n, t) {
  let r = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
    b = (0, o.Z)(t),
    [p, f] = i.useState(null != t && null != r ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(r.scheduled_start_time)) : []);
  i.useEffect(() => {
    if (null == b || null == t || null == r || a().isEqual(b, t)) return;
    let e = (0, _.Ho)(t);
    f((0, _.PJ)(p.length, e, new Date(r.scheduled_start_time)))
  }, [t, p.length, r, b]), i.useEffect(() => {
    if (null == n) return;
    let t = p.map(e => s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND));
    d.Z.getGuildEventUserCounts(n, e, t)
  }, [e, n, p]);
  let h = i.useMemo(() => {
    if (null == t || 0 === p.length || (null == r ? true : r.scheduled_start_time) == null) returnfalse;
    let e = new Date;
    e.setFullYear(e.getFullYear() + _.hn);
    let n = p[p.length - 1],
      i = (0, _.Ho)(t).after(n);
    return null != i && i <= e
  }, [t, p, null == r ? true : r.scheduled_start_time]);
  return {
    recurrenceStartTimes: p,
    canViewMoreRecurrences: h,
    updateRecurrenceStartTimes: () => {
      if (null == t || null == r) return;
      let e = (0, _.Ho)(t),
        n = p[p.length - 1];
      f([...p, ...(0, _.PJ)(4, e, n, true)])
    }
  }
}