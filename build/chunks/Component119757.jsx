/** Chunk was on web.js **/
/** chunk id: 119757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk618255 = require("./618255.js");
let a = e => {
  let {
    title: t,
    subtitle: n,
    icon: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o.wrapper,
    children: [null != a && (0, r.jsx)(a, {
      size: "xs",
      color: "currentColor",
      className: o.icon
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      className: o.title,
      children: t
    }), null != n && "" !== n ? (0, r.jsx)(i.Text, {
      variant: "text-xs/semibold",
      className: o.subtitle,
      children: n
    }) : null]
  })
}