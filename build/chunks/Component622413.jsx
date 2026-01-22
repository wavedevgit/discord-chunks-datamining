/** Chunk was on web.js **/
/** chunk id: 622413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk233645 = require("./233645.js");
let l = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: i,
    renderMedia: l,
    className: c,
    isHorizontal: u = false
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(o.Vs, {
      [o.ZQ]: u
    }, c),
    children: [(0, r.jsx)("div", {
      className: a()(o.$_, {
        [o.rO]: u
      }),
      children: null == l ? true : l()
    }), (0, r.jsxs)("div", {
      className: o.h_,
      children: [(0, r.jsx)(s.H, {
        className: o.DD,
        children: null == t ? true : t()
      }), (0, r.jsx)("div", {
        className: o.dS,
        children: null == n ? true : n()
      }), (0, r.jsx)("div", {
        className: o.o1,
        children: null == i ? true : i()
      })]
    })]
  })
}