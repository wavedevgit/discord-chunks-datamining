/** Chunk was on 28636 **/
/** chunk id: 521974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk488995 = require("./488995.js"),
  Chunk510000 = require("./510000.js");

function d(e) {
  let {
    state: t,
    query: n,
    placeholder: r,
    onTextChange: d,
    onCollapsedClick: u,
    onClear: p,
    onBlur: h,
    onSubmit: m
  } = e, b = a.useRef(null), f = a.useCallback(e => {
    "Enter" === e.key && m()
  }, [m]), g = a.useCallback(() => {
    u(), setTimeout(() => {
      var e;
      return null == (e = b.current) ? true : e.focus()
    })
  }, [u]);
  return t === c.GlobalDiscoverySearchBarState.COLLAPSED ? (0, l.jsx)(s.DUT, {
    className: o.qc,
    onClick: g,
    children: (0, l.jsx)(s.$p$, {
      size: "sm",
      color: s.LU0.colors.ICON_STRONG
    })
  }) : (0, l.jsx)("div", {
    className: i()(o.ON, {
      [o.Nz]: t === c.GlobalDiscoverySearchBarState.FLOATING
    }),
    children: (0, l.jsx)(s.IWV, {
      size: "sm",
      ref: b,
      query: n,
      placeholder: r,
      onChange: d,
      onClear: p,
      onKeyDown: f,
      onBlur: h
    })
  })
}