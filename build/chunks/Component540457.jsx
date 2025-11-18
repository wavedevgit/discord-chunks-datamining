/** Chunk was on 32923 **/
/** chunk id: 540457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk358194 = require("./358194.js");

function s(e) {
  let {
    text: t,
    tooltipText: n,
    onClick: s,
    disabled: o
  } = e;
  return o ? (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)(l.qJs, {
      size: "md",
      color: "currentColor",
      className: a.icon
    }), (0, r.jsx)(l.Text, {
      color: "interactive-active",
      variant: "text-md/semibold",
      children: t
    })]
  }) : (0, r.jsx)(i.u, {
    text: n,
    shouldShow: null != n,
    children: (0, r.jsxs)(l.P3F, {
      className: a.container,
      onClick: s,
      children: [(0, r.jsx)(l.qJs, {
        size: "md",
        color: "currentColor",
        className: a.icon
      }), (0, r.jsx)(l.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: t
      })]
    })
  })
}