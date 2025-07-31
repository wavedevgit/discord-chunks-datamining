/** Chunk was on 41629 **/
"use strict";
n.d(t, {
  AT: () => b,
  fC: () => m,
  gr: () => h,
  hQ: () => g
});
var s, i = n(73800),
  r = n(913527),
  c = n.n(r),
  a = n(442837),
  o = n(493683),
  u = n(336197),
  l = n(131704),
  p = n(592125),
  f = n(981631),
  d = n(388032),
  g = ((s = {})[s.LONG = 0] = "LONG", s[s.SHORT = 1] = "SHORT", s);

function b(e) {
  let {
    dueAt: t,
    now: n,
    type: s
  } = e;
  if (null == t) return {
    string: "",
    isOverdue: !1
  };
  let i = 0 === s ? d.t.TjNWND : d.t.H4gnX1,
    r = 0 === s ? d.t.haia19 : d.t["Uq7Y+/"],
    a = n > t;
  return {
    dueInText: d.intl.formatToPlainString(a ? r : i, {
      duration: c().duration(t.getTime() - n.getTime(), "millisecond").humanize()
    }),
    isOverdue: a
  }
}

function h(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e.saveData.channelId));
  return i.useMemo(() => null != t ? t : null != e.message ? new l.nl({
    id: e.saveData.channelId,
    guild_id: e.saveData.guildId,
    type: f.d4z.UNKNOWN,
    name: d.intl.string(d.t.J90oLS)
  }) : void 0, [t, e])
}
async function m(e, t) {
  if ((null == t ? void 0 : t.type) === f.d4z.UNKNOWN && null == e.saveData.guildId) try {
    let t = await o.Z.fetchChannel(e.saveData.channelId);
    if (null == t.recipients || t.recipients.length > 1) return;
    await o.Z.ensurePrivateChannel(t.recipients.map(e => e.id))
  } catch (e) {}(0, u.Z)(f.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
    openChannel: !0
  })
}