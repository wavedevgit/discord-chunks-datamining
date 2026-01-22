/** Chunk was on web.js **/
/** chunk id: 686757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SD: () => p,
  Vm: () => u,
  eE: () => f,
  g$: () => _,
  u5: () => d,
  uJ: () => h
}), require("./896048.js");
var Chunk265690 = require("./265690.js"),
  Chunk110259 = require("./110259.js"),
  Chunk121894 = require("./121894.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let l = Object.freeze({
    debugTrackedData: null,
    impressions: []
  }),
  c = (0, Chunk265690.h)(e => l),
  u = e => {
    (0, a.r)(() => {
      c.setState(t => ({
        impressions: [...t.impressions, e]
      }))
    })
  },
  d = e => {
    (0, a.r)(() => {
      c.setState(t => ({
        impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
      }))
    })
  },
  f = (e, t) => {
    (0, a.r)(() => {
      c.setState(() => ({
        debugTrackedData: o({
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
  }), e
}

function h() {
  return c.getState().impressions
}