/** Chunk was on 84127 **/
/** chunk id: 704456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ce: () => h,
  kh: () => A,
  le: () => y,
  vr: () => O
});
var r, Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk22007 = require("./22007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  A = ((r = {})[r.LONG = 0] = "LONG", r[r.SHORT = 1] = "SHORT", r);

function h(e) {
  let {
    dueAt: t,
    now: n,
    type: r
  } = e;
  if (null == t) return {
    string: "",
    isOverdue: false
  };
  let l = 0 === r ? f.t.TjNWNF : f.t.H4gnX9,
    a = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
    i = n > t;
  return {
    dueInText: f.intl.formatToPlainString(i ? a : l, {
      duration: s().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: i
  }
}

function O(e) {
  let t = (0, i.bG)([p.A], () => p.A.getChannel(e.saveData.channelId));
  return l.useMemo(() => null != t ? t : null != e.message ? new u.jb({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: d.rbe.UNKNOWN,
    name: f.intl.string(f.t.J90oLW)
  }) : true, [t, e])
}
async function y(e, t) {
  if ((null == t ? true : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId) try {
    let t = await o.A.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await o.A.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, c.A)(d.BVt.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}