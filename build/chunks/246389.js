/** Chunk was on 45130 **/
n.d(t, {
  default: () => f
});
var r = n(200651);
n(192379);
var l = n(481060),
  o = n(239091),
  i = n(883385),
  u = n(108843),
  c = n(100527),
  a = n(906732),
  d = n(931617),
  s = n(981631),
  _ = n(388032);
let f = (0, u.Z)((0, i.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: i,
    onSelect: u,
    analyticsLocations: s,
    onCloseContextMenu: f,
    isViewOnly: b
  } = e, {
    analyticsLocations: E
  } = (0, a.ZP)(c.Z.CONTEXT_MENU), O = null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : E[0], g = (0, d.Z)(n.id, i, !0, O, b);
  return (0, r.jsx)(l.v2r, {
    navId: "guild-moderation-roles",
    onClose: () => {
      (0, o.Zy)(), null == f || f()
    },
    "aria-label": _.NW.string(_.t.liqwPD),
    onSelect: u,
    children: (0, r.jsx)(l.kSQ, {
      children: g
    })
  })
}, {
  object: s.qAy.CONTEXT_MENU
}), [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU])