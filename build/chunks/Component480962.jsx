/** Chunk was on web.js **/
/** chunk id: 480962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => S
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
  Chunk720312 = require("./720312.js"),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "right-start",
  v = Chunk473749.createContext(O);

function S(e) {
  let t = i.useContext(v),
    {
      subMenuClassName: n,
      parentItem: a,
      isFocused: m,
      menuSubmenuProps: g,
      renderSubmenu: y
    } = e,
    {
      focusIndex: O,
      isUsingKeyboardNavigation: S
    } = g,
    I = b(g, ["focusIndex", "isUsingKeyboardNavigation"]),
    T = i.useRef(null),
    C = i.useRef(null),
    A = i.useRef(null),
    [N, P] = i.useState(false);
  i.useLayoutEffect(() => {
    P(true)
  }, []), i.useLayoutEffect(() => {
    var e;
    m && ((0, u.F)(T), null == (e = A.current) || e.focus())
  }, [m]);
  let R = (0, r.jsx)("div", {
      className: _.submenuPaddingContainer,
      children: (0, r.jsx)("div", E(h({
        className: o()(_.submenu, n)
      }, I), {
        ref: A,
        children: (0, r.jsx)(l.zJl, {
          className: _.scroller,
          children: y()
        })
      }))
    }),
    w = (0, c.E)("MenuSubmenuItem"),
    D = (0, f.c)("MenuSubmenuItem"),
    [x, L] = i.useState(false);
  if (w) return (0, r.jsx)(s.pS, {
    open: x,
    viewportPadding: p.sb,
    onOpenChange: L,
    spacing: D ? false : 4,
    placement: t,
    portal: false,
    crossAccessFlip: false,
    trigger: "hover",
    renderLayer: e => {
      let {
        placement: t
      } = e;
      return (0, r.jsx)(v.Provider, {
        value: t,
        children: R
      })
    },
    children: e => {
      let {
        ref: t,
        props: n
      } = e;
      return (0, r.jsx)("div", E(h({
        ref: t
      }, n), {
        children: a
      }))
    }
  });
  let j = (0, r.jsx)(d.jRF, {
    targetRef: C,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: () => R
  });
  return (0, r.jsxs)("div", {
    ref: T,
    children: [(0, r.jsx)("div", {
      ref: C
    }), a, m && N ? j : null]
  })
}