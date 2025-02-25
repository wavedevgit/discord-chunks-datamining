/** Chunk was on 79477 **/
n.d(t, {
  Z: () => h
});
var l = n(200651);
n(192379);
var r = n(913527),
  s = n.n(r),
  i = n(793030),
  a = n(739566),
  o = n(942951),
  c = n(67390),
  u = n(63063),
  d = n(981631),
  m = n(388032),
  g = n(637402);

function h(e) {
  var t;
  let {
    streamingUntil: n,
    user: r,
    channel: h
  } = e, x = (0, a.JZ)(r, h), p = (0, o.l)({
    user: r,
    channelId: h.id,
    guildId: h.guild_id,
    messageId: void 0
  })(x), v = s()(n).diff(s()(), "hours");
  return v <= 0 ? null : (0, l.jsxs)("div", {
    className: g.attribution,
    children: [(0, l.jsx)(c.Z, {
      className: g.img
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(i.X6, {
        variant: "heading-sm/bold",
        children: m.NW.string(m.t.K04rOD)
      }), (0, l.jsx)(i.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: m.NW.format(m.t.NZDuBg, {
          actorName: null !== (t = r.globalName) && void 0 !== t ? t : r.username,
          actorHook: p,
          num: v,
          helpCenterLink: u.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
        })
      })]
    })]
  })
}