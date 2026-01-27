/** Chunk was on web.js **/
/** chunk id: 801264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  k: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk51130 = require("./51130.js"),
  l = function(e) {
    return e.INFO = "info", e.WARNING = "warning", e
  }({});
let c = {
    info: Chunk51130.pq,
    warning: Chunk51130.$e
  },
  u = {
    info: Chunk397927.mir,
    warning: Chunk397927.EpV
  };

function d(e) {
  let {
    children: t,
    className: n,
    look: i = "info"
  } = e, l = u[i];
  return (0, r.jsxs)("div", {
    className: a()(s.zr, n, c[i]),
    children: [(0, r.jsx)(l, {
      className: s.Kk,
      color: "currentColor"
    }), (0, r.jsx)(o.Text, {
      className: s.Qq,
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    })]
  })
}