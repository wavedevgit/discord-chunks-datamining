/** Chunk was on web.js **/
/** chunk id: 637389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk508382 = require("./508382.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk502939 = require("./502939.js"),
  Chunk563014 = require("./563014.js"),
  Chunk397927 = require("./397927.js"),
  Chunk298063 = require("./298063.js"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = "right-start",
  v = Chunk64700.createContext(O);

function A(e) {
  let t = i.useContext(v),
    {
      subMenuClassName: n,
      parentItem: a,
      isFocused: h,
      menuSubmenuProps: g,
      renderSubmenu: b
    } = e,
    {
      focusIndex: O,
      isUsingKeyboardNavigation: A
    } = g,
    I = y(g, ["focusIndex", "isUsingKeyboardNavigation"]),
    S = i.useRef(null),
    T = i.useRef(null),
    C = i.useRef(null),
    [N, w] = i.useState(false);
  i.useLayoutEffect(() => {
    w(true)
  }, []), i.useLayoutEffect(() => {
    h && (0, u.Y)(S)
  }, [h]);
  let R = (0, r.jsx)("div", {
      className: _.submenuPaddingContainer,
      children: (0, r.jsx)("div", E(m({
        className: o()(_.submenu, n)
      }, I), {
        ref: C,
        children: (0, r.jsx)(l.IpV, {
          className: _.scroller,
          children: b()
        })
      }))
    }),
    P = (0, c.D)("MenuSubmenuItem"),
    D = (0, f.Y)("MenuSubmenuItem"),
    [L, x] = i.useState(false);
  if (P) return (0, r.jsx)(s.Ow, {
    open: L || h,
    viewportPadding: p.FD,
    maxHeight: p.H0,
    onOpenChange: x,
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
      return (0, r.jsx)("div", E(m({
        ref: t
      }, n), {
        children: a
      }))
    }
  });
  let M = (0, r.jsx)(d.QCO, {
    targetRef: T,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: () => R
  });
  return (0, r.jsxs)("div", {
    ref: S,
    children: [(0, r.jsx)("div", {
      ref: T
    }), a, h && N ? M : null]
  })
}