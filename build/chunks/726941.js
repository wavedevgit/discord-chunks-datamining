/** Chunk was on 97231 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  a = n(192379),
  i = n(442837),
  l = n(322665),
  o = n(17845),
  s = n(374939),
  c = n(283293),
  d = n(493646),
  u = n(678694),
  p = n(292191),
  m = n(683544),
  h = n(305562);
let g = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: g,
    onScroll: f
  } = e, _ = a.useRef(null), b = a.useCallback(() => {
    var e;
    null === (e = _.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, []), v = (0, i.e7)([u.Z], () => u.Z.getCategories()), x = a.useMemo(() => v.find(e => e.id === n), [v, n]), C = a.useMemo(() => null != x ? (0, d.v)(x) : "", [x]);
  return (0, r.jsxs)(c.Z, {
    onScroll: f,
    ref: _,
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