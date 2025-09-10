/** Chunk was on web.js **/
/** chunk id: 920155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => S,
  q: () => A
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
  Chunk866577 = require("./866577.js"),
  Chunk231338 = require("./231338.js"),
  Chunk254477 = require("./254477.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = 10,
  I = 4,
  T = Chunk231338.Vq;

function S(e) {
  var t;
  let {
    children: n,
    targetElementRef: a,
    shouldShow: p = true,
    onRequestClose: m,
    position: E = "top",
    align: O = "center",
    hasVideo: S = false,
    gradientColor: C,
    onPositionChange: N
  } = e, [R, P] = i.useState(p), [w, D] = i.useState(E), x = i.useRef(E), L = (0, l.e7)([f.Z], () => f.Z.getLayers()), j = null != (t = L[L.length - 1]) ? t : "base", M = i.useMemo(() => {
    var e;
    return null == a.current || (null == (e = a.current.closest("[data-layer]")) ? true : e.getAttribute("data-layer")) === j
  }, [a, j]);
  i.useEffect(() => {
    M && p ? P(true) : M || P(false)
  }, [M, p]);
  let k = () => {
      P(false)
    },
    U = (0, _.i)({
      shouldShow: p,
      caretPosition: A(w),
      onExitComplete: k
    }),
    G = e => {
      var {
        setPopoutRef: t,
        position: i
      } = e, l = y(e, ["setPopoutRef", "position"]);
      return null != i && i !== x.current && (x.current = i, D(i), null == N || N(i)), U((e, i) => {
        if (!i) return null;
        let c = (0, r.jsx)(u.V, b(g({}, l), {
          setDialogRef: t,
          modal: false,
          className: o()(null != C ? h.popoverContentWithGradient : h.popover, {
            [h["popover--video"]]: S
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
            className: h.popoverGradientWrapper,
            children: c
          }) : c
        })
      })
    };
  return (0, r.jsx)(c.H, {
    targetElementRef: a,
    shouldShow: R,
    onRequestClose: m,
    position: w,
    align: O,
    spacing: v + I,
    layerContext: true,
    positionKey: true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: "top" === w || "bottom" === w,
    closeOnClickOutside: false,
    scrollBehavior: "sticky",
    renderPopout: G,
    children: T
  })
}
let A = e => {
  switch (e) {
    case "top":
      return "bottom";
    case "bottom":
    default:
      return "top";
    case "left":
      return "right";
    case "right":
      return "left"
  }
}