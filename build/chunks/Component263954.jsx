/** Chunk was on web.js **/
/** chunk id: 263954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk56589 = require("./56589.js");

function s(e) {
  let {
    icon: t,
    iconClassName: n,
    description: i,
    color: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o.perkRow,
    children: [(0, r.jsx)("div", {
      className: o.perkIconContainer,
      children: (0, r.jsx)(t, {
        color: null != s ? s : "currentColor",
        className: a()(o.perkIcon, n)
      })
    }), (0, r.jsx)("div", {
      className: o.perkDescription,
      children: i
    })]
  })
}