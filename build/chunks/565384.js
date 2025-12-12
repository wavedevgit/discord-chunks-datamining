/** Chunk was on web.js **/
/** chunk id: 565384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ez: () => m,
  Ps: () => u,
  Xo: () => p,
  dT: () => f,
  dw: () => d,
  k$: () => _
}), require("./388685.js");
var Chunk748521 = require("./748521.js"),
  Chunk990547 = require("./990547.js"),
  Chunk731965 = require("./731965.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let l = Object.freeze({
    debugTrackedData: null,
    impressions: []
  }),
  c = (0, Chunk748521.F)(e => l),
  u = e => {
    (0, a.j)(() => {
      c.setState(t => ({
        impressions: [...t.impressions, e]
      }))
    })
  },
  d = e => {
    (0, a.j)(() => {
      c.setState(t => ({
        impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
      }))
    })
  },
  f = (e, t) => {
    (0, a.j)(() => {
      c.setState(() => ({
        debugTrackedData: s({
          name: e
        }, t)
      }))
    })
  },
  p = c;

function _() {
  let e = {};
  return c.getState().impressions.forEach(t => {
    t.type === i.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
  }), module
}

function m() {
  return c.getState().impressions
}