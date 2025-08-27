/** Chunk was on web.js **/
/** chunk id: 342687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk826298 = require("./826298.js"),
  Chunk443089 = require("./443089.js");
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