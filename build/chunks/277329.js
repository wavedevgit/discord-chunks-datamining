/** Chunk was on 51724 **/
n.d(t, {
  Z: () => x
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(230711),
  l = n(574755),
  o = n(663389),
  c = n(309739),
  d = n(293389),
  u = n(327885),
  m = n(326528),
  p = n(332325),
  g = n(981631),
  h = n(388032),
  f = n(289171);

function x() {
  let e = (0, m.b)(),
    t = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      className: f.heading,
      variant: "heading-xl/semibold",
      children: h.NW.string(h.t.URyqtL)
    }), (0, r.jsx)(s.njP, {
      className: f.tabBar,
      selectedItem: n,
      onItemSelect: e => {
        a.Z.setSection(g.oAB.GAMES, e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, r.jsxs)(s.njP.Item, {
        className: f.tab,
        id: e.id,
        "aria-label": e.title,
        children: [(0, r.jsx)(e.icon, {
          className: f.tabIcon,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: f.iconTitle,
          children: e.title
        })]
      }, e.id))
    }), (() => {
      switch (n) {
        case p.Z.CLIPS:
          return (0, r.jsx)(l.Z, {
            className: f.body,
            showHeader: !1
          });
        case p.Z.OVERLAY:
          return (0, r.jsx)(u.Z, {
            className: f.body,
            showHeader: !1
          });
        case p.Z.ACTIVITY_PRIVACY:
          return (0, r.jsx)(c.Z, {
            className: f.body,
            showHeader: !1
          });
        case p.Z.MY_GAMES:
        default:
          return (0, r.jsx)(d.Z, {
            className: f.body,
            showHeader: !1
          })
      }
    })()]
  })
}