/** Chunk was on web.js **/
/** chunk id: 240351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk858719 = require("./858719.js"),
  Chunk548564 = require("./548564.js");
let s = e => {
  let {
    header: t,
    displayType: n
  } = e, s = (0, a.C7)(n) > 0 ? "text-brand" : "text-muted", l = (0, a.A)(n);
  return (0, r.jsxs)("div", {
    className: o.counter,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      color: s,
      children: (0, r.jsx)(i.y5t, {
        children: l
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/semibold",
      className: o.counterText,
      children: t
    })]
  })
}