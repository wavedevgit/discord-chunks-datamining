/** Chunk was on 95477 **/
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  l = n(493773),
  o = n(81897),
  i = n(228168);

function a(e) {
  let {
    shouldShowPopoutOnHover: t,
    handlePreload: n
  } = e, [a, s] = r.useState(!1), c = r.useRef(!1), u = (0, o.Z)(), d = r.useRef(void 0), m = r.useRef(void 0), p = r.useRef(void 0);
  return ((0, l.zq)(() => {
    clearTimeout(d.current), clearTimeout(m.current), clearTimeout(p.current)
  }), t) ? {
    showPopoutFromHover: a,
    onRequestClose: () => {
      s(!1)
    },
    onMouseEnter: () => {
      let e;
      c.current = !0, d.current = setTimeout(() => {
        c.current && (e = n(u))
      }, i.a6), m.current = setTimeout(async () => {
        c.current && (null != e && await e, s(!0))
      }, i.JX)
    },
    onMouseLeave: () => {
      c.current = !1, p.current = setTimeout(() => {
        c.current || s(!1)
      }, i.Ig)
    }
  } : {
    showPopoutFromHover: !1,
    onRequestClose: void 0,
    onMouseEnter: void 0,
    onMouseLeave: void 0
  }
}