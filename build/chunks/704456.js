/** Chunk was on 52199 **/
/** chunk id: 704456, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ce: () => g,
  kh: () => f,
  le: () => E,
  vr: () => S
});
var n, Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk22007 = require("./22007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  f = ((n = {})[n.LONG = 0] = "LONG", n[n.SHORT = 1] = "SHORT", n);

function g(e) {
  let {
    dueAt: t,
    now: r,
    type: n
  } = e;
  if (null == t) return {
    string: "",
    isOverdue: false
  };
  let l = 0 === n ? p.t.TjNWNF : p.t.H4gnX9,
    s = 0 === n ? p.t.haia16 : p.t["Uq7Y+7"],
    i = r > t;
  return {
    dueInText: p.intl.formatToPlainString(i ? s : l, {
      duration: a().duration(t.getTime() - r.getTime(), "millisecond").humanize()
    }),
    isOverdue: i
  }
}

function S(e) {
  let t = (0, i.bG)([d.A], () => d.A.getChannel(e.saveData.channelId));
  return l.useMemo(() => null != t ? t : null != e.message ? new u.jb({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: h.rbe.UNKNOWN,
    name: p.intl.string(p.t.J90oLW)
  }) : true, [t, e])
}
async function E(e, t) {
  if ((null == t ? true : t.type) === h.rbe.UNKNOWN && null == e.saveData.guildId) try {
    let t = await o.A.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await o.A.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, c.A)(h.BVt.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}