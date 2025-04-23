/** Chunk was on 76346 **/
r.d(t, {
  Z: () => c
});
var n = r(200651);
r(192379);
var i = r(120356),
  s = r.n(i),
  l = r(481060),
  o = r(679768),
  a = r(456411);

function c(e) {
  let {
    copy: t,
    showStars: r = !0,
    className: i
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(a.badgeContainer, i),
    children: [r && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("span", {
        className: s()(a.star, a.starLeft),
        children: (0, n.jsx)(o.Z, {
          width: "10",
          height: "10"
        })
      }), (0, n.jsx)("span", {
        className: s()(a.star, a.starRight),
        children: (0, n.jsx)(o.Z, {
          width: "14",
          height: "14"
        })
      })]
    }), (0, n.jsx)(l.Text, {
      variant: "eyebrow",
      className: a.newBadge,
      children: t
    })]
  })
}