/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v
});
var i = t(200651);
t(192379);
var r = t(793030),
  o = t(442837),
  s = t(481060),
  a = t(834129),
  l = t(271383),
  c = t(709586),
  d = t(709054),
  u = t(367123),
  x = t(388032),
  m = t(652754);

function v(e) {
  let {
    boost: n
  } = e, t = new Date(d.default.extractTimestamp(n.id)), {
    username: v,
    roleColor: p
  } = (0, o.cj)([l.ZP], () => {
    var e, t, i;
    return {
      username: null !== (i = l.ZP.getNick(n.guildId, n.userId)) && void 0 !== i ? i : null === (e = n.user) || void 0 === e ? void 0 : e.username,
      roleColor: null === (t = l.ZP.getMember(n.guildId, n.userId)) || void 0 === t ? void 0 : t.colorString
    }
  }, [n]);
  return (0, i.jsx)(a.Z, {
    className: m.systemMessageContainer,
    contentClassName: m.systemMessageContent,
    iconNode: (0, i.jsx)(c.Z, {
      className: m.icon,
      width: 16,
      height: 16
    }),
    iconContainerClassName: m.iconContainer,
    timestampClassName: m.timestamp,
    timestamp: t,
    compact: !0,
    children: (0, i.jsxs)("span", {
      className: m.boostMessage,
      children: [(0, i.jsx)(r.xv, {
        variant: "text-md/semibold",
        children: (0, i.jsx)(s.PUh, {
          name: v,
          color: null != p ? p : void 0
        })
      }), (0, i.jsx)(r.xv, {
        variant: "text-md/medium",
        children: x.NW.string(u.Z.plwH8f)
      })]
    })
  })
}