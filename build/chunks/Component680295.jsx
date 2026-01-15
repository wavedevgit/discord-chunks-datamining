/** Chunk was on web.js **/
/** chunk id: 680295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I,
  n: () => v
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
  Chunk410061 = require("./410061.js"),
  Chunk664545 = require("./664545.js");

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
let v = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: n,
      resetOnHover: a = false,
      isHovering: l = false,
      useOpacityOnHover: c = true,
      autoPlay: u = true,
      restartMethod: d,
      profileEffectConfig: h,
      noBorderRadius: E = false,
      delayIntro: y = true,
      layerData: O
    } = e, v = i.useRef(null), [S, I] = i.useState([]), [T, C] = i.useState(0), [A, N] = i.useState(0), {
      accessibilityLabel: P
    } = h, w = y ? f.JH : .1, [R, D] = i.useState(-w), {
      stop: x,
      reset: L,
      ticking: j
    } = (0, _.Z)(e => {
      D(t => t + e)
    }), M = i.useRef(w);
    i.useEffect(() => {
      M.current = w
    }), i.useEffect(() => {
      D(-M.current), I((0, m.H)(h.effects))
    }, [h]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      S.forEach(n => {
        let r = n.start + n.duration;
        r > e && (e = r), n.loop && n.start < t && (t = n.start)
      }), C(t), N(e)
    }, [N, S]);
    let [k, U] = i.useState(false);
    return i.useEffect(() => {
      true === u || l || (x(), D(0)), !l && k && j.current && (x(), D(0)), a && l && !j.current && (L(), h.animationType === s.y.ANIMATION_TYPE_PERSISTENT ? D(d === p.Q.FromStart ? 0 : T) : D(0))
    }, [l, k, T, a, x, L, j, h.animationType, u, d]), (0, r.jsx)("div", {
      ref: v,
      className: o()(b.profileEffects, {
        [b.hovered]: l && c
      }),
      "aria-label": P,
      role: "img",
      children: (0, r.jsx)("div", {
        className: E ? b.innerNoRadius : b.inner,
        children: S.map((e, i) => {
          if (!j.current && h.animationType === s.y.ANIMATION_TYPE_PERSISTENT && null != h.staticFrameSrc && 0 === i && true === u) {
            var a, o, l, c;
            let {
              staticFrameSrc: n
            } = h;
            return (0, r.jsx)("img", {
              className: b.effect,
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
            animationType: h.animationType,
            ticking: j.current,
            time: R,
            hasPlayedThrough: k,
            setHasPlayedThrough: U,
            maxLoops: n,
            loopEnd: A,
            bannerAdjustment: t,
            imageData: null == O ? true : O[e.src]
          }, e.src + i)
        })
      })
    })
  },
  S = e => {
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
      className: o()(b.profileEffects, {
        [b.hovered]: s && l
      }),
      "aria-label": d,
      role: "img",
      children: (0, r.jsx)("div", {
        className: a ? b.innerNoRadius : b.inner,
        children: (0, r.jsx)("img", {
          src: n && !s ? u : c,
          className: b.effect,
          style: {
            top: 0 - i
          },
          alt: "",
          "aria-hidden": true
        })
      })
    })
  },
  I = e => {
    let t = (0, d.n)(),
      n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
      i = (0, h.V)(e.skuId),
      a = (0, u.ex)(null == i ? true : i.config),
      o = (0, m.C)(null == i ? true : i.config),
      f = null != a ? a : o,
      {
        autoPlay: p = true,
        isHovering: _
      } = e,
      g = !!(!t && e.shopPreview || !t && (null == i ? true : i.config.animationType) === s.y.ANIMATION_TYPE_PERSISTENT || n || false === p && false === _),
      {
        loaded: b,
        layerData: y
      } = (0, E.Z)(i, false === g);
    return null != i && null != f && (t || e.shopPreview || i.config.animationType !== s.y.ANIMATION_TYPE_INTERMITTENT) ? g ? (0, r.jsx)(S, {
      useThumbnail: e.useThumbnail,
      config: f,
      bannerAdjustment: e.bannerAdjustment,
      noBorderRadius: e.noBorderRadius,
      isHovering: e.isHovering,
      useOpacityOnHover: e.useOpacityOnHover
    }) : b ? (0, r.jsx)(v, O({
      profileEffectConfig: f,
      layerData: y
    }, e)) : null : null
  }