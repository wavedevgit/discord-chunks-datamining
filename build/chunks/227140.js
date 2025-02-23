/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  o = n(679768),
  s = n(436199);

function c(e) {
  let {
    copy: t,
    showStars: n = !0,
    className: a
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(s.badgeContainer, a),
    children: [n && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        className: i()(s.star, s.starLeft),
        children: (0, r.jsx)(o.Z, {
          width: "10",
          height: "10"
        })
      }), (0, r.jsx)("span", {
        className: i()(s.star, s.starRight),
        children: (0, r.jsx)(o.Z, {
          width: "14",
          height: "14"
        })
      })]
    }), (0, r.jsx)(l.Text, {
      variant: "eyebrow",
      className: s.newBadge,
      children: t
    })]
  })
}