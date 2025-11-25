/** Chunk was on web.js **/
/** chunk id: 680295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  n: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk480210 = require("./480210.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk619899 = require("./619899.js"),
  Chunk506071 = require("./506071.js"),
  Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk658312 = require("./658312.js"),
  Chunk731896 = require("./731896.js"),
  Chunk729436 = require("./729436.js"),
  Chunk142145 = require("./142145.jsx"),
  Chunk710867 = require("./710867.jsx"),
  Chunk312904 = require("./312904.js"),
  Chunk107225 = require("./107225.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let I = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: n,
      resetOnHover: a = false,
      isHovering: l = false,
      useOpacityOnHover: c = true,
      autoPlay: u = true,
      restartMethod: d,
      urlQueryString: h,
      profileEffectConfig: E,
      noBorderRadius: O = false,
      delayIntro: v = true
    } = e, I = i.useRef(null), [T, S] = i.useState([]);
    (0, b.Z)(E);
    let [A, C] = i.useState(0), [N, R] = i.useState(0), {
      accessibilityLabel: P
    } = E, D = v ? f.JH : .1, [w, L] = i.useState(-D), {
      stop: x,
      reset: M,
      ticking: k
    } = (0, p.Z)(e => {
      L(t => t + e)
    }), j = i.useRef(D);
    i.useEffect(() => {
      j.current = D
    }), i.useEffect(() => {
      L(-j.current), S((0, m.H)(E.effects))
    }, [E]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      T.forEach(n => {
        let r = n.start + n.duration;
        r > e && (e = r), n.loop && n.start < t && (t = n.start)
      }), C(t), R(e)
    }, [R, T]);
    let [U, G] = i.useState(false);
    return i.useEffect(() => {
      true === u || l || (x(), L(0)), !l && U && k.current && (x(), L(0)), a && l && !k.current && (M(), E.animationType === s.y.ANIMATION_TYPE_PERSISTENT ? L(d === _.Q.FromStart ? 0 : A) : L(0))
    }, [l, U, A, a, x, M, k, E.animationType, u, d]), (0, r.jsx)("div", {
      ref: I,
      className: o()(y.profileEffects, {
        [y.hovered]: l && c
      }),
      "aria-label": P,
      role: "img",
      children: (0, r.jsx)("div", {
        className: O ? y.innerNoRadius : y.inner,
        children: T.map((e, i) => {
          if (!k.current && E.animationType === s.y.ANIMATION_TYPE_PERSISTENT && null != E.staticFrameSrc && 0 === i && true === u) {
            var a, o, l, c;
            let {
              staticFrameSrc: n
            } = E;
            return (0, r.jsx)("img", {
              className: y.effect,
              style: {
                top: null != (l = null == (a = e.position) ? true : a.y) ? l : 0 - t,
                left: null != (c = null == (o = e.position) ? true : o.x) ? c : 0
              },
              src: n,
              alt: "",
              "aria-hidden": true
            }, e.src + i)
          }
          return (0, r.jsx)(g.Z, {
            layerConfig: e,
            animationType: E.animationType,
            ticking: k.current,
            time: w,
            hasPlayedThrough: U,
            setHasPlayedThrough: G,
            urlQueryString: h,
            maxLoops: n,
            loopEnd: N,
            bannerAdjustment: t
          }, e.src + i)
        })
      })
    })
  },
  T = e => {
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
      className: o()(y.profileEffects, {
        [y.hovered]: s && l
      }),
      "aria-label": d,
      role: "img",
      children: (0, r.jsx)("div", {
        className: a ? y.innerNoRadius : y.inner,
        children: (0, r.jsx)("img", {
          src: n && !s ? u : c,
          className: y.effect,
          style: {
            top: 0 - i
          },
          alt: "",
          "aria-hidden": true
        })
      })
    })
  },
  S = e => {
    let t = (0, d.n)(),
      n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
      [a, o] = i.useState(false),
      f = (0, h.V)(e.skuId),
      _ = (0, u.ex)(null == f ? true : f.config),
      p = (0, m.C)(null == f ? true : f.config),
      g = null != _ ? _ : p;
    return null != f && null != g && (t || e.shopPreview || f.config.animationType !== s.y.ANIMATION_TYPE_INTERMITTENT) ? !t && e.shopPreview || !t && f.config.animationType === s.y.ANIMATION_TYPE_PERSISTENT || n || false === e.autoPlay && false === e.isHovering ? (0, r.jsx)(T, {
      useThumbnail: e.useThumbnail,
      config: g,
      bannerAdjustment: e.bannerAdjustment,
      noBorderRadius: e.noBorderRadius,
      isHovering: e.isHovering,
      useOpacityOnHover: e.useOpacityOnHover
    }) : a ? (0, r.jsx)(I, v({
      profileEffectConfig: g
    }, e)) : (0, r.jsx)(E.Z, {
      profileEffectConfig: g,
      onReady: () => {
        o(true)
      }
    }) : null
  }