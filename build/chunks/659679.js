/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v
});
var r = t(200651),
  i = t(192379),
  o = t(793030),
  a = t(442837),
  s = t(481060),
  c = t(834129),
  l = t(271383),
  d = t(709586),
  u = t(388032),
  x = t(212590);

function v(e) {
  var n;
  let {
    boost: t
  } = e, {
    username: v,
    roleColor: m
  } = (0, a.cj)([l.ZP], () => {
    var e, n, r;
    return {
      username: null !== (r = l.ZP.getNick(t.guildId, t.userId)) && void 0 !== r ? r : null === (e = t.user) || void 0 === e ? void 0 : e.username,
      roleColor: null === (n = l.ZP.getMember(t.guildId, t.userId)) || void 0 === n ? void 0 : n.colorString
    }
  }, [t]), p = i.useCallback(() => (0, r.jsx)(s.PUh, {
    name: v,
    color: null != m ? m : void 0
  }), [v, m]);
  return (0, r.jsx)(c.Z, {
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
        username: v,
        usernameHook: p
      })
    })
  })
}