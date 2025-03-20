/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  m: () => b
}), n(47120), n(733860);
var r = n(200651),
  i = n(192379),
  s = n(149765),
  a = n(442837),
  l = n(481060),
  o = n(933557),
  A = n(984933),
  c = n(496675),
  d = n(699516),
  u = n(594174),
  g = n(434404),
  f = n(800223),
  m = n(981631),
  p = n(388032);
let h = "NO_CHANNEL",
  C = s.$e(m.Plq.VIEW_CHANNEL, m.Plq.CREATE_INSTANT_INVITE);

function b(e) {
  let {
    guildId: t,
    widgetEnabled: n,
    widgetChannelId: s,
    className: m,
    enableLocalUpdate: b
  } = e, v = (0, a.e7)([A.ZP], () => A.ZP.getChannels(t)), x = i.useMemo(() => {
    let e = [...v[A.sH], ...v[A.Zb]].filter(e => {
      let {
        channel: n
      } = e;
      return n.guild_id === t
    }).filter(e => {
      let {
        channel: t
      } = e;
      return t.id === s || c.Z.can(C, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, o.F6)(t, u.default, d.Z, !0)
      }
    });
    return e.unshift({
      value: h,
      label: p.NW.string(p.t.u197b2)
    }), e
  }, [v, t, s]), N = i.useCallback(e => {
    b ? (0, f.c)(t, n, e !== h ? e : null) : g.Z.updateEmbed(t, n, e !== h ? e : null)
  }, [t, n, b]);
  return (0, r.jsx)(l.q4e, {
    options: x,
    value: s,
    onChange: N,
    className: m
  })
}