/** Chunk was on 95477 **/
r.d(t, {
  Z: () => c
}), r(388685);
var n = r(192379),
  o = r(481060),
  l = r(493773),
  i = r(81897),
  a = r(228168);

function c(e) {
  let {
    shouldShowPopoutOnHover: t,
    handlePreload: r
  } = e, [c, s] = n.useState(!1), u = n.useRef(!1), m = (0, i.Z)(), p = n.useRef(void 0), d = n.useRef(void 0), f = n.useRef(void 0);
  return ((0, l.zq)(() => {
    clearTimeout(p.current), clearTimeout(d.current), clearTimeout(f.current)
  }), t) ? {
    showPopoutFromHover: c,
    onRequestClose: () => {
      s(!1)
    },
    onMouseEnter: () => {
      let e;
      u.current = !0, p.current = setTimeout(() => {
        u.current && (e = r(m))
      }, a.a6), d.current = setTimeout(async () => {
        !(0, o.$sL)() && u.current && (null != e && await e, s(!0))
      }, a.JX)
    },
    onMouseLeave: () => {
      u.current = !1, f.current = setTimeout(() => {
        u.current || s(!1)
      }, a.Ig)
    }
  } : {
    showPopoutFromHover: !1,
    onRequestClose: void 0,
    onMouseEnter: void 0,
    onMouseLeave: void 0
  }
}