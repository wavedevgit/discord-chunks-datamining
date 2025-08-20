/** Chunk was on 27434 **/
/** chunk id: 830394, original params: t,e,n (module,exports,require) **/
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
    guildEventId: e,
    recurrenceId: n,
    guild: d,
    channel: g
  } = t, f = null != n, {
    canManageGuildEvent: b
  } = (0, o.XJ)(null != g ? g : d), [v, E] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]), p = (0, a.Z)(n, null == E ? true : E.id), Z = null != E && b(E);
  return f && (null == p ? true : p.is_canceled) && Z && (!v || f) ? (0, l.jsx)(i.sNh, {
    id: s.intl.string(s.t.b8606O),
    label: s.intl.string(s.t.b8606O),
    action: () => {
      null != n && null != p && (0, c.Z)(p, d.id, e, n)
    }
  }) : null
}