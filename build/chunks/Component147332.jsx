/** Chunk was on web.js **/
/** chunk id: 147332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk514749 = require("./514749.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk933240 = require("./933240.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = e => (0, r.jsx)(p, d({}, e)),
  p = e => {
    let {
      unifiedStepProps: t
    } = e, {
      leftColumnComponent: n,
      rightColumnComponent: o,
      primaryCTAButtonProps: s,
      onBackClick: u
    } = t;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.C3, {
        children: (0, r.jsxs)("div", {
          className: c.stepBody,
          children: [n, o]
        })
      }), (0, r.jsx)(a.O3, {
        children: (0, r.jsx)(l.Ds, {
          onBackClick: u,
          primaryCTAButtonProps: s,
          justify: i.Z.Justify.BETWEEN,
          align: i.Z.Align.CENTER
        })
      })]
    })
  },
  _ = (0, Chunk514749.q)({
    step: Chunk409813.h8.GIFT_CUSTOMIZATION,
    renderStep: f,
    DirectStepComponent: p
  })