/** Chunk was on web.js **/
/** chunk id: 673698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk264927 = require("./264927.js"),
  Chunk515718 = require("./515718.js"),
  Chunk835517 = require("./835517.js"),
  Chunk649658 = require("./649658.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk613568 = require("./613568.js"),
  Chunk428721 = require("./428721.js"),
  Chunk852119 = require("./852119.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let T = Chunk64700.forwardRef((e, t) => {
  let n, [a, ...s] = [e, t],
    {
      className: c,
      imageClassName: f,
      readyState: h = _.Rv1.READY,
      src: E,
      placeholder: y,
      placeholderVersion: b,
      alt: v,
      width: S,
      height: T,
      maxWidth: R = S,
      maxHeight: P = T,
      minWidth: D = 0,
      minHeight: L = 0,
      mediaLayoutType: x,
      limitResponsiveWidth: M = true,
      accessory: j,
      zoomable: k = true,
      original: U,
      children: G = e => {
        let {
          src: t,
          size: n,
          alt: i,
          className: a,
          mediaLayoutType: o
        } = e;
        return (0, r.jsx)("img", {
          className: null != a ? a : true,
          alt: null != i ? i : m.intl.string(m.t.X4IxWL),
          src: t,
          style: w(n, o)
        })
      },
      renderAccessory: V,
      onClick: F,
      tabIndex: B,
      dataSafeSrc: H,
      useFullWidth: Y = false,
      srcIsAnimated: W
    } = a,
    K = I(a, ["className", "imageClassName", "readyState", "src", "placeholder", "placeholderVersion", "alt", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "mediaLayoutType", "limitResponsiveWidth", "accessory", "zoomable", "original", "children", "renderAccessory", "onClick", "tabIndex", "dataSafeSrc", "useFullWidth", "srcIsAnimated"]),
    [z] = s,
    q = i.useRef(null),
    Z = i.useRef(null);
  if (1 === S && 1 === T) return null;
  let Q = (0, d.Uj)({
      width: S,
      height: T,
      maxWidth: R,
      maxHeight: P,
      minWidth: D,
      minHeight: L
    }),
    X = 0 !== Q.width ? Q.width / Q.height : 1;
  "" !== E && h !== _.Rv1.ERROR ? n = G({
    src: E,
    size: Q,
    alt: v,
    className: f,
    mediaLayoutType: x
  }) : h !== _.Rv1.LOADING && (n = (0, r.jsx)(C, {
    size: Q,
    mediaLayoutType: x,
    alt: v
  })), n = (0, r.jsx)(p.y, {
    readyState: h,
    aspectRatio: X,
    placeholder: y,
    placeholderVersion: b,
    placeholderStyle: w(Q, x),
    children: n
  });
  let J = null != V ? V() : null;
  return J = null != J ? J : j, (0, r.jsx)(l.vN3, {
    ringTarget: q,
    focusTarget: Z,
    children: (0, r.jsxs)("div", A(O({
      ref: z,
      className: o()("imageWrapper", g.h4, {
        [g.j3]: k,
        [g.LF]: h !== _.Rv1.READY,
        [g.vk]: null != F
      }, c),
      style: N(Q, M, Y, x)
    }, K), {
      children: [null != U && (0, r.jsx)("a", {
        tabIndex: false,
        onClick: F,
        "aria-hidden": true,
        className: g.mt,
        href: U,
        ref: q,
        "data-role": "img",
        "data-safe-src": null != H ? H : E
      }), null != F ? (0, r.jsx)(l.DUT, {
        className: g.w8,
        tabIndex: null != B ? B : 0,
        onClick: F,
        "aria-label": null != v ? v : m.intl.string(m.t.X4IxWL),
        "aria-describedby": u.l2,
        innerRef: Z,
        focusProps: {
          enabled: false
        },
        children: n
      }) : n, null != J ? (0, r.jsx)("div", {
        className: g.mQ,
        children: J
      }) : null]
    }))
  })
});

function C(e) {
  let {
    size: t,
    mediaLayoutType: n,
    alt: i
  } = e, a = (0, c.Ay)();
  return (0, r.jsx)("div", {
    className: g.x5,
    style: R(t, n),
    children: (0, r.jsx)("img", {
      src: (0, s.qB)(a) ? y : E,
      className: g.wL,
      alt: null != i ? i : m.intl.string(m.t.X4IxWL)
    })
  })
}

function N(e, t, n, r) {
  return r === h.dG.MOSAIC ? {
    display: "block",
    maxHeight: "inherit",
    margin: "auto",
    width: !n && e.width <= h.k6 ? e.width : "100%",
    height: "100%"
  } : r === h.dG.RESPONSIVE ? {
    maxWidth: t ? e.width : true,
    width: "100%",
    aspectRatio: "".concat(e.width, " / ").concat(e.height)
  } : e
}

function w(e, t) {
  switch (t) {
    case h.dG.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, f.A)() ? "calc(100% + 1px)" : "100%"
      };
    case h.dG.RESPONSIVE:
      return P(e);
    default:
      return e
  }
}

function R(e, t) {
  switch (t) {
    case h.dG.MOSAIC:
      return {
        width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
      };
    case h.dG.RESPONSIVE:
      return A(O({}, P(e)), {
        display: "flex"
      });
    default:
      return e
  }
}

function P(e) {
  let {
    width: t,
    height: n
  } = e;
  return {
    maxWidth: t,
    maxHeight: n,
    width: "100%",
    display: "block",
    aspectRatio: "".concat(t, " / ").concat(n)
  }
}
T.displayName = "Image"