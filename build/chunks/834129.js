/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  l = n(318713),
  s = n(394387);

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    className: a,
    children: c,
    contentClassName: u,
    iconClassName: d,
    iconContainerClassName: p,
    timestampClassName: m,
    compact: f = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(a, {
      [s.container]: !0,
      [s.compact]: f,
      [s.cozy]: !f
    }),
    children: [null != n && (0, r.jsx)("div", {
      className: o()(s.iconContainer, p),
      children: n
    }), null != t && (0, r.jsx)("div", {
      className: s.iconContainer,
      children: (0, r.jsx)("div", {
        "data-accessibility": "desaturate",
        className: o()(s.icon, s.iconSize, d),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, r.jsxs)("div", {
      className: o()(u, s.content),
      children: [c, null != i && (0, r.jsx)(l.Z, {
        timestamp: i,
        className: m
      })]
    })]
  })
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, r.jsxs)("span", {
    className: s.action,
    children: ["—", (0, r.jsx)(a.eee, {
      onClick: t,
      className: s.actionAnchor,
      children: n
    })]
  })
};
let u = c