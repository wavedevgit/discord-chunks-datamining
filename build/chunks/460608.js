/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v
});
var r = t(200651),
  i = t(192379),
  o = t(793030),
  s = t(442837),
  a = t(179360),
  l = t(899667),
  c = t(659679),
  d = t(388032),
  u = t(549564);

function v(e) {
  let {
    guildId: n
  } = e, t = (0, s.e7)([l.Z], () => l.Z.getAppliedGuildBoostsForGuild(n), [n]);
  return (i.useEffect(() => {
    (0, a.C0)(n)
  }, [n]), null == t) ? null : (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "eyebrow",
      children: d.NW.string(d.t.yM9Krq)
    }), t.map((e, n) => (0, r.jsx)(c.Z, {
      boost: e
    }, "boost-activity-".concat(n)))]
  })
}