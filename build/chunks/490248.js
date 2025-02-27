/** Chunk was on web.js **/
"use strict";
n.d(t, {
  L7: () => g,
  r4: () => m
}), n(266796);
var r = n(200651),
  i = n(120356),
  o = n.n(i),
  a = n(568611),
  s = n(793030),
  l = n(483444),
  c = n(787528),
  u = n(981631),
  d = n(215023),
  f = n(388032),
  _ = n(607558),
  p = n(232474);
let h = e => {
    let {
      profileBadge: t,
      imageSrc: n,
      imageClassName: i,
      headerComponent: o,
      tooltipWordmarkComponent: a,
      customDescriptionComponent: l
    } = e;
    return (0, r.jsxs)("div", {
      className: _.tooltipContainer,
      children: [(0, r.jsx)("img", {
        src: n,
        className: i,
        alt: ""
      }), (0, r.jsx)("div", {
        className: _.tooltipWordmarkContainer,
        children: a
      }), o, null != l ? l : (0, r.jsx)(s.xv, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: _.tooltipDescription,
        children: t.description
      })]
    })
  },
  g = e => {
    let {
      profileBadge: t,
      tenureBadge: n
    } = e;
    return (0, r.jsx)(h, {
      profileBadge: t,
      headerComponent: (0, r.jsx)(s.X6, {
        variant: "heading-xl/extrabold",
        children: f.NW.string(n.nameUnformatted)
      }),
      tooltipWordmarkComponent: (0, r.jsx)(l.Z, {
        width: 56,
        className: _.tooltipWordmark
      }),
      imageSrc: (0, c.J)(n.id)
    })
  },
  m = e => {
    let {
      profileBadge: t,
      viewerOwnsBadge: n = !1
    } = e;
    return (0, r.jsx)(h, {
      profileBadge: t,
      headerComponent: (0, r.jsx)(s.X6, {
        variant: "heading-xl/extrabold",
        children: "Apprentice"
      }),
      tooltipWordmarkComponent: (0, r.jsx)(s.X6, {
        variant: "heading-md/extrabold",
        className: o()(_.tooltipWordmark, _.orbBadge),
        children: f.NW.string(f.t.ElYQFR)
      }),
      imageSrc: p.Z,
      imageClassName: _.orbBadgeImage,
      customDescriptionComponent: n ? void 0 : (0, r.jsx)(a.rU, {
        to: {
          pathname: u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(d.AW.ORBS)
        },
        className: _.orbLink,
        children: f.NW.string(f.t["o/NCfn"])
      })
    })
  }