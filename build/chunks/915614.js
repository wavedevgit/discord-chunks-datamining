/** Chunk was on 50751 **/
n.d(t, {
  Z: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  l = n(481060),
  a = n(809357),
  s = n(772385);

function u(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: u
  } = e, c = (0, a.o)();
  return (0, i.jsxs)("div", {
    className: o()(s.buttonContainer, r),
    children: [(0, i.jsx)(l.P3F, {
      className: s.button,
      onClick: t,
      "aria-hidden": !0,
      children: (0, i.jsx)(u, {
        size: "md",
        color: "currentColor",
        "aria-hidden": !0
      })
    }), null != n && c ? (0, i.jsx)(l.Text, {
      className: s.keybind,
      "aria-hidden": !0,
      variant: "text-xxs/bold",
      color: "interactive-normal",
      children: n
    }) : null]
  })
}