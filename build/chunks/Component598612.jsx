/** Chunk was on web.js **/
/** chunk id: 598612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk836519 = require("./836519.js");

function a(e) {
  let {
    title: t,
    subtitle: n,
    type: a = "primary"
  } = e;
  return "secondary" === a ? (0, r.jsx)(i.Kqy, {
    gap: 8,
    padding: {
      left: 12,
      right: 12
    },
    children: (0, r.jsx)(i.X6q, {
      variant: "heading-md/semibold",
      color: "text-subtle",
      children: t
    })
  }) : (0, r.jsxs)(i.Kqy, {
    gap: 8,
    padding: {
      left: 12,
      right: 12,
      bottom: 24
    },
    children: [(0, r.jsx)("div", {
      className: o.headerTitle,
      children: (0, r.jsx)(i.X6q, {
        variant: "heading-xl/normal",
        color: "text-strong",
        children: t
      })
    }), null != n && (0, r.jsx)(i.xvT, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: n
    })]
  })
}