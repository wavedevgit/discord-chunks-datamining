/** Chunk was on web.js **/
/** chunk id: 119757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk618255 = require("./618255.js");
let o = e => {
  let {
    title: t,
    subtitle: n,
    icon: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a.wrapper,
    children: [null != o && (0, r.jsx)(o, {
      size: "xs",
      color: "currentColor",
      className: a.icon
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      className: a.title,
      children: t
    }), null != n && "" !== n ? (0, r.jsx)(i.Text, {
      variant: "text-xs/semibold",
      className: a.subtitle,
      children: n
    }) : null]
  })
}