/** Chunk was on web.js **/
/** chunk id: 359255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk996014 = require("./996014.js");

function u(e) {
  return "" === e || "-" === e
}
let d = e => {
  let {
    value: t,
    onChange: n,
    className: a,
    minValue: d,
    maxValue: f
  } = e, [_, p] = i.useState(t), h = u(_) || null != d && _ <= d, m = u(_) || null != f && _ >= f, g = e => {
    n(u(e) ? null != d ? d : 0 : e), p(e)
  }, E = e => {
    e.stopPropagation(), h || g(_ - 1)
  }, b = e => {
    e.stopPropagation(), m || g(_ + 1)
  }, y = e => {
    if (u(e)) return g(e);
    let t = parseInt(e);
    if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t)
  };
  return (0, r.jsx)(l.tEY, {
    within: true,
    children: (0, r.jsxs)("div", {
      className: o()(c.actions, a),
      children: [(0, r.jsx)(l.P3F, {
        onClick: E,
        tabIndex: false,
        className: o()(c.iconWrapper, c.__invalid_subtract, {
          [c.disabled]: h
        }),
        children: (0, r.jsx)(l.V_R, {
          size: "md",
          color: "currentColor",
          className: o()(c.icon, {
            [c.disabled]: h
          })
        })
      }), (0, r.jsx)(s.Is, {
        value: "".concat(_),
        onChange: y,
        inputClassName: c.value
      }), (0, r.jsx)(l.P3F, {
        onClick: b,
        tabIndex: false,
        className: o()(c.iconWrapper, c.__invalid_add, {
          [c.disabled]: m
        }),
        children: (0, r.jsx)(l.qJs, {
          size: "md",
          color: "currentColor",
          className: o()(c.icon, {
            [c.disabled]: m
          })
        })
      })]
    })
  })
}