/** Chunk was on 53494 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  a = n(270779);

function s(e) {
  let {
    total: t,
    users: n,
    videoLimit: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a.wrapper,
    children: [(0, r.jsxs)("span", {
      className: o()(a.users, {
        [a.video]: i,
        [a.extraLong]: n >= 100
      }),
      children: [i ? (0, r.jsx)(l.Odl, {
        size: "md",
        color: "currentColor",
        className: a.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, r.jsx)("span", {
      className: o()(a.total, {
        [a.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}