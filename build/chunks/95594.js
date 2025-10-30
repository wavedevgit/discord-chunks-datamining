/** Chunk was on web.js **/
/** chunk id: 95594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk663507 = require("./663507.js"),
  Chunk924428 = require("./924428.js"),
  Chunk151973 = require("./151973.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
    getItemKey: s,
    getItemHeight: c,
    getSectionHeight: f,
    chunkSize: _ = 250,
    getScrollerState: p,
    maxBufferWidth: h,
    itemGutter: m,
    removeEdgeItemGutters: g,
    sectionGutter: E,
    padding: b,
    paddingVertical: y,
    paddingHorizontal: O,
    dir: v
  } = e, I = (0, a.Z)(), T = (0, r.useRef)(d), [S] = (0, r.useState)(() => new i.ZP), A = p(), C = Math.min(null != h ? h : 1 / 0, A.offsetWidth), N = null != h ? Math.max(0, A.offsetWidth - h) : 0, {
    dirty: R,
    chunkStart: P,
    chunkEnd: w,
    forceUpdateOnChunkChange: D
  } = (0, o.Z)({
    chunkSize: _,
    getScrollerState: p,
    forceUpdate: I
  });
  return T.current = (0, r.useMemo)(() => R > 0 ? T.current : (S.mergeProps({
    sections: t,
    columns: n,
    getItemKey: s,
    getItemHeight: c,
    getSectionHeight: f,
    bufferWidth: C,
    itemGutter: m,
    removeEdgeItemGutters: g,
    sectionGutter: E,
    padding: b,
    paddingVertical: y,
    paddingHorizontal: O,
    marginLeft: N / 2,
    dir: v
  }), S.computeVisibleSections(Math.max(0, P * _), w * _), S.getState()), [R, S, t, n, s, c, f, P, w, _, m, g, E, b, y, O, C, N, v]), u(l({}, T.current), {
    masonryComputer: S,
    forceUpdateOnChunkChange: D,
    forceUpdate: I
  })
}