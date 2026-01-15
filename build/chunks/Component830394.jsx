/** Chunk was on 470 **/
/** chunk id: 830394, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk495279 = require("./495279.js"),
  Chunk894017 = require("./894017.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: d,
    channel: g
  } = t, f = null != n, {
    canManageGuildEvent: v
  } = (0, u.XJ)(null != g ? g : d), [b, E] = (0, i.Wu)([o.ZP], () => [o.ZP.isActive(e), o.ZP.getGuildScheduledEvent(e)]), p = (0, a.Z)(n, null == E ? true : E.id), Z = null != E && v(E);
  return f && (null == p ? true : p.is_canceled) && Z && (!b || f) ? (0, l.jsx)(r.sNh, {
    id: s.intl.string(s.t.b8606G),
    label: s.intl.string(s.t.b8606G),
    action: () => {
      null != n && null != p && (0, c.Z)(p, d.id, e, n)
    }
  }) : null
}