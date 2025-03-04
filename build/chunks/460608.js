/** Chunk was on 44799 **/
t.d(n, {
  Z: () => x
});
var r = t(200651),
  i = t(192379),
  o = t(793030),
  a = t(442837),
  s = t(179360),
  c = t(899667),
  l = t(659679),
  d = t(388032),
  u = t(549564);

function x(e) {
  let {
    guildId: n
  } = e, t = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]);
  return (i.useEffect(() => {
    (0, s.C0)(n)
  }, [n]), null == t) ? null : (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(o.X6, {
      variant: "eyebrow",
      children: d.NW.string(d.t.yM9Krq)
    }), t.map((e, n) => (0, r.jsx)(l.Z, {
      boost: e
    }, "boost-activity-".concat(n)))]
  })
}