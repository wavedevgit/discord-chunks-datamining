/** Chunk was on 11810 **/
/** chunk id: 557420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk40462 = require("./40462.js");

function c(e) {
  let {
    text: t,
    tooltipText: n,
    onClick: c,
    disabled: s
  } = e;
  return s ? (0, r.jsxs)("div", {
    className: o.k,
    children: [(0, r.jsx)(l.j96, {
      size: "md",
      color: "currentColor",
      className: o.K
    }), (0, r.jsx)(l.Text, {
      color: "interactive-text-active",
      variant: "text-md/semibold",
      children: t
    })]
  }) : (0, r.jsx)(i.m, {
    text: n,
    shouldShow: null != n,
    children: (0, r.jsxs)(l.DUT, {
      className: o.k,
      onClick: c,
      children: [(0, r.jsx)(l.j96, {
        size: "md",
        color: "currentColor",
        className: o.K
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-active",
        variant: "text-md/semibold",
        children: t
      })]
    })
  })
}