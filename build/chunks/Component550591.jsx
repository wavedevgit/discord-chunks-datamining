/** Chunk was on 97492 **/
/** chunk id: 550591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    forceOpen: f,
    selected: p = false
  } = e, h = l.useMemo(() => null == n || c ? null : (0, r.jsx)("div", {
    className: o.SH,
    children: n
  }), [n, c]), b = i ? t : (0, r.jsx)("div", {
    className: a()(o.pm, {
      [o.wH]: p
    }),
    children: t
  });
  return (0, r.jsx)(s.m_, {
    __unsupportedReactNodeAsText: h,
    position: "right",
    spacing: 12,
    hideOnClick: u,
    shouldShow: d,
    forceOpen: f,
    ariaHidden: true,
    asContainer: !i,
    children: b
  })
}