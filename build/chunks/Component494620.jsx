/** Chunk was on web.js **/
/** chunk id: 494620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk581896 = require("./581896.js"),
  l = function(e) {
    return e.INFO = "info", e.WARNING = "warning", e
  }({});
let c = {
    info: Chunk581896.info,
    warning: Chunk581896.warning
  },
  u = {
    info: Chunk481060.d3s,
    warning: Chunk481060.Mgn
  };

function d(e) {
  let {
    children: t,
    className: n,
    look: i = "info"
  } = e, l = u[i];
  return (0, r.jsxs)("div", {
    className: a()(s.root, n, c[i]),
    children: [(0, r.jsx)(l, {
      className: s.icon,
      color: "currentColor"
    }), (0, r.jsx)(o.Text, {
      className: s.text,
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    })]
  })
}