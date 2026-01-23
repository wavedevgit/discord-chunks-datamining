/** Chunk was on 28636 **/
/** chunk id: 521974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk488995 = require("./488995.js"),
  Chunk510000 = require("./510000.js");

function d(e) {
  let {
    state: t,
    query: n,
    placeholder: i,
    onTextChange: d,
    onCollapsedClick: u,
    onClear: p,
    onBlur: h,
    onSubmit: m
  } = e, g = l.useRef(null), _ = l.useCallback(e => {
    "Enter" === e.key && m()
  }, [m]), b = l.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    })
  }, [u]);
  return t === o.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(s.DUT, {
    className: c.qc,
    onClick: b,
    children: (0, r.jsx)(s.$p$, {
      size: "sm",
      color: s.LU0.colors.ICON_STRONG
    })
  }) : (0, r.jsx)("div", {
    className: a()(c.ON, {
      [c.Nz]: t === o.GlobalDiscoverySearchBarState.FLOATING
    }),
    children: (0, r.jsx)(s.IWV, {
      size: "sm",
      ref: g,
      query: n,
      placeholder: i,
      onChange: d,
      onClear: p,
      onKeyDown: _,
      onBlur: h
    })
  })
}