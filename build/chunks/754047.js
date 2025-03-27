/** Chunk was on 95477 **/
r.d(t, {
  Z: () => l
}), r(47120);
var n = r(192379),
  i = r(493773),
  o = r(228168);

function l(e) {
  let {
    shouldShowPopoutOnHover: t,
    handlePreload: r
  } = e, [l, a] = n.useState(!1), c = n.useRef(void 0), s = n.useRef(void 0), u = n.useRef(void 0);
  (0, i.zq)(() => () => {
    clearTimeout(c.current), clearTimeout(s.current), clearTimeout(u.current)
  });
  let p = n.useRef(!1);
  return t ? {
    showPopoutFromHover: l,
    handleMouseEnter: () => {
      p.current = !0, c.current = setTimeout(() => {
        p.current && r()
      }, o.a6), s.current = setTimeout(() => {
        p.current && a(!0)
      }, o.JX)
    },
    handleMouseLeave: () => {
      p.current = !1, u.current = setTimeout(() => {
        p.current || a(!1)
      }, o.Ig)
    }
  } : {}
}