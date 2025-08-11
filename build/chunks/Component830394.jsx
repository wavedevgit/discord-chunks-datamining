/** Chunk was on 27434 **/
/** chunk id: 830394, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk495279 = require("./495279.js"),
  Chunk894017 = require("./894017.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    guildEventId: n,
    recurrenceId: e,
    guild: d,
    channel: g
  } = t, v = null != e, {
    canManageGuildEvent: b
  } = (0, o.XJ)(null != g ? g : d), [f, p] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]), j = (0, s.Z)(e, null == p ? true : p.id), h = null != p && b(p);
  return v && (null == j ? true : j.is_canceled) && h && (!f || v) ? (0, l.jsx)(r.sNh, {
    id: u.intl.string(u.t.b8606O),
    label: u.intl.string(u.t.b8606O),
    action: () => {
      null != e && null != j && (0, c.Z)(j, d.id, n, e)
    }
  }) : null
}