/** Chunk was on 88119 **/
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(769916);

function s(e) {
  let {
    children: t,
    className: n,
    flashKey: l
  } = e, [s, c] = i.useState(!1), u = i.useRef(null);
  return i.useEffect(() => (c(!0), u.current = window.setTimeout(() => {
    c(!1)
  }, 2e3), () => {
    null != u.current && clearTimeout(u.current)
  }), [l]), (0, r.jsx)("div", {
    "data-flash": s,
    className: o()(a.flash, n),
    children: t
  })
}