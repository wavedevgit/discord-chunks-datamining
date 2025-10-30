/** Chunk was on web.js **/
/** chunk id: 480962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515527 = require("./515527.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: a,
    menuSubmenuProps: d,
    renderSubmenu: _
  } = e, {
    focusIndex: m,
    isUsingKeyboardNavigation: g
  } = d, E = h(d, ["focusIndex", "isUsingKeyboardNavigation"]), b = i.useRef(null), y = i.useRef(null), O = i.useRef(null), [v, I] = i.useState(false);
  return i.useLayoutEffect(() => {
    I(true)
  }, []), i.useLayoutEffect(() => {
    var e;
    a && ((0, l.F)(b), null == (e = O.current) || e.focus())
  }, [a]), (0, r.jsxs)("div", {
    ref: b,
    children: [(0, r.jsx)("div", {
      ref: y
    }), n, a && v ? (0, r.jsx)(c.jRF, {
      targetRef: y,
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      fixed: true,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => (0, r.jsx)("div", {
        className: u.submenuPaddingContainer,
        children: (0, r.jsx)("div", p(f({
          className: o()(u.submenu, t)
        }, E), {
          ref: O,
          children: (0, r.jsx)(s.zJl, {
            className: u.scroller,
            children: _()
          })
        }))
      })
    }) : null]
  })
}