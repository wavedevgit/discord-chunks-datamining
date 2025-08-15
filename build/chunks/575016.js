/** Chunk was on 54157 **/
/** chunk id: 575016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AT: () => _,
  fC: () => S,
  gr: () => g,
  hQ: () => f
});
var r, Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk336197 = require("./336197.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  f = ((r = {})[r.LONG = 0] = "LONG", r[r.SHORT = 1] = "SHORT", r);

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
  let s = 0 === r ? p.t.TjNWND : p.t.H4gnX1,
    l = 0 === r ? p.t.haia19 : p.t["Uq7Y+/"],
    i = n > t;
  return {
    dueInText: p.intl.formatToPlainString(i ? l : s, {
      duration: a().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: i
  }
}

function g(e) {
  let t = (0, i.e7)([d.Z], () => d.Z.getChannel(e.saveData.channelId));
  return s.useMemo(() => null != t ? t : null != e.message ? new u.nl({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: h.d4z.UNKNOWN,
    name: p.intl.string(p.t.J90oLS)
  }) : true, [t, e])
}
async function S(e, t) {
  if ((null == t ? true : t.type) === h.d4z.UNKNOWN && null == e.saveData.guildId) try {
    let t = await o.Z.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await o.Z.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, c.Z)(h.Z5c.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}