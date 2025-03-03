/** Chunk was on 44799 **/
t.d(n, {
  Z: () => p
});
var r = t(200651),
  i = t(192379),
  o = t(793030),
  a = t(442837),
  s = t(481060),
  l = t(834129),
  c = t(271383),
  d = t(709586),
  u = t(388032),
  x = t(652754);

function p(e) {
  var n;
  let {
    boost: t
  } = e, {
    username: p,
    roleColor: b
  } = (0, a.cj)([c.ZP], () => {
    var e, n, r;
    return {
      username: null !== (r = c.ZP.getNick(t.guildId, t.userId)) && void 0 !== r ? r : null === (e = t.user) || void 0 === e ? void 0 : e.username,
      roleColor: null === (n = c.ZP.getMember(t.guildId, t.userId)) || void 0 === n ? void 0 : n.colorString
    }
  }, [t]), v = i.useCallback(() => (0, r.jsx)(s.PUh, {
    name: p,
    color: null != b ? b : void 0
  }), [p, b]);
  return (0, r.jsx)(l.Z, {
    className: x.textContainer,
    iconNode: (0, r.jsx)(d.Z, {
      className: x.icon,
      width: 16,
      height: 16
    }),
    iconContainerClassName: x.iconContainer,
    timestamp: null !== (n = t.endsAt) && void 0 !== n ? n : void 0,
    compact: !0,
    children: (0, r.jsx)(o.xv, {
      variant: "text-md/semibold",
      children: u.NW.format(u.t["57St//"], {
        username: p,
        usernameHook: v
      })
    })
  })
}