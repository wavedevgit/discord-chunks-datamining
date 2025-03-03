/** Chunk was on 46746 **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var l = n(913527),
  i = n.n(l),
  s = n(793030),
  o = n(739566),
  a = n(942951),
  c = n(67390),
  d = n(63063),
  u = n(981631),
  f = n(388032),
  h = n(867552);

function m(e) {
  var t;
  let {
    streamingUntil: n,
    user: l,
    channel: m
  } = e, p = (0, o.JZ)(l, m), x = (0, a.l)({
    user: l,
    channelId: m.id,
    guildId: m.guild_id,
    messageId: void 0
  })(p), g = i()(n).diff(i()(), "hours");
  return g <= 0 ? null : (0, r.jsxs)("div", {
    className: h.attribution,
    children: [(0, r.jsx)(c.Z, {
      className: h.img
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.X6, {
        variant: "heading-sm/bold",
        children: f.NW.string(f.t.K04rOD)
      }), (0, r.jsx)(s.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: f.NW.format(f.t.NZDuBg, {
          actorName: null !== (t = l.globalName) && void 0 !== t ? t : l.username,
          actorHook: x,
          num: g,
          helpCenterLink: d.Z.getArticleURL(u.BhN.HD_STREAMING_POTION)
        })
      })]
    })]
  })
}