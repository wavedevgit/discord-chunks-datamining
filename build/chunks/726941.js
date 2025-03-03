/** Chunk was on 37697 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  a = n(442837),
  l = n(894653),
  o = n(322665),
  s = n(17845),
  c = n(374939),
  d = n(283293),
  u = n(493646),
  p = n(292191),
  m = n(683544),
  h = n(879375);
let g = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: g,
    onScroll: f
  } = e, _ = i.useRef(null), v = i.useCallback(() => {
    var e;
    null === (e = _.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, []), b = (0, a.e7)([l.Z], () => l.Z.getCategories()), x = i.useMemo(() => b.find(e => e.id === n), [b, n]), C = i.useMemo(() => null != x ? (0, u.v)(x) : "", [x]);
  return (0, r.jsxs)(d.Z, {
    onScroll: f,
    ref: _,
    children: [(0, r.jsx)(s.Z, {
      title: null !== (t = null == x ? void 0 : x.name) && void 0 !== t ? t : "",
      description: C,
      children: (0, r.jsx)(o.Z, {})
    }), (0, r.jsx)(c.Z, {
      children: null == x ? (0, r.jsx)("div", {
        className: h.errorContainer,
        children: (0, r.jsx)(p.Z, {
          className: h.error
        })
      }) : (0, r.jsx)(m.Z, {
        categoryId: x.id,
        onSelectApplication: g,
        resetScroll: v
      })
    })]
  })
}