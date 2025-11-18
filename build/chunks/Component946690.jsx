/** Chunk was on web.js **/
/** chunk id: 946690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk152269 = require("./152269.js"),
  Chunk357898 = require("./357898.js");
let c = e => {
  let {
    icon: t,
    iconClassName: n,
    header: i,
    description: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.container, s.box),
    children: [(0, r.jsx)("div", {
      className: l.circle,
      children: (0, r.jsx)(t, {
        className: a()(l.icon, n),
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/bold",
        className: l.header,
        children: (0, r.jsx)(o.y5t, {
          children: i
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: c
      })]
    })]
  })
}