/** Chunk was on web.js **/
/** chunk id: 460364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk334405 = require("./334405.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: c,
    rows: d,
    rowHeight: p,
    onScroll: h,
    listClassName: m
  } = e, g = i.useRef(null), E = i.useRef(null), b = i.useRef(null), y = i.useRef(null), {
    isUsingKeyboardNavigation: O,
    focusIndex: v
  } = c, I = _(c, ["isUsingKeyboardNavigation", "focusIndex"]);
  i.useLayoutEffect(() => {
    var e;
    n && ((0, a.F)(g), null == (e = b.current) || e.focus())
  }, [n]), i.useEffect(() => {
    if (n && v >= 0 && O) {
      var e;
      null == (e = y.current) || e.scrollRowIntoView(v)
    }
  }, [n, O, v]);
  let T = i.useCallback(e => d[e], [d]);
  return (0, r.jsxs)("div", {
    ref: g,
    className: l.__invalid_submenuContainer,
    children: [(0, r.jsx)("div", {
      ref: E
    }), t, n ? (0, r.jsx)(o.jRF, {
      targetRef: E,
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      fixed: true,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => d.length > 0 && (0, r.jsx)("div", {
        className: l.submenuPaddingContainer,
        children: (0, r.jsx)("div", f(u({
          className: l.submenu
        }, I), {
          ref: b,
          children: (0, r.jsx)(s.Z, {
            ref: y,
            className: m,
            listPadding: [6, 0, 6, 8],
            onScroll: h,
            renderRow: T,
            rowCount: d.length,
            rowHeight: p
          })
        }))
      })
    }) : null]
  })
}