/** Chunk was on 4493 **/
r.d(t, {
  Z: () => m
}), r(47120);
var n = r(200651),
  a = r(192379),
  i = r(120356),
  o = r.n(i),
  l = r(793030),
  s = r(481060),
  c = r(383895),
  u = r(388032),
  d = r(384370),
  p = r(32559);

function m(e) {
  let {
    entries: t,
    viewId: r,
    officialGuildId: i,
    onClose: m
  } = e, f = t.length > 7, [g, _] = a.useState(!1), b = a.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.X6, {
      className: d.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: u.NW.string(u.t.ak8OHh)
    }), 0 === t.length ? (0, n.jsx)(l.xv, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: p.emptyState,
      children: u.NW.string(u.t.R5fYVF)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: o()(p.friends, {
          [p.fadedEntries]: f && !g
        }),
        children: (0, n.jsx)("div", {
          className: d.column,
          children: b.map(e => (0, n.jsx)(c.Z, {
            entry: e,
            viewId: r,
            onClose: m,
            officialGuildId: i
          }, e.id))
        })
      }), f && !g && (0, n.jsxs)(s.P3F, {
        className: p.expandEntriesButton,
        onClick: () => _(!0),
        children: [(0, n.jsx)(l.xv, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: u.NW.string(u.t.yohc6O)
        }), (0, n.jsx)(s.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}