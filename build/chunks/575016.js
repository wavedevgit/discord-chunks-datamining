/** Chunk was on web.js **/
/** chunk id: 575016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => _,
  fC: () => h,
  gr: () => m,
  hQ: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk336197 = require("./336197.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
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
    o = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
    s = n > t,
    l = s ? o : i;
  return {
    dueInText: f.intl.formatToPlainString(l, {
      duration: a().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: s
  }
}

function m(e) {
  let t = (0, o.e7)([u.Z], () => u.Z.getChannel(e.saveData.channelId));
  return r.useMemo(() => null != t ? t : null != e.message ? new c.nl({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: d.d4z.UNKNOWN,
    name: f.intl.string(f.t.J90oLW)
  }) : true, [t, e])
}
async function h(e, t) {
  if ((null == t ? true : t.type) === d.d4z.UNKNOWN && null == e.saveData.guildId) try {
    let t = await s.Z.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await s.Z.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, l.Z)(d.Z5c.CHANNEL(null == t ? true : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: true
  })
}