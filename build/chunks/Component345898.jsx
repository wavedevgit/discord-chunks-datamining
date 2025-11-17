/** Chunk was on web.js **/
/** chunk id: 345898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk569943 = require("./569943.js");
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
    className: a()(s.tile, {
      [s.tileHorizontal]: u
    }, c),
    children: [(0, r.jsx)("div", {
      className: a()(s.media, {
        [s.mediaHorizontal]: u
      }),
      children: null == l ? true : l()
    }), (0, r.jsxs)("div", {
      className: s.description,
      children: [(0, r.jsx)(o.H, {
        className: s.title,
        children: null == t ? true : t()
      }), (0, r.jsx)("div", {
        className: s.tagline,
        children: null == n ? true : n()
      }), (0, r.jsx)("div", {
        className: s.actions,
        children: null == i ? true : i()
      })]
    })]
  })
}