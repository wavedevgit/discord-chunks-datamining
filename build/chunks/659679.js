/** Chunk was on 44799 **/
t.d(n, {
  Z: () => x
});
var r = t(200651),
  i = t(192379),
  o = t(793030),
  s = t(442837),
  a = t(481060),
  l = t(834129),
  c = t(271383),
  d = t(709586),
  u = t(388032),
  v = t(652754);

function x(e) {
  var n;
  let {
    boost: t
  } = e, {
    username: x,
    roleColor: p
  } = (0, s.cj)([c.ZP], () => {
    var e, n, r;
    return {
      username: null !== (r = c.ZP.getNick(t.guildId, t.userId)) && void 0 !== r ? r : null === (e = t.user) || void 0 === e ? void 0 : e.username,
      roleColor: null === (n = c.ZP.getMember(t.guildId, t.userId)) || void 0 === n ? void 0 : n.colorString
    }
  }, [t]), b = i.useCallback(() => (0, r.jsx)(a.PUh, {
    name: x,
    color: null != p ? p : void 0
  }), [x, p]);
  return (0, r.jsx)(l.Z, {
    className: v.textContainer,
    iconNode: (0, r.jsx)(d.Z, {
      className: v.icon,
      width: 16,
      height: 16
    }),
    iconContainerClassName: v.iconContainer,
    timestamp: null !== (n = t.endsAt) && void 0 !== n ? n : void 0,
    compact: !0,
    children: (0, r.jsx)(o.xv, {
      variant: "text-md/semibold",
      children: u.NW.format(u.t["57St//"], {
        username: x,
        usernameHook: b
      })
    })
  })
}