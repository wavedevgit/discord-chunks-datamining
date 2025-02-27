/** Chunk was on 79477 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var l = n(913527),
  s = n.n(l),
  i = n(793030),
  a = n(739566),
  o = n(942951),
  c = n(67390),
  u = n(63063),
  d = n(981631),
  m = n(388032),
  p = n(867552);

function h(e) {
  var t;
  let {
    streamingUntil: n,
    user: l,
    channel: h
  } = e, g = (0, a.JZ)(l, h), x = (0, o.l)({
    user: l,
    channelId: h.id,
    guildId: h.guild_id,
    messageId: void 0
  })(g), v = s()(n).diff(s()(), "hours");
  return v <= 0 ? null : (0, r.jsxs)("div", {
    className: p.attribution,
    children: [(0, r.jsx)(c.Z, {
      className: p.img
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(i.X6, {
        variant: "heading-sm/bold",
        children: m.NW.string(m.t.K04rOD)
      }), (0, r.jsx)(i.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: m.NW.format(m.t.NZDuBg, {
          actorName: null !== (t = l.globalName) && void 0 !== t ? t : l.username,
          actorHook: x,
          num: v,
          helpCenterLink: u.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
        })
      })]
    })]
  })
}