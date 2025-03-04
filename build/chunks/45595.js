/** Chunk was on 54433 **/
n.d(t, {
  H: () => u,
  Z: () => p
}), n(47120);
var l = n(200651),
  s = n(192379),
  i = n(120356),
  r = n.n(i),
  a = n(995295),
  o = n(772848),
  C = n(110924),
  d = n(120036);
let c = (0, o.Z)();

function u() {
  return (0, l.jsx)("div", {
    id: c,
    className: d.noticeBar
  })
}

function p(e) {
  let {
    show: t,
    children: n
  } = e, [l, i] = s.useState(!1), [o, u] = s.useState(!1), p = (0, C.Z)(t);
  !t || !1 !== p || l || o ? t || !p || o || l || (u(!0), setTimeout(() => u(!1), 500)) : (i(!0), setTimeout(() => i(!1), 500));
  let x = window.document.getElementById(c);
  return null != n && s.isValidElement(n) && null != x && (t || l || o) ? a.createPortal(s.cloneElement(n, {
    className: r()({
      [d.slideIn]: l,
      [d.slideOut]: o
    })
  }), x) : null
}