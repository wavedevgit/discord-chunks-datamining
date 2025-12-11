/** Chunk was on 92504 **/
/** chunk id: 680180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk49898 = require("./49898.js"),
  Chunk447141 = require("./447141.js");

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
  } = e, f = r.useRef(null), b = r.useCallback(e => {
    "Enter" === e.key && h()
  }, [h]), g = r.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null == (e = f.current) ? true : e.focus()
    })
  }, [u]);
  return t === o.GlobalDiscoverySearchBarState.COLLAPSED ? (0, a.jsx)(s.P3F, {
    className: c.searchIcon,
    onClick: g,
    children: (0, a.jsx)(s._Ve, {
      size: "sm",
      color: s.TVs.colors.ICON_STRONG
    })
  }) : (0, a.jsx)("div", {
    className: l()(c.searchBar, {
      [c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING
    }),
    children: (0, a.jsx)(s.E1j, {
      size: "sm",
      ref: f,
      query: n,
      placeholder: i,
      onChange: d,
      onClear: p,
      onKeyDown: b,
      onBlur: m
    })
  })
}