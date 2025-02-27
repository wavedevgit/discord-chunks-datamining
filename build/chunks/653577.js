/** Chunk was on 2928 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(362721),
  u = n(12498),
  d = n(111028),
  p = n(454585),
  h = n(626135),
  f = n(981631),
  g = n(388032),
  m = n(927331),
  b = n(509045);

function y(e) {
  let {
    channel: t,
    connected: n,
    hovered: l,
    subtitle: y,
    onClick: v
  } = e, O = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)), j = null != O && O.length > 0, _ = (0, c.ZP)(t, !0), C = null != y && y.length > 0;
  i.useEffect(() => {
    j && h.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, j, t.guild_id]);
  let x = (0, s.bWb)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let P = o()(m.statusDiv, n && _ ? m.hoverable : null);
  return j ? (0, r.jsx)(s.P3F, {
    className: P,
    onClick: _ ? v : void 0,
    children: (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: o()(m.statusText, b.markup),
      children: (0, r.jsx)(d.Z, {
        children: p.Z.parseVoiceChannelStatus(O, !0, {
          channelId: t.id
        })
      })
    })
  }) : n && _ && (!C || l) ? (0, r.jsxs)(s.P3F, {
    className: P,
    onClick: v,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: m.statusText,
      children: g.NW.string(g.t.Mgpxi4)
    }), (0, r.jsx)(s.vdY, {
      size: "custom",
      color: "currentColor",
      className: m.pencilIcon,
      width: x,
      height: x
    })]
  }) : C ? (0, r.jsx)(d.Z, {
    children: y
  }) : null
}