/** Chunk was on web.js **/
/** chunk id: 355336, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk155127 = require("./155127.js"),
  Chunk780900 = require("./780900.js"),
  Chunk901259 = require("./901259.js");

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

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e, t) {
  let n = new Map,
    a = new t(e => {
      e.forEach(e => {
        var t;
        let {
          target: r
        } = e;
        null == (t = n.get(r)) || t(e)
      })
    });
  return i.forwardRef(function(t, u) {
    var {
      children: f,
      className: h,
      onResize: m,
      contentClassName: g,
      onScroll: E,
      dir: b = "ltr",
      fade: y = false,
      customTheme: O = false,
      style: v
    } = t, I = p(t, ["children", "className", "onResize", "contentClassName", "onScroll", "dir", "fade", "customTheme", "style"]);
    let T = i.useRef(null),
      S = i.useRef(null),
      [A, C] = i.useState(false),
      {
        scrollerRef: N,
        getScrollerState: R
      } = (0, l.Ke)(),
      P = (0, l.t2)(N);
    i.useImperativeHandle(u, () => d({
      getScrollerNode: () => N.current,
      isScrolling: () => null != T.current,
      getScrollerState: R
    }, (0, l.Ue)(N, R, P)), [N, R, P]);
    let D = i.useCallback(e => {
      null == T.current ? C(true) : clearTimeout(T.current), T.current = setTimeout(() => {
        T.current = null, C(false)
      }, 200), null != E && E(e)
    }, [E]);
    return i.useEffect(() => () => clearTimeout(T.current), []), (0, l.zn)({
      ref: N,
      key: "container",
      onUpdate: m,
      resizeObserver: a,
      listenerMap: n
    }), (0, l.zn)({
      ref: S,
      key: "content",
      onUpdate: m,
      resizeObserver: a,
      listenerMap: n
    }), (0, r.jsx)("div", _(d({
      ref: N,
      className: o()(h, {
        [c.fade]: y,
        [c.customTheme]: O,
        [e]: true,
        [c.managedReactiveScroller]: true,
        [c.scrolling]: A && y
      }),
      style: v,
      dir: b,
      onScroll: D
    }, I), {
      children: (0, r.jsx)(s.Jc, {
        containerRef: S,
        children: (0, r.jsxs)("div", {
          ref: S,
          className: o()(g, c.content),
          children: [f, A && (0, r.jsx)("div", {
            className: c.pointerCover
          })]
        })
      })
    }))
  })
}