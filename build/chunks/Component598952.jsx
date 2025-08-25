/** Chunk was on 53162 **/
/** chunk id: 598952, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk294763 = require("./294763.js");

function l(t) {
  var a;
  let {
    attachment: n
  } = t, l = Math.round((null != (a = n.size) ? a : 0) / 1024 / 1024 * 100) / 100;
  return (0, e.jsxs)("div", {
    className: i.container,
    children: [(0, e.jsx)(o.ZKT, {
      size: "xs",
      color: "currentColor",
      className: i.fileIcon
    }), (0, e.jsx)(o.LZC, {
      size: 8,
      horizontal: true
    }), (0, e.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: i.fileName,
      children: n.filename
    }), (0, e.jsx)(o.LZC, {
      size: 8,
      horizontal: true
    }), (0, e.jsx)("div", {
      className: i.dot
    }), (0, e.jsx)(o.LZC, {
      size: 8,
      horizontal: true
    }), (0, e.jsxs)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [l, "MB"]
    })]
  })
}