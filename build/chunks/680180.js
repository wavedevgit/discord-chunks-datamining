/** Chunk was on 37697 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(481060),
  s = n(49898),
  c = n(220487);

function d(e) {
  let {
    state: t,
    query: n,
    placeholder: a,
    onTextChange: d,
    onCollapsedClick: u,
    onClear: p,
    onBlur: m,
    onSubmit: h
  } = e, g = i.useRef(null), f = i.useCallback(e => {
    "Enter" === e.key && h()
  }, [h]), _ = i.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
    })
  }, [u]);
  return t === s.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(o.P3F, {
    className: c.searchIcon,
    onClick: _,
    children: (0, r.jsx)(o._Ve, {
      size: "md",
      color: o.TVs.colors.INTERACTIVE_NORMAL
    })
  }) : (0, r.jsx)(o.E1j, {
    ref: g,
    className: l()(c.searchBar, {
      [c.searchFloating]: t === s.GlobalDiscoverySearchBarState.FLOATING
    }),
    size: o.E1j.Sizes.MEDIUM,
    query: n,
    placeholder: a,
    onChange: d,
    onClear: p,
    onKeyDown: f,
    onBlur: m
  })
}