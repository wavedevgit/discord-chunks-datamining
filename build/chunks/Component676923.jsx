/** Chunk was on 7685 **/
/** chunk id: 676923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
    children: g
  } = e, f = null != u ? u : t, p = (0, l.jsx)(a.DUT, {
    className: i()(o.k, r),
    "aria-label": f,
    onClick: c,
    onMouseEnter: d,
    onMouseLeave: h,
    role: "button",
    children: g
  });
  return n ? (0, l.jsx)(s.m_, {
    text: t,
    "aria-label": f,
    children: p
  }) : p
}