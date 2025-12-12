/** Chunk was on web.js **/
/** chunk id: 262210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = (0, o.Z)({
    start: t,
    end: n
  });
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: a.text,
      children: (0, o.m)(s)
    }), (0, r.jsx)("div", {
      className: a.bar,
      children: (0, r.jsx)("div", {
        className: a.progress,
        style: {
          width: "".concat(100 * c, "%")
        }
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: a.text,
      children: (0, o.m)(l)
    })]
  })
}