/** Chunk was on 37697 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  a = n(442837),
  l = n(322665),
  o = n(17845),
  s = n(374939),
  c = n(283293),
  d = n(493646),
  u = n(678694),
  p = n(292191),
  m = n(683544),
  h = n(879375);
let g = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: g,
    onScroll: _
  } = e, f = i.useRef(null), b = i.useCallback(() => {
    var e;
    null === (e = f.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, []), v = (0, a.e7)([u.Z], () => u.Z.getCategories()), x = i.useMemo(() => v.find(e => e.id === n), [v, n]), C = i.useMemo(() => null != x ? (0, d.v)(x) : "", [x]);
  return (0, r.jsxs)(c.Z, {
    onScroll: _,
    ref: f,
    children: [(0, r.jsx)(o.Z, {
      title: null !== (t = null == x ? void 0 : x.name) && void 0 !== t ? t : "",
      description: C,
      children: (0, r.jsx)(l.Z, {})
    }), (0, r.jsx)(s.Z, {
      children: null == x ? (0, r.jsx)("div", {
        className: h.errorContainer,
        children: (0, r.jsx)(p.Z, {
          className: h.error
        })
      }) : (0, r.jsx)(m.Z, {
        categoryId: x.id,
        onSelectApplication: g,
        resetScroll: b
      })
    })]
  })
}