/** Chunk was on web.js **/
/** chunk id: 460364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk762328 = require("./762328.jsx"),
  Chunk682973 = require("./682973.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: f,
    rows: _,
    rowHeight: g,
    onScroll: E,
    listClassName: b
  } = e, y = i.useRef(null), O = i.useRef(null), v = i.useRef(null), S = i.useRef(null), {
    isUsingKeyboardNavigation: I,
    focusIndex: T
  } = f, C = m(f, ["isUsingKeyboardNavigation", "focusIndex"]);
  i.useLayoutEffect(() => {
    var e;
    n && ((0, s.F)(y), null == (e = v.current) || e.focus())
  }, [n]), i.useEffect(() => {
    if (n && T >= 0 && I) {
      var e;
      null == (e = S.current) || e.scrollRowIntoView(T)
    }
  }, [n, I, T]);
  let A = i.useCallback(e => _[e], [_]),
    N = (0, o.E)("MenuSubmenuListItem"),
    P = () => _.length > 0 && (0, r.jsx)("div", {
      className: d.submenuPaddingContainer,
      children: (0, r.jsx)("div", h(p({
        className: d.submenu
      }, C), {
        ref: v,
        children: (0, r.jsx)(c.Z, {
          ref: S,
          className: b,
          listPadding: [6, 0, 6, 8],
          onScroll: E,
          renderRow: A,
          rowCount: _.length,
          rowHeight: g
        })
      }))
    });
  if (N) return (0, r.jsx)(a.pS, {
    spacing: 4,
    placement: "right-start",
    autoFlip: true,
    portal: false,
    viewportPadding: u.sb,
    maxHeight: u.Ts,
    renderLayer: P,
    children: e => {
      let {
        ref: n,
        props: i
      } = e;
      return (0, r.jsx)("div", h(p({
        ref: n
      }, i), {
        children: t
      }))
    }
  });
  let w = (0, r.jsx)(l.jRF, {
    targetRef: O,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: P
  });
  return (0, r.jsxs)("div", {
    ref: y,
    children: [(0, r.jsx)("div", {
      ref: O
    }), t, n ? w : null]
  })
}