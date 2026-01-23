/** Chunk was on web.js **/
/** chunk id: 687972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  g: () => p
}), require("./65821.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk715828 = require("./715828.js"),
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
  spacerTop: 0,
  totalHeight: 0,
  items: [],
  isSidebarVisible: false
});

function f(e) {
  let {
    sections: t,
    sectionHeight: n,
    rowHeight: o,
    footerHeight: c,
    sidebarHeight: f,
    listHeaderHeight: p,
    chunkSize: _ = 256,
    paddingTop: h = 0,
    paddingBottom: m = 0,
    getScrollerState: g,
    getAnchorId: E
  } = e, y = (0, a.A)(), b = (0, r.useRef)(d), [O] = (0, r.useState)(() => new i.A), {
    dirty: v,
    chunkStart: A,
    chunkEnd: I,
    forceUpdateOnChunkChange: S
  } = (0, s.A)({
    chunkSize: _,
    getScrollerState: g,
    forceUpdate: y
  }), {
    items: T
  } = b.current, C = null, {
    scrollTop: N
  } = g();
  for (let e of T) {
    if (0 === N) break;
    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
    let t = "row" === e.type ? e.row : true;
    if (e.offsetTop >= N) {
      C = {
        id: e.anchorId,
        section: e.section,
        row: t,
        scrollOffset: e.offsetTop - N
      };
      break
    }
  }
  let w = (0, r.useMemo)(() => {
      let e = Math.max(0, A * _);
      return null != f && e < f
    }, [_, A, f]),
    R = (0, r.useMemo)(() => v > 0 ? b.current : (O.mergeProps({
      sectionHeight: n,
      rowHeight: o,
      footerHeight: c,
      listHeaderHeight: p,
      paddingBottom: m,
      paddingTop: h,
      sections: t,
      getAnchorId: E
    }), O.compute(Math.max(0, A * _), I * _)), [v, A, I, n, o, c, p, m, h, t, O, _, E]);
  return (0, r.useLayoutEffect)(() => void(b.current = R)), u(l({}, R), {
    listComputer: O,
    forceUpdateOnChunkChange: S,
    anchor: C,
    isSidebarVisible: w
  })
}

function p(e) {
  let {
    scrollerRef: t,
    anchor: n,
    getScrollerState: i,
    listComputer: a,
    getAnchorId: s,
    totalHeight: o
  } = e;
  (0, r.useLayoutEffect)(() => {
    let {
      current: e
    } = t, {
      scrollTop: r
    } = i();
    if (null == n || null == n.row || null == e || null == s || 0 === r) return;
    let o = t => {
      if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) returnfalse;
      let [i] = a.computeScrollPosition(n.section, t), o = i - n.scrollOffset;
      return r !== o && (e.scrollTop = o), true
    };
    o(n.row) || o(n.row - 1) || o(n.row + 1)
  }, [o])
}