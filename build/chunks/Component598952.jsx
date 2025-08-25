/** Chunk was on 53162 **/
/** chunk id: 598952, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk294763 = require("./294763.js");

function o(t) {
  var e;
  let {
    attachment: n
  } = t, o = Math.round((null != (e = n.size) ? e : 0) / 1024 / 1024 * 100) / 100;
  return (0, a.jsxs)("div", {
    className: l.container,
    children: [(0, a.jsx)(r.ZKT, {
      size: "xs",
      color: "currentColor",
      className: l.fileIcon
    }), (0, a.jsx)(r.LZC, {
      size: 8,
      horizontal: true
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: l.fileName,
      children: n.filename
    }), (0, a.jsx)(r.LZC, {
      size: 8,
      horizontal: true
    }), (0, a.jsx)("div", {
      className: l.dot
    }), (0, a.jsx)(r.LZC, {
      size: 8,
      horizontal: true
    }), (0, a.jsxs)(r.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [o, "MB"]
    })]
  })
}