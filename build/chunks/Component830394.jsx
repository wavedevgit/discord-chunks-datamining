/** Chunk was on 27434 **/
/** chunk id: 830394, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  } = t, f = null != e, {
    canManageGuildEvent: b
  } = (0, o.XJ)(null != g ? g : d), [p, v] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]), h = (0, u.Z)(e, null == v ? true : v.id), y = null != v && b(v);
  return f && (null == h ? true : h.is_canceled) && y && (!p || f) ? (0, l.jsx)(r.sNh, {
    id: s.intl.string(s.t.b8606O),
    label: s.intl.string(s.t.b8606O),
    action: () => {
      null != e && null != h && (0, c.Z)(h, d.id, n, e)
    }
  }) : null
}