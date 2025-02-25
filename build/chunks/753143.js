/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => f,
  r: () => _
}), n(411104), n(47120);
var r = n(192379),
  i = n(134158),
  o = n(924428),
  a = n(151973);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  spacerTop: 0,
  totalHeight: 0,
  items: [],
  isSidebarVisible: !1
});

function f(e) {
  let {
    sections: t,
    sectionHeight: n,
    rowHeight: s,
    footerHeight: c,
    sidebarHeight: f,
    listHeaderHeight: _,
    chunkSize: p = 256,
    paddingTop: h = 0,
    paddingBottom: g = 0,
    getScrollerState: m,
    getAnchorId: E
  } = e, v = (0, o.Z)(), b = (0, r.useRef)(d), [y] = (0, r.useState)(() => new i.Z), {
    dirty: O,
    chunkStart: S,
    chunkEnd: I,
    forceUpdateOnChunkChange: T
  } = (0, a.Z)({
    chunkSize: p,
    getScrollerState: m,
    forceUpdate: v
  }), {
    items: N
  } = b.current, A = null, {
    scrollTop: C
  } = m();
  for (let e of N) {
    if (0 === C) break;
    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
    let t = "row" === e.type ? e.row : void 0;
    if (e.offsetTop >= C) {
      A = {
        id: e.anchorId,
        section: e.section,
        row: t,
        scrollOffset: e.offsetTop - C
      };
      break
    }
  }
  let R = (0, r.useMemo)(() => {
      let e = Math.max(0, S * p);
      return null != f && e < f
    }, [p, S, f]),
    P = (0, r.useMemo)(() => O > 0 ? b.current : (y.mergeProps({
      sectionHeight: n,
      rowHeight: s,
      footerHeight: c,
      listHeaderHeight: _,
      paddingBottom: g,
      paddingTop: h,
      sections: t,
      getAnchorId: E
    }), y.compute(Math.max(0, S * p), I * p)), [O, S, I, n, s, c, _, g, h, t, y, p, E]);
  return (0, r.useLayoutEffect)(() => void(b.current = P)), u(l({}, P), {
    listComputer: y,
    forceUpdateOnChunkChange: T,
    anchor: A,
    isSidebarVisible: R
  })
}

function _(e) {
  let {
    scrollerRef: t,
    anchor: n,
    getScrollerState: i,
    listComputer: o,
    getAnchorId: a,
    totalHeight: s
  } = e;
  (0, r.useLayoutEffect)(() => {
    let {
      current: e
    } = t, {
      scrollTop: r
    } = i();
    if (null == n || null == n.row || null == e || null == a || 0 === r) return;
    let s = t => {
      if (t < 0 || t >= o.sections[n.section] || a(n.section, n.row) !== n.id) return !1;
      let [i] = o.computeScrollPosition(n.section, t), s = i - n.scrollOffset;
      return r !== s && (e.scrollTop = s), !0
    };
    !s(n.row) && (s(n.row - 1) || s(n.row + 1))
  }, [s])
}