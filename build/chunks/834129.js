/** Chunk was on 11814 (b9188d9bdd9a4469.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  l = n(318713),
  s = n(939448);

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    className: o,
    children: c,
    contentClassName: d,
    iconClassName: u,
    iconContainerClassName: p,
    compact: m = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(o, {
      [s.container]: !0,
      [s.compact]: m,
      [s.cozy]: !m
    }),
    children: [null != n && (0, r.jsx)("div", {
      className: a()(s.iconContainer, p),
      children: n
    }), null != t && (0, r.jsx)("div", {
      className: s.iconContainer,
      children: (0, r.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a()(s.icon, s.iconSize, u),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, r.jsxs)("div", {
      className: a()(d, s.content),
      children: [c, null != i && (0, r.jsx)(l.Z, {
        timestamp: i
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
    children: ["—", (0, r.jsx)(o.eee, {
      onClick: t,
      className: s.actionAnchor,
      children: n
    })]
  })
};
let d = c