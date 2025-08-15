/** Chunk was on web.js **/
/** chunk id: 920155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
let y = 10,
  O = 4,
  v = Chunk231338.Vq;

function I(e) {
  var t;
  let {
    children: n,
    targetElementRef: o,
    shouldShow: p = true,
    onRequestClose: m,
    position: E = "top",
    align: I = "center",
    hasVideo: T = false,
    gradientColor: S,
    caretConfig: A
  } = e, [N, C] = i.useState(p), R = (0, l.e7)([f.Z], () => f.Z.getLayers()), P = null != (t = R[R.length - 1]) ? t : "base", w = i.useMemo(() => {
    var e;
    return null == o.current || (null == (e = o.current.closest("[data-layer]")) ? true : e.getAttribute("data-layer")) === P
  }, [o, P]);
  i.useEffect(() => {
    C(w && p)
  }, [w, p]);
  let D = () => {
      C(false)
    },
    L = e => {
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
    },
    x = (0, _.i)({
      shouldShow: p,
      caretPosition: (null == A ? true : A.position) != null ? A.position : L(E),
      onExitComplete: D
    }),
    M = e => x((t, i) => {
      if (!i) return null;
      let l = (0, r.jsx)(u.V, b(g({}, e), {
        modal: false,
        className: a()(null != S ? h.popoverContentWithGradient : h.popover, {
          [h["popover--video"]]: T
        }),
        returnRef: o,
        children: n
      }));
      return (0, r.jsx)(s.animated.div, {
        "data-mana-component": "popover",
        style: t,
        children: null != S ? (0, r.jsx)(d.$, {
          color: S,
          className: h.popoverGradientWrapper,
          children: l
        }) : l
      })
    });
  return (0, r.jsx)(c.H, {
    targetElementRef: o,
    shouldShow: N,
    onRequestClose: m,
    position: E,
    align: I,
    spacing: y + O,
    layerContext: true,
    positionKey: true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    closeOnClickOutside: false,
    renderPopout: M,
    children: v
  })
}