/** Chunk was on web.js **/
/** chunk id: 746388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk664929 = require("./664929.js"),
  Chunk378271 = require("./378271.js");
let c = e => {
  let {
    showImage: t
  } = e, {
    usageWidth: n,
    descriptionWidth: a,
    sourceWidth: c
  } = i.useMemo(() => ({
    usageWidth: s().random(60, 120),
    descriptionWidth: s().random(200, 600),
    sourceWidth: s().random(45, 90)
  }), []);
  return (0, r.jsxs)("div", {
    className: l.iE,
    children: [t ? (0, r.jsx)("div", {
      className: l.Sl
    }) : null, (0, r.jsxs)("div", {
      className: l.QR,
      children: [(0, r.jsx)("div", {
        style: {
          maxWidth: (0, o.a8)(n)
        },
        className: l.nY
      }), (0, r.jsx)("div", {
        style: {
          maxWidth: (0, o.a8)(a)
        },
        className: l.h_
      })]
    }), (0, r.jsx)("div", {
      style: {
        width: (0, o.a8)(c)
      },
      className: l.sP
    })]
  })
}