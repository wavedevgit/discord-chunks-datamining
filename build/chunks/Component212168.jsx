/** Chunk was on web.js **/
/** chunk id: 212168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  i: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk446958 = require("./446958.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk446958.wU,
      background: Chunk446958.gI
    },
    limited: {
      border: Chunk446958.rY,
      background: Chunk446958.pm
    }
  },
  u = Chunk64700.forwardRef(function(e, t) {
    let {
      children: n,
      type: i = "premium",
      isShown: a,
      hasBackground: l = false,
      className: u,
      backgroundClassName: d
    } = e;
    if (!a) return n;
    let {
      border: f,
      background: p
    } = c[i];
    return (0, r.jsx)("div", {
      ref: t,
      className: s()(f, u),
      children: (0, r.jsx)("div", {
        className: s()(l ? p : o.Tp, d),
        children: n
      })
    })
  })