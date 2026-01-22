/** Chunk was on web.js **/
/** chunk id: 704456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ce: () => _,
  kh: () => p,
  le: () => m,
  vr: () => h
});
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk22007 = require("./22007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  p = function(e) {
    return e[e.LONG = 0] = "LONG", e[e.SHORT = 1] = "SHORT", e
  }({});

function _(e) {
  let {
    dueAt: t,
    now: n,
    type: r
  } = e;
  if (null == t) return {
    string: "",
    isOverdue: false
  };
  let i = 0 === r ? f.t.TjNWNF : f.t.H4gnX9,
    s = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
    o = n > t,
    l = o ? s : i;
  return {
    dueInText: f.intl.formatToPlainString(l, {
      duration: a().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: o
  }
}

function h(e) {
  let t = (0, s.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
  return r.useMemo(() => null != t ? t : null != e.message ? new c.jb({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: d.rbe.UNKNOWN,
    name: f.intl.string(f.t.J90oLW)
  }) : true, [t, e])
}
async function m(e, t) {
  if ((null == t ? true : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId) try {
    let t = await o.A.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await o.A.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, l.A)(d.BVt.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}