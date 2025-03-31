/** Chunk was on 44799 **/
t.d(n, {
  Z: () => p
}), t(230036);
var r = t(200651),
  i = t(192379),
  o = t(793030),
  s = t(442837),
  a = t(179360),
  l = t(899667),
  c = t(430824),
  d = t(659679),
  u = t(388032),
  m = t(154215);

function p(e) {
  let {
    guildId: n
  } = e, t = (0, s.Wu)([l.Z], () => {
    var e;
    return null !== (e = l.Z.getAppliedGuildBoostsForGuild(n)) && void 0 !== e ? e : []
  }, [n]), p = i.useMemo(() => t.sort((e, n) => e.id < n.id ? 1 : -1), [t]), x = (0, s.e7)([c.Z], () => {
    var e;
    return null === (e = c.Z.getGuild(n)) || void 0 === e ? void 0 : e.premiumSubscriberCount
  });
  return (i.useEffect(() => {
    (0, a.C0)(n)
  }, [n, x]), 0 === p.length) ? null : (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "eyebrow",
      children: u.NW.string(u.t.yM9Krq)
    }), p.map((e, n) => (0, r.jsx)(d.Z, {
      boost: e
    }, "boost-activity-".concat(n)))]
  })
}