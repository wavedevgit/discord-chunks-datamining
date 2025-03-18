/** Chunk was on 82520 **/
n.d(t, {
  Z: () => o
});
var a = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  s = n(481060),
  c = n(925329),
  r = n(997902);

function o(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: i
  } = e;
  if (n.length <= 0) return null;
  if (1 === n.length) return (0, a.jsx)("div", {
    className: l()(r.container, t, i && r.modeMuted),
    children: (0, a.jsx)(c.Z, {
      game: n[0].application,
      className: r.icon20px
    })
  });
  {
    let e = n.length - 1;
    return (0, a.jsxs)("div", {
      className: l()(r.container, t, i && r.modeMuted),
      children: [(0, a.jsx)(c.Z, {
        game: n[0].application,
        className: r.icon20px
      }), 2 === n.length ? (0, a.jsx)(c.Z, {
        game: n[1].application,
        className: r.icon20px
      }) : (0, a.jsx)(s.Text, {
        className: r.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}