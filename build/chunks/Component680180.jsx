/** Chunk was on 787 **/
/** chunk id: 680180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk49898 = require("./49898.js"),
  Chunk728455 = require("./728455.js");

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
  } = e, g = a.useRef(null), f = a.useCallback(e => {
    "Enter" === e.key && h()
  }, [h]), _ = a.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    })
  }, [u]);
  return t === o.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(s.P3F, {
    className: c.searchIcon,
    onClick: _,
    children: (0, r.jsx)(s._Ve, {
      size: "md",
      color: s.TVs.colors.INTERACTIVE_NORMAL
    })
  }) : (0, r.jsx)(s.E1j, {
    ref: g,
    className: l()(c.searchBar, {
      [c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING
    }),
    query: n,
    placeholder: i,
    onChange: d,
    onClear: p,
    onKeyDown: f,
    onBlur: m
  })
}