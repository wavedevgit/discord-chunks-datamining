/** Chunk was on 90728 (f68c32709458369a.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(481060),
  s = n(49898),
  c = n(49074);

function d(e) {
  let {
    state: t,
    query: n,
    placeholder: i,
    onTextChange: d,
    onCollapsedClick: u,
    onClear: p,
    onBlur: m,
    onSubmit: h
  } = e, g = a.useRef(null), _ = a.useCallback(e => {
    "Enter" === e.key && h()
  }, [h]), f = a.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
    })
  }, [u]);
  return t === s.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(o.P3F, {
    className: c.searchIcon,
    onClick: f,
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
    placeholder: i,
    onChange: d,
    onClear: p,
    onKeyDown: _,
    onBlur: m
  })
}