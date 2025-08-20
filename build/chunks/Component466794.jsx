/** Chunk was on 26434 **/
/** chunk id: 466794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk343908 = require("./343908.js");

function o(e) {
  let {
    tooltipText: t,
    textColor: n
  } = e;
  return (0, r.jsxs)("span", {
    className: l.tooltipTextContainer,
    children: [(0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: l.nitroWheel
    }), (0, r.jsx)(i.Text, {
      className: l.tooltipText,
      variant: "text-sm/medium",
      color: null != n ? n : "text-default",
      children: t
    })]
  })
}