/** Chunk was on web.js **/
/** chunk id: 480962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk762328 = require("./762328.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk682973 = require("./682973.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk939350 = require("./939350.js"),
  Chunk515527 = require("./515527.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: a,
    menuSubmenuProps: p,
    renderSubmenu: m
  } = e, {
    focusIndex: b,
    isUsingKeyboardNavigation: y
  } = p, O = E(p, ["focusIndex", "isUsingKeyboardNavigation"]), v = i.useRef(null), I = i.useRef(null), T = i.useRef(null), [S, A] = i.useState(false);
  i.useLayoutEffect(() => {
    A(true)
  }, []), i.useLayoutEffect(() => {
    var e;
    a && ((0, u.F)(v), null == (e = T.current) || e.focus())
  }, [a]);
  let C = (0, r.jsx)("div", {
      className: _.submenuPaddingContainer,
      children: (0, r.jsx)("div", g(h({
        className: o()(_.submenu, t)
      }, O), {
        ref: T,
        children: (0, r.jsx)(l.zJl, {
          className: _.scroller,
          children: m()
        })
      }))
    }),
    N = (0, c.E)("MenuSubmenuItem"),
    [R, P] = i.useState(false);
  if (N) return (0, r.jsx)(s.pS, {
    open: R,
    viewportPadding: f.sb,
    onOpenChange: P,
    spacing: 4,
    placement: "right-start",
    portal: false,
    trigger: "hover",
    renderLayer: () => C,
    children: e => {
      let {
        ref: t,
        props: i
      } = e;
      return (0, r.jsx)("div", g(h({
        ref: t
      }, i), {
        children: n
      }))
    }
  });
  let D = (0, r.jsx)(d.jRF, {
    targetRef: I,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: () => C
  });
  return (0, r.jsxs)("div", {
    ref: v,
    children: [(0, r.jsx)("div", {
      ref: I
    }), n, a && S ? D : null]
  })
}