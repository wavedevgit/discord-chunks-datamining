/** Chunk was on web.js **/
/** chunk id: 964892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => A,
  x: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk453903 = require("./453903.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk186111 = require("./186111.js"),
  Chunk795127 = require("./795127.js"),
  Chunk283024 = require("./283024.js"),
  Chunk818348 = require("./818348.js"),
  Chunk248789 = require("./248789.js");

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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let A = Chunk64700.createContext(null),
  I = 20,
  S = 22,
  T = 240,
  C = 10,
  N = 4,
  R = Chunk818348.FX;

function w() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "center",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "top",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0;
  if ("center" === e || "custom" === e) return 0;
  let i = "left" === t || "right" === t,
    a = i ? r : null != n ? n : T,
    s = i ? S : I;
  if (0 === a) return 0;
  let o = a / 2 - s;
  switch (e) {
    case "start":
      return o;
    case "end":
      return -o;
    default:
      return 0
  }
}

function P(e) {
  var t;
  let {
    children: n,
    targetElementRef: a,
    shouldShow: h = true,
    onRequestClose: g,
    position: y = "top",
    align: v,
    alignmentStrategy: P = "trigger-center",
    caretConfig: D,
    hasVideo: x = false,
    gradientColor: L,
    gradientOffsetBottom: j = .4,
    onPositionChange: M,
    onNudgeChange: k,
    scrollBehavior: U = "sticky",
    modal: G = false,
    returnRef: V,
    experimental_ignoreModalClicks: F = true,
    closeOnClickOutside: B = false
  } = e, [H, Y] = i.useState(h), [W, K] = i.useState(y), z = i.useRef(y), q = i.useRef(0), {
    ref: X,
    width: Z,
    height: Q
  } = (0, d.Ay)(), $ = (0, c.bG)([f.A], () => f.A.getLayers()), J = null != (t = $[$.length - 1]) ? t : "base", ee = i.useRef(M);
  i.useEffect(() => {
    ee.current = M
  }, [M]);
  let et = i.useCallback(e => {
      var t;
      null != e && e !== z.current && (z.current = e, K(e), null == (t = ee.current) || t.call(ee, e))
    }, []),
    en = i.useMemo(() => {
      var e, t;
      return null == a.current || (null != (e = null == (t = a.current.closest("[data-layer]")) ? true : t.getAttribute("data-layer")) ? e : "base") === J
    }, [a, J]);
  i.useEffect(() => {
    en && h ? Y(true) : en || Y(false)
  }, [en, h]), i.useEffect(() => {
    et(y)
  }, [y, et]);
  let er = () => {
      Y(false)
    },
    ei = (0, _.L)({
      shouldShow: h,
      caretPosition: (0, p.g)(W),
      onExitComplete: er
    }),
    ea = i.useMemo(() => {
      if ("edge" === P && null != v) {
        let e = "top" === W || "bottom" === W,
          t = "left" === W || "right" === W;
        if (e) {
          if ("left" === v || "center" === v || "right" === v) return v
        } else if (t && ("top" === v || "center" === v || "bottom" === v)) return v;
      }
      return "center"
    }, [P, v, W]),
    es = i.useMemo(() => {
      var e;
      if ("edge" !== P) return w(null != (e = null == D ? true : D.align) ? e : "center", W, Z, Q)
    }, [P, D, W, Z, Q]),
    eo = i.useMemo(() => ({
      position: W,
      caretConfig: null != D ? D : {
        align: "center"
      }
    }), [W, D]),
    el = e => {
      let {
        setPopoutRef: t,
        position: i,
        nudge: a
      } = e, c = O(e, ["setPopoutRef", "position", "nudge"]);
      return et(i), a !== q.current && (q.current = a, null == k || k(a)), ei((e, i) => {
        if (!i) return null;
        let u = (0, r.jsx)(l.lGe, b(E({}, c), {
          setDialogRef: t,
          modal: G,
          className: s()(null != L ? m.popoverContentWithGradient : m.popover, {
            [m["popover--video"]]: x
          }),
          returnRef: V,
          children: (0, r.jsx)(A.Provider, {
            value: eo,
            children: n
          })
        }));
        return (0, r.jsx)(o.animated.div, {
          ref: X,
          "data-mana-component": "popover",
          style: b(E({}, e), {
            "--custom-caret-edge-offset-horizontal": "".concat(I, "px"),
            "--custom-caret-edge-offset-vertical": "".concat(S, "px"),
            "--custom-caret-edge-offset-horizontal-nudge": "".concat(a, "px"),
            "--custom-popover-width": "".concat(T, "px")
          }),
          children: null != L ? (0, r.jsx)(l.hLv, {
            offsetBottom: j,
            color: L,
            className: m.popoverGradientWrapper,
            children: u
          }) : u
        })
      })
    };
  return (0, r.jsx)(u.$, {
    targetElementRef: a,
    shouldShow: H,
    onRequestClose: g,
    position: W,
    align: ea,
    spacing: C + N,
    offset: es,
    layerContext: true,
    positionKey: null != es ? "".concat(W, "-").concat(es) : true,
    popoutKey: true,
    fixed: false,
    autoInvert: true,
    nudgeAlignIntoViewport: "top" === W || "bottom" === W,
    closeOnClickOutside: B,
    ignoreModalClicks: F,
    scrollBehavior: U,
    renderPopout: el,
    children: R
  })
}