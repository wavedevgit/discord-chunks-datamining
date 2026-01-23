/** Chunk was on web.js **/
/** chunk id: 241387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk965609 = require("./965609.js"),
  Chunk484702 = require("./484702.js"),
  Chunk403431 = require("./403431.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = Object.freeze({
  coordsMap: {},
  visibleSections: {},
  totalHeight: 0,
  gridData: {
    boundaries: [],
    coordinates: {}
  }
});

function f(e) {
  let {
    sections: t,
    columns: n,
    getItemKey: o,
    getItemHeight: c,
    getSectionHeight: f,
    chunkSize: p = 250,
    getScrollerState: _,
    maxBufferWidth: h,
    itemGutter: m,
    removeEdgeItemGutters: g,
    sectionGutter: E,
    padding: y,
    paddingVertical: b,
    paddingHorizontal: O,
    dir: v
  } = e, A = (0, a.A)(), I = (0, r.useRef)(d), [S] = (0, r.useState)(() => new i.Ay), T = _(), C = Math.min(null != h ? h : 1 / 0, T.offsetWidth), N = null != h ? Math.max(0, T.offsetWidth - h) : 0, {
    dirty: w,
    chunkStart: R,
    chunkEnd: P,
    forceUpdateOnChunkChange: D
  } = (0, s.A)({
    chunkSize: p,
    getScrollerState: _,
    forceUpdate: A
  });
  return I.current = (0, r.useMemo)(() => w > 0 ? I.current : (S.mergeProps({
    sections: t,
    columns: n,
    getItemKey: o,
    getItemHeight: c,
    getSectionHeight: f,
    bufferWidth: C,
    itemGutter: m,
    removeEdgeItemGutters: g,
    sectionGutter: E,
    padding: y,
    paddingVertical: b,
    paddingHorizontal: O,
    marginLeft: N / 2,
    dir: v
  }), S.computeVisibleSections(Math.max(0, R * p), P * p), S.getState()), [w, S, t, n, o, c, f, R, P, p, m, g, E, y, b, O, C, N, v]), u(l({}, I.current), {
    masonryComputer: S,
    forceUpdateOnChunkChange: D,
    forceUpdate: A
  })
}