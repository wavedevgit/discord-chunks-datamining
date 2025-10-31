/** Chunk was on web.js **/
/** chunk id: 916616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk446108 = require("./446108.js"),
  Chunk956664 = require("./956664.js"),
  Chunk921948 = require("./921948.js"),
  Chunk823023 = require("./823023.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12464 = require("./12464.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = Chunk647438.forwardRef((e, t) => {
  let n;
  var {
    className: a,
    imageClassName: s,
    readyState: c = p.zo9.READY,
    src: f,
    placeholder: h,
    placeholderVersion: E,
    alt: b,
    width: y,
    height: v,
    maxWidth: S = y,
    maxHeight: A = v,
    minWidth: P = 0,
    minHeight: w = 0,
    mediaLayoutType: D,
    limitResponsiveWidth: x = true,
    accessory: L,
    zoomable: M = true,
    original: k,
    children: j = e => {
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
        style: R(n, o)
      })
    },
    renderAccessory: U,
    onClick: G,
    tabIndex: B,
    dataSafeSrc: Z,
    useFullWidth: F = false,
    srcIsAnimated: V
  } = e, H = T(e, ["className", "imageClassName", "readyState", "src", "placeholder", "placeholderVersion", "alt", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "mediaLayoutType", "limitResponsiveWidth", "accessory", "zoomable", "original", "children", "renderAccessory", "onClick", "tabIndex", "dataSafeSrc", "useFullWidth", "srcIsAnimated"]);
  let Y = i.useRef(null),
    W = i.useRef(null);
  if (1 === y && 1 === v) return null;
  let K = (0, d.Tj)({
      width: y,
      height: v,
      maxWidth: S,
      maxHeight: A,
      minWidth: P,
      minHeight: w
    }),
    z = 0 !== K.width ? K.width / K.height : 1;
  "" !== f && c !== p.zo9.ERROR ? n = j({
    src: f,
    size: K,
    alt: b,
    className: s,
    mediaLayoutType: D
  }) : c !== p.zo9.LOADING && (n = (0, r.jsx)(C, {
    size: K,
    mediaLayoutType: D,
    alt: b
  })), n = (0, r.jsx)(_.N, {
    readyState: c,
    aspectRatio: z,
    placeholder: h,
    placeholderVersion: E,
    placeholderStyle: R(K, D),
    children: n
  });
  let q = null != U ? U() : null;
  return q = null != q ? q : L, (0, r.jsx)(l.tEY, {
    ringTarget: Y,
    focusTarget: W,
    children: (0, r.jsxs)("div", I(O({
      ref: t,
      className: o()("imageWrapper", g.imageWrapper, {
        [g.imageZoom]: M,
        [g.imageWrapperBackground]: c !== p.zo9.READY,
        [g.clickable]: null != G
      }, a),
      style: N(K, x, F, D)
    }, H), {
      children: [null != k && (0, r.jsx)("a", {
        tabIndex: false,
        onClick: G,
        "aria-hidden": true,
        className: g.originalLink,
        href: k,
        ref: Y,
        "data-role": "img",
        "data-safe-src": null != Z ? Z : f
      }), null != G ? (0, r.jsx)(l.P3F, {
        className: g.clickableWrapper,
        tabIndex: null != B ? B : 0,
        onClick: G,
        "aria-label": null != b ? b : m.intl.string(m.t.X4IxWL),
        "aria-describedby": u.r5,
        innerRef: W,
        focusProps: {
          enabled: false
        },
        children: n
      }) : n, null != q ? (0, r.jsx)("div", {
        className: g.imageAccessory,
        children: q
      }) : null]
    }))
  })
});

function C(e) {
  let {
    size: t,
    mediaLayoutType: n,
    alt: i
  } = e, a = (0, c.ZP)();
  return (0, r.jsx)("div", {
    className: g.imageErrorWrapper,
    style: P(t, n),
    children: (0, r.jsx)("img", {
      src: (0, s.ap)(a) ? b : E,
      className: g.imageError,
      alt: null != i ? i : m.intl.string(m.t.X4IxWL)
    })
  })
}

function N(e, t, n, r) {
  return r === h.hV.MOSAIC ? {
    display: "block",
    maxHeight: "inherit",
    margin: "auto",
    width: !n && e.width <= h.mT ? e.width : "100%",
    height: "100%"
  } : r === h.hV.RESPONSIVE ? {
    maxWidth: t ? e.width : true,
    width: "100%",
    aspectRatio: "".concat(e.width, " / ").concat(e.height)
  } : e
}

function R(e, t) {
  switch (t) {
    case h.hV.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, f.Z)() ? "calc(100% + 1px)" : "100%"
      };
    case h.hV.RESPONSIVE:
      return w(e);
    default:
      return e
  }
}

function P(e, t) {
  switch (t) {
    case h.hV.MOSAIC:
      return {
        width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
      };
    case h.hV.RESPONSIVE:
      return I(O({}, w(e)), {
        display: "flex"
      });
    default:
      return e
  }
}

function w(e) {
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
A.displayName = "Image"