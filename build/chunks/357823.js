/** Chunk was on 87168 **/
t.d(n, {
  default: () => v
});
var i = t(200651);
t(192379);
var l = t(481060),
  r = t(239091),
  u = t(883385),
  a = t(108843),
  o = t(100527),
  d = t(299206),
  c = t(819403),
  s = t(286694),
  _ = t(314897),
  E = t(238296),
  f = t(933409),
  g = t(981631),
  A = t(388032);
let v = (0, a.Z)((0, u.Z)(function(e) {
  let {
    user: n,
    channel: t,
    guildId: u,
    onSelect: a,
    context: o
  } = e, g = t.id, v = n.isNonUserBot(), h = n.id === _.default.getId(), T = (0, c.Z)(n), b = (0, s.Z)(n, u, g), O = (0, E.Y)({
    isOwnSettings: h,
    userId: n.id,
    channelId: g,
    guildId: u,
    context: o
  }), S = (0, E.E)(n, g, u), y = (0, f.Z)(n, u, g), N = (0, d.Z)({
    id: n.id,
    label: A.NW.string(A.t["/AXYnJ"])
  });
  return (0, i.jsx)(l.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": A.NW.string(A.t.liqwPD),
    onSelect: a,
    variant: "fixed",
    children: !v && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.kSQ, {
        children: [T, b]
      }), O, !h && (0, i.jsx)(l.kSQ, {
        children: (0, i.jsxs)(l.sNh, {
          id: "more-options",
          label: A.NW.string(A.t.PdRCRk),
          children: [S, (0, i.jsx)(l.kSQ, {
            children: y
          })]
        })
      }), h && (0, i.jsx)(l.kSQ, {
        children: N
      })]
    })
  })
}, {
  object: g.qAy.CONTEXT_MENU
}), [o.Z.VOICE_USER])