/** Chunk was on 76246 **/
/** chunk id: 7697, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk699682 = require("./699682.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk854698 = require("./854698.js");

function f(e, n, t) {
  let i = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
    f = (0, o.Z)(t),
    [p, h] = a.useState(null != t && null != i ? (0, b.PJ)(4, (0, b.Ho)(t), new Date(i.scheduled_start_time)) : []);
  a.useEffect(() => {
    if (null == f || null == t || null == i || r().isEqual(f, t)) return;
    let e = (0, b.Ho)(t);
    h((0, b.PJ)(p.length, e, new Date(i.scheduled_start_time)))
  }, [t, p.length, i, f]), a.useEffect(() => {
    if (null == n) return;
    let t = p.map(e => s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND));
    d.Z.getGuildEventUserCounts(n, e, t)
  }, [e, n, p]);
  let m = a.useMemo(() => {
    if (null == t || 0 === p.length || (null == i ? true : i.scheduled_start_time) == null) returnfalse;
    let e = new Date;
    e.setFullYear(e.getFullYear() + b.hn);
    let n = p[p.length - 1],
      a = (0, b.Ho)(t).after(n);
    return null != a && a <= e
  }, [t, p, null == i ? true : i.scheduled_start_time]);
  return {
    recurrenceStartTimes: p,
    canViewMoreRecurrences: m,
    updateRecurrenceStartTimes: () => {
      if (null == t || null == i) return;
      let e = (0, b.Ho)(t),
        n = p[p.length - 1];
      h([...p, ...(0, b.PJ)(4, e, n, true)])
    }
  }
}