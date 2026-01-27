/** Chunk was on 41727 **/
/** chunk id: 550591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk354071 = require("./354071.js");

function c(e) {
  let {
    children: t,
    text: n,
    disableWrapper: i = false,
    disabled: c = false,
    hideOnClick: u = true,
    shouldShow: d,
    forceOpen: p,
    selected: h = false
  } = e, f = l.useMemo(() => null == n || c ? null : (0, r.jsx)("div", {
    className: o.SH,
    children: n
  }), [n, c]), g = i ? t : (0, r.jsx)("div", {
    className: s()(o.pm, {
      [o.wH]: h
    }),
    children: t
  });
  return (0, r.jsx)(a.m_, {
    __unsupportedReactNodeAsText: f,
    position: "right",
    spacing: 12,
    hideOnClick: u,
    shouldShow: d,
    forceOpen: p,
    ariaHidden: true,
    asContainer: !i,
    children: g
  })
}