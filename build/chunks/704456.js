/** Chunk was on 92869 **/
/** chunk id: 704456, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ce: () => b,
  kh: () => f,
  le: () => m,
  vr: () => h
});
var s, Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk22007 = require("./22007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  f = ((s = {})[s.LONG = 0] = "LONG", s[s.SHORT = 1] = "SHORT", s);

function b(e) {
  let {
    dueAt: t,
    now: n,
    type: s
  } = e;
  if (null == t) return {
    string: "",
    isOverdue: false
  };
  let r = 0 === s ? g.t.TjNWNF : g.t.H4gnX9,
    a = 0 === s ? g.t.haia16 : g.t["Uq7Y+7"],
    l = n > t;
  return {
    dueInText: g.intl.formatToPlainString(l ? a : r, {
      duration: i().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: l
  }
}

function h(e) {
  let t = (0, l.bG)([p.A], () => p.A.getChannel(e.saveData.channelId));
  return r.useMemo(() => null != t ? t : null != e.message ? new u.jb({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: d.rbe.UNKNOWN,
    name: g.intl.string(g.t.J90oLW)
  }) : true, [t, e])
}
async function m(e, t) {
  if ((null == t ? true : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId) try {
    let t = await c.A.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await c.A.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, o.A)(d.BVt.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}