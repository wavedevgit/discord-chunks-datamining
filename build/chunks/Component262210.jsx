/** Chunk was on web.js **/
/** chunk id: 262210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429551 = require("./429551.js"),
  Chunk538474 = require("./538474.js");

function s(e) {
  let {
    start: t,
    end: n
  } = e, {
    elapsed: s,
    duration: l,
    percentage: c
  } = (0, a.Z)({
    start: t,
    end: n
  });
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: o.text,
      children: (0, a.m)(s)
    }), (0, r.jsx)("div", {
      className: o.bar,
      children: (0, r.jsx)("div", {
        className: o.progress,
        style: {
          width: "".concat(100 * c, "%")
        }
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: o.text,
      children: (0, a.m)(l)
    })]
  })
}