/** Chunk was on web.js **/
/** chunk id: 539041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk324060 = require("./324060.js"),
  Chunk352936 = require("./352936.js");

function u(e) {
  let {
    children: t,
    useTopRightClipPath: n = false,
    innerClassName: a
  } = e, u = i.useContext(l.Q), d = (0, s.dQu)(u.primaryColor).hex();
  return (0, r.jsxs)("div", {
    className: o()(n ? c.containerClipped : c.container),
    children: [(0, r.jsx)("div", {
      className: c.outerBorder,
      style: {
        borderColor: d
      }
    }), (0, r.jsx)("div", {
      className: c.outerBorderAngleTopRight,
      style: {
        backgroundColor: d
      }
    }), (0, r.jsx)("div", {
      className: c.outerBorderAngleBottomLeft,
      style: {
        backgroundColor: d
      }
    }), (0, r.jsx)("div", {
      className: c.outerBorderAngleBottomRight,
      style: {
        backgroundColor: d
      }
    }), (0, r.jsx)("div", {
      className: o()(c.innerBorder, a),
      style: {
        borderColor: d
      },
      children: t
    })]
  })
}