/** Chunk was on 44088 **/
i.d(t, {
  Z: () => c
});
var n = i(200651),
  r = i(192379),
  l = i(120356),
  a = i.n(l),
  s = i(481060),
  o = i(516623);
let c = r.memo(function(e) {
  let {
    text: t,
    variant: i = "text-xs/medium",
    color: l = "text-normal",
    icon: c,
    className: u,
    selected: d,
    onMouseEnter: m,
    onMouseLeave: f,
    onClick: g
  } = e, h = r.useMemo(() => {
    if (null != g) return () => g(t)
  }, [g, t]);
  return (0, n.jsxs)(s.P3F, {
    tabIndex: null == g ? -1 : 0,
    className: a()(o.trait, {
      [o.selectable]: null != h && !d,
      [o.selected]: d,
      [o.clickable]: null != h
    }, u),
    onMouseEnter: m,
    onMouseLeave: f,
    onClick: h,
    children: [null != c && (0, n.jsx)(c, {
      size: "xs",
      color: "currentColor"
    }), (0, n.jsx)(s.Text, {
      variant: i,
      color: l,
      lineClamp: 1,
      children: t
    })]
  })
})