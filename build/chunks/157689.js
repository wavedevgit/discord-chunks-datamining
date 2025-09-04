/** Chunk was on 27919 **/
/** chunk id: 157689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk709054 = require("./709054.js"),
  Chunk482241 = require("./482241.js"),
  Chunk954313 = require("./954313.js");

function a(e, t, n, a) {
  let s = (0, i.iA)(t, e),
    u = (0, i.Uq)(s.startDate, n.startDate) ? null : n.startDate,
    d = (0, i.Uq)(s.endDate, n.endDate) ? null : n.endDate;
  if (null != a)
    if ((0, i.Y4)(n, s)) return l.Z.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
    else return l.Z.updateGuildEventException({
      scheduled_start_time: null == u ? true : u.toISOString(),
      scheduled_end_time: null == d ? true : d.toISOString(),
      is_canceled: a.is_canceled
    }, e.guild_id, e.id, t);
  {
    let n = r.default.extractTimestamp(t);
    return l.Z.createGuildEventException({
      original_scheduled_start_time: new Date(n).toISOString(),
      scheduled_start_time: null == u ? true : u.toISOString(),
      scheduled_end_time: null == d ? true : d.toISOString(),
      is_canceled: false
    }, e.guild_id, e.id)
  }
}