/** Chunk was on web.js **/
/** chunk id: 480962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => b
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
  Chunk334405 = require("./334405.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: a,
    menuSubmenuProps: _,
    renderSubmenu: h
  } = e, {
    focusIndex: E,
    isUsingKeyboardNavigation: b
  } = _, y = g(_, ["focusIndex", "isUsingKeyboardNavigation"]), O = i.useRef(null), v = i.useRef(null), I = i.useRef(null), [T, S] = i.useState(false);
  i.useLayoutEffect(() => {
    S(true)
  }, []), i.useLayoutEffect(() => {
    var e;
    a && ((0, u.F)(O), null == (e = I.current) || e.focus())
  }, [a]);
  let A = (0, r.jsx)("div", {
      className: f.submenuPaddingContainer,
      children: (0, r.jsx)("div", m(p({
        className: o()(f.submenu, t)
      }, y), {
        ref: I,
        children: (0, r.jsx)(l.zJl, {
          className: f.scroller,
          children: h()
        })
      }))
    }),
    C = (0, c.E)("MenuSubmenuItem"),
    [N, R] = i.useState(false);
  if (C) return (0, r.jsx)(s.pS, {
    open: N,
    onOpenChange: R,
    spacing: 4,
    placement: "right-start",
    portal: false,
    trigger: "hover",
    renderLayer: () => A,
    children: e => {
      let {
        ref: t,
        props: i
      } = e;
      return (0, r.jsx)("div", m(p({
        ref: t
      }, i), {
        children: n
      }))
    }
  });
  let P = (0, r.jsx)(d.jRF, {
    targetRef: v,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: () => A
  });
  return (0, r.jsxs)("div", {
    ref: O,
    children: [(0, r.jsx)("div", {
      ref: v
    }), n, a && T ? P : null]
  })
}