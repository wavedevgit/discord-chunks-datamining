/** Chunk was on web.js **/
/** chunk id: 182592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A,
  p: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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
      delayIntro: y = true,
      layerData: b
    } = e, O = i.useRef(null), [v, A] = i.useState([]), [I, S] = i.useState(0), [T, C] = i.useState(0), {
      accessibilityLabel: N
    } = _, w = y ? 500 : .1, [R, P] = i.useState(-w), {
      stop: D,
      reset: L,
      ticking: x
    } = (0, p.A)(e => {
      P(t => t + e)
    }), M = i.useRef(w);
    i.useEffect(() => {
      M.current = w
    }), i.useEffect(() => {
      P(-M.current), A((0, h.u)(_.effects))
    }, [_]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      v.forEach(n => {
        let r = n.start + n.duration;
        r > e && (e = r), n.loop && n.start < t && (t = n.start)
      }), S(t), C(e)
    }, [C, v]);
    let [j, k] = i.useState(false);
    return i.useEffect(() => {
      true === u || l || (D(), P(0)), !l && j && x.current && (D(), P(0)), a && l && !x.current && (L(), _.animationType === s.l.ANIMATION_TYPE_PERSISTENT ? P(d === f.H.FromStart ? 0 : I) : P(0))
    }, [l, j, I, a, D, L, x, _.animationType, u, d]), (0, r.jsx)("div", {
      ref: O,
      className: o()(E.yC, {
        [E.yo]: l && c
      }),
      "aria-label": N,
      role: "img",
      children: (0, r.jsx)("div", {
        className: g ? E.qb : E.vW,
        children: v.map((e, i) => {
          if (!x.current && _.animationType === s.l.ANIMATION_TYPE_PERSISTENT && null != _.staticFrameSrc && 0 === i && true === u) {
            var a, o, l, c;
            let {
              staticFrameSrc: n
            } = _;
            return (0, r.jsx)("img", {
              className: E.QZ,
              style: {
                top: null != (a = null == (l = e.position) ? true : l.y) ? a : 0 - t,
                left: null != (o = null == (c = e.position) ? true : c.x) ? o : 0
              },
              src: n,
              alt: "",
              "aria-hidden": true
            }, e.src + i)
          }
          return (0, r.jsx)(m.A, {
            layerConfig: e,
            animationType: _.animationType,
            ticking: x.current,
            time: R,
            hasPlayedThrough: j,
            setHasPlayedThrough: k,
            maxLoops: n,
            loopEnd: T,
            bannerAdjustment: t,
            imageData: null == b ? true : b[e.src]
          }, e.src + i)
        })
      })
    })
  },
  v = e => {
    let {
      config: t,
      useThumbnail: n,
      bannerAdjustment: i = 0,
      noBorderRadius: a,
      isHovering: s = false,
      useOpacityOnHover: l = true
    } = e, {
      reducedMotionSrc: c,
      thumbnailPreviewSrc: u,
      accessibilityLabel: d
    } = t;
    return (0, r.jsx)("div", {
      className: o()(E.yC, {
        [E.yo]: s && l
      }),
      "aria-label": d,
      role: "img",
      children: (0, r.jsx)("div", {
        className: a ? E.qb : E.vW,
        children: (0, r.jsx)("img", {
          src: n && !s ? u : c,
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
  A = e => {
    let t = (0, d.j)(),
      n = (0, l.bG)([c.A], () => c.A.useReducedMotion),
      i = (0, _.V)(e.skuId),
      a = (0, u.C)(null == i ? true : i.config),
      o = (0, h.b)(null == i ? true : i.config),
      f = null != a ? a : o,
      {
        autoPlay: p = true,
        isHovering: m
      } = e,
      E = !!(!t && e.shopPreview || !t && (null == i ? true : i.config.animationType) === s.l.ANIMATION_TYPE_PERSISTENT || n || false === p && false === m),
      {
        loaded: y,
        layerData: A
      } = (0, g.A)(i, false === E);
    return null != i && null != f && (t || e.shopPreview || i.config.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT) ? E ? (0, r.jsx)(v, {
      useThumbnail: e.useThumbnail,
      config: f,
      bannerAdjustment: e.bannerAdjustment,
      noBorderRadius: e.noBorderRadius,
      isHovering: e.isHovering,
      useOpacityOnHover: e.useOpacityOnHover
    }) : y ? (0, r.jsx)(O, b({
      profileEffectConfig: f,
      layerData: A
    }, e)) : null : null
  }