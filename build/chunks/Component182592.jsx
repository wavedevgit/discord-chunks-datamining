/** Chunk was on web.js **/
/** chunk id: 182592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  p: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk854284 = require("./854284.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk940622 = require("./940622.js"),
  Chunk218394 = require("./218394.js");
require("./216160.js");
var Chunk675100 = require("./675100.js"),
  Chunk619718 = require("./619718.js"),
  Chunk262737 = require("./262737.js"),
  Chunk142888 = require("./142888.js"),
  Chunk207054 = require("./207054.jsx"),
  Chunk517286 = require("./517286.js"),
  Chunk446770 = require("./446770.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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
let O = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: n,
      resetOnHover: a = false,
      isHovering: l = false,
      useOpacityOnHover: c = true,
      autoPlay: u = true,
      restartMethod: d,
      profileEffectConfig: _,
      noBorderRadius: g = false,
      delayIntro: b = true,
      layerData: y
    } = e, O = i.useRef(null), [A, v] = i.useState([]), [S, I] = i.useState(0), [T, C] = i.useState(0), {
      accessibilityLabel: N
    } = _, R = b ? 500 : .1, [w, P] = i.useState(-R), {
      stop: D,
      reset: x,
      ticking: L
    } = (0, p.A)(e => {
      P(t => t + e)
    }), j = i.useRef(R);
    i.useEffect(() => {
      j.current = R
    }), i.useEffect(() => {
      P(-j.current), v((0, h.u)(_.effects))
    }, [_]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      A.forEach(n => {
        let r = n.start + n.duration;
        r > e && (e = r), n.loop && n.start < t && (t = n.start)
      }), I(t), C(e)
    }, [C, A]);
    let [M, k] = i.useState(false);
    return i.useEffect(() => {
      true === u || l || (D(), P(0)), !l && M && L.current && (D(), P(0)), a && l && !L.current && (x(), _.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? P(d === f.H.FromStart ? 0 : S) : P(0))
    }, [l, M, S, a, D, x, L, _.animationType, u, d]), (0, r.jsx)("div", {
      ref: O,
      className: s()(E.yC, {
        [E.yo]: l && c
      }),
      "aria-label": N,
      role: "img",
      children: (0, r.jsx)("div", {
        className: g ? E.qb : E.vW,
        children: A.map((e, i) => {
          if (!L.current && _.animationType === o.l.ANIMATION_TYPE_PERSISTENT && null != _.staticFrameSrc && 0 === i && true === u) {
            var a, s, l, c;
            let {
              staticFrameSrc: n
            } = _;
            return (0, r.jsx)("img", {
              className: E.QZ,
              style: {
                top: null != (a = null == (l = e.position) ? true : l.y) ? a : 0 - t,
                left: null != (s = null == (c = e.position) ? true : c.x) ? s : 0
              },
              src: n,
              alt: "",
              "aria-hidden": true
            }, e.src + i)
          }
          return (0, r.jsx)(m.A, {
            layerConfig: e,
            animationType: _.animationType,
            ticking: L.current,
            time: w,
            hasPlayedThrough: M,
            setHasPlayedThrough: k,
            maxLoops: n,
            loopEnd: T,
            bannerAdjustment: t,
            imageData: null == y ? true : y[e.src]
          }, e.src + i)
        })
      })
    })
  },
  A = e => {
    let {
      config: t,
      useThumbnail: n,
      bannerAdjustment: i = 0,
      noBorderRadius: a,
      isHovering: o = false,
      useOpacityOnHover: l = true
    } = e, {
      reducedMotionSrc: c,
      thumbnailPreviewSrc: u,
      accessibilityLabel: d
    } = t;
    return (0, r.jsx)("div", {
      className: s()(E.yC, {
        [E.yo]: o && l
      }),
      "aria-label": d,
      role: "img",
      children: (0, r.jsx)("div", {
        className: a ? E.qb : E.vW,
        children: (0, r.jsx)("img", {
          src: n && !o ? u : c,
          className: E.QZ,
          style: {
            top: 0 - i
          },
          alt: "",
          "aria-hidden": true
        })
      })
    })
  },
  v = e => {
    let t = (0, d.j)(),
      n = (0, l.bG)([c.A], () => c.A.useReducedMotion),
      i = (0, _.V)(e.skuId),
      a = (0, u.C)(null == i ? true : i.config),
      s = (0, h.b)(null == i ? true : i.config),
      f = null != a ? a : s,
      {
        autoPlay: p = true,
        isHovering: m
      } = e,
      E = !!(!t && e.shopPreview || !t && (null == i ? true : i.config.animationType) === o.l.ANIMATION_TYPE_PERSISTENT || n || false === p && false === m),
      {
        loaded: b,
        layerData: v
      } = (0, g.A)(i, false === E);
    return null != i && null != f && (t || e.shopPreview || i.config.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT) ? E ? (0, r.jsx)(A, {
      useThumbnail: e.useThumbnail,
      config: f,
      bannerAdjustment: e.bannerAdjustment,
      noBorderRadius: e.noBorderRadius,
      isHovering: e.isHovering,
      useOpacityOnHover: e.useOpacityOnHover
    }) : b ? (0, r.jsx)(O, y({
      profileEffectConfig: f,
      layerData: v
    }, e)) : null : null
  }