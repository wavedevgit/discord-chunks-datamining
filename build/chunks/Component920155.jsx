/** Chunk was on web.js **/
/** chunk id: 920155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => S,
  m: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk236726 = require("./236726.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk819640 = require("./819640.js"),
  Chunk945909 = require("./945909.js"),
  Chunk866577 = require("./866577.js"),
  Chunk231338 = require("./231338.js"),
  Chunk770966 = require("./770966.js");

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
let S = Chunk473749.createContext(null),
  I = 20,
  T = 22,
  C = 240,
  A = 10,
  N = 4,
  P = Chunk231338.Vq;

function R() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "center",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "top",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0;
  if ("center" === module || "custom" === module) return 0;
  let i = "left" === exports || "right" === exports,
    a = Chunk473749 ? Chunk54381 : null != require ? require : C,
    o = Chunk473749 ? T : I;
  if (0 === Chunk120356) return 0;
  let s = Chunk120356 / 2 - o;
  switch (module) {
    case "start":
      return Chunk236726;
    case "end":
      return -Chunk236726;
    default:
      return 0
  }
}

function w(e) {
  var t;
  let {
    children: n,
    targetElementRef: a,
    shouldShow: m = true,
    onRequestClose: g,
    position: b = "top",
    align: v,
    alignmentStrategy: w = "trigger-center",
    caretConfig: D,
    hasVideo: x = false,
    gradientColor: L,
    gradientOffsetBottom: j = .4,
    onPositionChange: M,
    onNudgeChange: k,
    scrollBehavior: U = "sticky",
    modal: G = false,
    returnRef: Z,
    experimental_ignoreModalClicks: F = true
  } = e, [B, V] = i.useState(m), [H, Y] = i.useState(b), W = i.useRef(b), K = i.useRef(0), {
    ref: z,
    width: q,
    height: Q
  } = (0, d.ZP)(), X = (0, c.e7)([f.Z], () => f.Z.getLayers()), J = null != (t = X[X.length - 1]) ? t : "base", $ = i.useRef(M);
  i.useEffect(() => {
    $.current = M
  }, [M]);
  let ee = i.useCallback(e => {
      var t;
      null != e && e !== W.current && (W.current = e, Y(e), null == (t = $.current) || t.call($, e))
    }, []),
    et = i.useMemo(() => {
      var e, t;
      return null == a.current || (null != (t = null == (e = a.current.closest("[data-layer]")) ? true : e.getAttribute("data-layer")) ? t : "base") === J
    }, [a, J]);
  i.useEffect(() => {
    et && m ? V(true) : et || V(false)
  }, [et, m]), i.useEffect(() => {
    ee(b)
  }, [b, ee]);
  let en = () => {
      V(false)
    },
    er = (0, _.i)({
      shouldShow: m,
      caretPosition: (0, p.z)(H),
      onExitComplete: en
    }),
    ei = i.useMemo(() => {
      if ("edge" === w && null != v) {
        let e = "top" === H || "bottom" === H,
          t = "left" === H || "right" === H;
        if (e) {
          if ("left" === v || "center" === v || "right" === v) return v
        } else if (t && ("top" === v || "center" === v || "bottom" === v)) return v;
      }
      return "center"
    }, [w, v, H]),
    ea = i.useMemo(() => {
      var e;
      if ("edge" !== w) return R(null != (e = null == D ? true : D.align) ? e : "center", H, q, Q)
    }, [w, D, H, q, Q]),
    eo = i.useMemo(() => ({
      position: H,
      caretConfig: null != D ? D : {
        align: "center"
      }
    }), [H, D]),
    es = e => {
      var {
        setPopoutRef: t,
        position: i,
        nudge: a
      } = e, c = O(e, ["setPopoutRef", "position", "nudge"]);
      return ee(i), a !== K.current && (K.current = a, null == k || k(a)), er((e, i) => {
        if (!i) return null;
        let a = (0, r.jsx)(l.VqE, y(E({}, c), {
          setDialogRef: t,
          modal: G,
          className: o()(null != L ? h.popoverContentWithGradient : h.popover, {
            [h["popover--video"]]: x
          }),
          returnRef: Z,
          children: (0, r.jsx)(S.Provider, {
            value: eo,
            children: n
          })
        }));
        return (0, r.jsx)(s.animated.div, {
          ref: z,
          "data-mana-component": "popover",
          style: y(E({}, e), {
            "--custom-caret-edge-offset-horizontal": "".concat(I, "px"),
            "--custom-caret-edge-offset-vertical": "".concat(T, "px"),
            "--custom-popover-width": "".concat(C, "px")
          }),
          children: null != L ? (0, r.jsx)(l.$1m, {
            offsetBottom: j,
            color: L,
            className: h.popoverGradientWrapper,
            children: a
          }) : a
        })
      })
    };
  return (0, r.jsx)(u.H, {
    targetElementRef: a,
    shouldShow: B,
    onRequestClose: g,
    position: H,
    align: ei,
    spacing: A + N,
    offset: ea,
    layerContext: true,
    positionKey: null != ea ? "".concat(H, "-").concat(ea) : true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: "top" === H || "bottom" === H,
    closeOnClickOutside: false,
    ignoreModalClicks: F,
    scrollBehavior: U,
    renderPopout: es,
    children: P
  })
}