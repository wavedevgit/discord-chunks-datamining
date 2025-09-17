/** Chunk was on web.js **/
/** chunk id: 920155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk681803 = require("./681803.jsx"),
  Chunk304789 = require("./304789.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk945909 = require("./945909.js"),
  Chunk866577 = require("./866577.js"),
  Chunk231338 = require("./231338.js"),
  Chunk929618 = require("./929618.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = 10,
  T = 4,
  S = Chunk231338.Vq;

function A(e) {
  var t;
  let {
    children: n,
    targetElementRef: a,
    shouldShow: h = true,
    onRequestClose: g,
    position: b = "top",
    align: v = "center",
    hasVideo: A = false,
    gradientColor: C,
    onPositionChange: N,
    scrollBehavior: R = "sticky"
  } = e, [P, w] = i.useState(h), [D, x] = i.useState(b), L = i.useRef(b), j = (0, l.e7)([f.Z], () => f.Z.getLayers()), M = null != (t = j[j.length - 1]) ? t : "base", k = i.useMemo(() => {
    var e;
    return null == a.current || (null == (e = a.current.closest("[data-layer]")) ? true : e.getAttribute("data-layer")) === M
  }, [a, M]);
  i.useEffect(() => {
    k && h ? w(true) : k || w(false)
  }, [k, h]);
  let U = () => {
      w(false)
    },
    G = (0, p.i)({
      shouldShow: h,
      caretPosition: (0, _.z)(D),
      onExitComplete: U
    }),
    B = e => {
      var {
        setPopoutRef: t,
        position: i
      } = e, l = O(e, ["setPopoutRef", "position"]);
      return null != i && i !== L.current && (L.current = i, x(i), null == N || N(i)), G((e, i) => {
        if (!i) return null;
        let c = (0, r.jsx)(u.V, y(E({}, l), {
          setDialogRef: t,
          modal: false,
          className: o()(null != C ? m.popoverContentWithGradient : m.popover, {
            [m["popover--video"]]: A
          }),
          returnRef: a,
          children: n
        }));
        return (0, r.jsx)(s.animated.div, {
          "data-mana-component": "popover",
          style: e,
          children: null != C ? (0, r.jsx)(d.$, {
            offsetBottom: .4,
            color: C,
            className: m.popoverGradientWrapper,
            children: c
          }) : c
        })
      })
    };
  return (0, r.jsx)(c.H, {
    targetElementRef: a,
    shouldShow: P,
    onRequestClose: g,
    position: D,
    align: v,
    spacing: I + T,
    layerContext: true,
    positionKey: true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: "top" === D || "bottom" === D,
    closeOnClickOutside: false,
    scrollBehavior: R,
    renderPopout: B,
    children: S
  })
}