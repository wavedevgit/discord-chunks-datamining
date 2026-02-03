/** Chunk was on 71447 **/
/** chunk id: 676923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk791895 = require("./791895.js");

function u(e) {
  let {
    tooltipText: t,
    showTooltip: n = true,
    className: r,
    ariaLabel: u,
    onClick: c,
    onMouseEnter: d,
    onMouseLeave: h,
    children: p
  } = e, f = null != u ? u : t, g = (0, i.jsx)(s.DUT, {
    className: l()(o.k, r),
    "aria-label": f,
    onClick: c,
    onMouseEnter: d,
    onMouseLeave: h,
    role: "button",
    children: p
  });
  return n ? (0, i.jsx)(a.m_, {
    text: t,
    "aria-label": f,
    children: g
  }) : g
}