/** Chunk was on web.js **/
/** chunk id: 342687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk826298 = require("./826298.js"),
  Chunk231790 = require("./231790.js");
let c = e => {
  let {
    showImage: t
  } = e, {
    usageWidth: n,
    descriptionWidth: a,
    sourceWidth: c
  } = i.useMemo(() => ({
    usageWidth: o().random(60, 120),
    descriptionWidth: o().random(200, 600),
    sourceWidth: o().random(45, 90)
  }), []);
  return (0, r.jsxs)("div", {
    className: l.wrapper,
    children: [t ? (0, r.jsx)("div", {
      className: l.image
    }) : null, (0, r.jsxs)("div", {
      className: l.infoWrapper,
      children: [(0, r.jsx)("div", {
        style: {
          maxWidth: (0, s.Q1)(n)
        },
        className: l.usageWrapper
      }), (0, r.jsx)("div", {
        style: {
          maxWidth: (0, s.Q1)(a)
        },
        className: l.description
      })]
    }), (0, r.jsx)("div", {
      style: {
        width: (0, s.Q1)(c)
      },
      className: l.source
    })]
  })
}