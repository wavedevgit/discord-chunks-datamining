/** Chunk was on 66866 **/
/** chunk id: 466794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk343908 = require("./343908.js");

function a(e) {
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