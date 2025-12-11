/** Chunk was on 53162 **/
/** chunk id: 598952, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk219745 = require("./219745.js");

function c(t) {
  var e;
  let {
    attachment: n
  } = t, c = Math.round((null != (e = n.size) ? e : 0) / 1024 / 1024 * 100) / 100;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(a.ZKT, {
      size: "xs",
      color: "currentColor",
      className: o.fileIcon
    }), (0, r.jsx)(a.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: o.fileName,
      children: n.filename
    }), (0, r.jsx)(a.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)("div", {
      className: o.dot
    }), (0, r.jsx)(a.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsxs)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [c, "MB"]
    })]
  })
}