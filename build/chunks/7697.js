/** Chunk was on 22347 **/
/** chunk id: 7697, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(t, e, n) {
  let i = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
    g = (0, a.Z)(n),
    [m, p] = l.useState(null != n && null != i ? (0, h.PJ)(4, (0, h.Ho)(n), new Date(i.scheduled_start_time)) : []);
  l.useEffect(() => {
    if (null == g || null == n || null == i || r().isEqual(g, n)) return;
    let t = (0, h.Ho)(n);
    p((0, h.PJ)(m.length, t, new Date(i.scheduled_start_time)))
  }, [n, m.length, i, g]), l.useEffect(() => {
    if (null == e) return;
    let n = m.map(t => c.default.fromTimestamp(Math.floor(t.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND));
    o.Z.getGuildEventUserCounts(e, t, n)
  }, [t, e, m]);
  let v = l.useMemo(() => {
    if (null == n || 0 === m.length || (null == i ? true : i.scheduled_start_time) == null) returnfalse;
    let t = new Date;
    t.setFullYear(t.getFullYear() + h.hn);
    let e = m[m.length - 1],
      l = (0, h.Ho)(n).after(e);
    return null != l && l <= t
  }, [n, m, null == i ? true : i.scheduled_start_time]);
  return {
    recurrenceStartTimes: m,
    canViewMoreRecurrences: v,
    updateRecurrenceStartTimes: () => {
      if (null == n || null == i) return;
      let t = (0, h.Ho)(n),
        e = m[m.length - 1];
      p([...m, ...(0, h.PJ)(4, t, e, true)])
    }
  }
}