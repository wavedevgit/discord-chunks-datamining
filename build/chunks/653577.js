/** Chunk was on 64615 **/
n.d(t, {
  Z: () => v
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
  m = n(975966),
  b = n(368365);

function v(e) {
  let {
    channel: t,
    connected: n,
    hovered: l,
    subtitle: v,
    onClick: y
  } = e, O = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)), j = null != O && O.length > 0, _ = (0, c.ZP)(t, !0), x = null != v && v.length > 0;
  i.useEffect(() => {
    j && h.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, j, t.guild_id]);
  let C = (0, s.bWb)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let P = o()(m.statusDiv, n && _ ? m.hoverable : null);
  return j ? (0, r.jsx)(s.P3F, {
    className: P,
    onClick: _ ? y : void 0,
    children: (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: o()(m.statusText, b.markup),
      children: (0, r.jsx)(d.Z, {
        children: p.Z.parseVoiceChannelStatus(O, !0, {
          channelId: t.id
        })
      })
    })
  }) : n && _ && (!x || l) ? (0, r.jsxs)(s.P3F, {
    className: P,
    onClick: y,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: m.statusText,
      children: g.NW.string(g.t.Mgpxi4)
    }), (0, r.jsx)(s.vdY, {
      size: "custom",
      color: "currentColor",
      className: m.pencilIcon,
      width: C,
      height: C
    })]
  }) : x ? (0, r.jsx)(d.Z, {
    children: v
  }) : null
}