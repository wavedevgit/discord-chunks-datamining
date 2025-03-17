/** Chunk was on 44799 **/
t.d(n, {
  Z: () => p
});
var r = t(200651);
t(192379);
var i = t(793030),
  s = t(442837),
  o = t(481060),
  a = t(834129),
  l = t(271383),
  c = t(709586),
  d = t(709054),
  u = t(730621),
  x = t(388032),
  m = t(652754);

function p(e) {
  let {
    boost: n
  } = e, t = new Date(d.default.extractTimestamp(n.id)), {
    username: p,
    roleColor: v
  } = (0, s.cj)([l.ZP], () => {
    var e, t, r;
    return {
      username: null !== (r = l.ZP.getNick(n.guildId, n.userId)) && void 0 !== r ? r : null === (e = n.user) || void 0 === e ? void 0 : e.username,
      roleColor: null === (t = l.ZP.getMember(n.guildId, n.userId)) || void 0 === t ? void 0 : t.colorString
    }
  }, [n]);
  return (0, r.jsx)(a.Z, {
    className: m.systemMessageContainer,
    contentClassName: m.systemMessageContent,
    iconNode: (0, r.jsx)(c.Z, {
      className: m.icon,
      width: 16,
      height: 16
    }),
    iconContainerClassName: m.iconContainer,
    timestampClassName: m.timestamp,
    timestamp: t,
    compact: !0,
    children: (0, r.jsxs)("span", {
      className: m.boostMessage,
      children: [(0, r.jsx)(i.xv, {
        variant: "text-md/semibold",
        children: (0, r.jsx)(o.PUh, {
          name: p,
          color: null != v ? v : void 0
        })
      }), (0, r.jsx)(i.xv, {
        variant: "text-md/medium",
        children: x.NW.string(u.Z.plwH8f)
      })]
    })
  })
}