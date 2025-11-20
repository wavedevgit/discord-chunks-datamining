/** Chunk was on web.js **/
/** chunk id: 920155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk945909 = require("./945909.js"),
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
    gradientColor: A,
    gradientOffsetBottom: C = .4,
    onPositionChange: N,
    onNudgeChange: R,
    scrollBehavior: P = "sticky",
    modal: D = false,
    returnRef: w,
    experimental_ignoreModalClicks: L = true
  } = e, [x, M] = i.useState(p), [k, j] = i.useState(E), U = i.useRef(E), G = i.useRef(0), B = (0, c.e7)([d.Z], () => d.Z.getLayers()), Z = null != (t = B[B.length - 1]) ? t : "base", F = i.useRef(N);
  i.useEffect(() => {
    F.current = N
  }, [N]);
  let V = i.useCallback(e => {
      var t;
      null != e && e !== U.current && (U.current = e, j(e), null == (t = F.current) || t.call(F, e))
    }, []),
    H = i.useMemo(() => {
      var e, t;
      return null == a.current || (null != (t = null == (e = a.current.closest("[data-layer]")) ? true : e.getAttribute("data-layer")) ? t : "base") === Z
    }, [a, Z]);
  i.useEffect(() => {
    H && p ? M(true) : H || M(false)
  }, [H, p]), i.useEffect(() => {
    V(E)
  }, [E, V]);
  let Y = () => {
      M(false)
    },
    W = (0, _.i)({
      shouldShow: p,
      caretPosition: (0, f.z)(k),
      onExitComplete: Y
    }),
    K = e => {
      var {
        setPopoutRef: t,
        position: i,
        nudge: a
      } = e, c = y(e, ["setPopoutRef", "position", "nudge"]);
      return V(i), a !== G.current && (G.current = a, null == R || R(a)), W((e, i) => {
        if (!i) return null;
        let a = (0, r.jsx)(l.VqE, b(g({}, c), {
          setDialogRef: t,
          modal: D,
          className: o()(null != A ? h.popoverContentWithGradient : h.popover, {
            [h["popover--video"]]: S
          }),
          returnRef: w,
          children: n
        }));
        return (0, r.jsx)(s.animated.div, {
          "data-mana-component": "popover",
          style: e,
          children: null != A ? (0, r.jsx)(l.$1m, {
            offsetBottom: C,
            color: A,
            className: h.popoverGradientWrapper,
            children: a
          }) : a
        })
      })
    };
  return (0, r.jsx)(u.H, {
    targetElementRef: a,
    shouldShow: x,
    onRequestClose: m,
    position: k,
    align: O,
    spacing: v + I,
    layerContext: true,
    positionKey: true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: "top" === k || "bottom" === k,
    closeOnClickOutside: false,
    ignoreModalClicks: L,
    scrollBehavior: P,
    renderPopout: K,
    children: T
  })
}