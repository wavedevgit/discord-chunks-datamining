/** Chunk was on web.js **/
/** chunk id: 680295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T,
  n: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk619899 = require("./619899.js"),
  Chunk451478 = require("./451478.js"),
  Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk658312 = require("./658312.js"),
  Chunk731896 = require("./731896.js"),
  Chunk729436 = require("./729436.js"),
  Chunk142145 = require("./142145.jsx"),
  Chunk710867 = require("./710867.jsx"),
  Chunk312904 = require("./312904.js"),
  Chunk107225 = require("./107225.js");

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
      isHovering: s = false,
      useOpacityOnHover: l = true,
      autoPlay: c = true,
      restartMethod: u,
      urlQueryString: p,
      profileEffectConfig: g,
      noBorderRadius: y = false,
      introDelay: O = d.lG
    } = e, v = i.useRef(null), [I, T] = i.useState([]);
    (0, E.Z)(g);
    let [S, A] = i.useState(0), [N, C] = i.useState(0), {
      accessibilityLabel: R
    } = g, [P, w] = i.useState(-O), {
      stop: D,
      reset: L,
      ticking: x
    } = (0, _.Z)(e => {
      w(t => t + e)
    }), M = i.useRef(O);
    i.useEffect(() => {
      M.current = O
    }), i.useEffect(() => {
      w(-M.current), T((0, h.H)(g.effects))
    }, [g]), i.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      I.forEach(n => {
        let r = n.start + n.duration;
        r > e && (e = r), n.loop && n.start < t && (t = n.start)
      }), A(t), C(e)
    }, [C, I]);
    let [k, j] = i.useState(false);
    return i.useEffect(() => {
      true === c || s || (D(), w(0)), !s && k && x.current && (D(), w(0)), a && s && !x.current && (L(), g.animationType === f.Q.PERSISTENT ? w(u === f.j.FromStart ? 0 : S) : w(0))
    }, [s, k, S, a, D, L, x, g.animationType, c, u]), (0, r.jsx)("div", {
      ref: v,
      className: o()(b.profileEffects, {
        [b.hovered]: s && l
      }),
      "aria-label": R,
      role: "img",
      children: (0, r.jsx)("div", {
        className: y ? b.innerNoRadius : b.inner,
        children: I.map((e, i) => {
          if (!x.current && g.animationType === f.Q.PERSISTENT && null != g.staticFrameSrc && 0 === i && true === c) {
            var a, o, s, l;
            let {
              staticFrameSrc: n
            } = g;
            return (0, r.jsx)("img", {
              className: b.effect,
              style: {
                top: null != (s = null == (a = e.position) ? true : a.y) ? s : 0 - t,
                left: null != (l = null == (o = e.position) ? true : o.x) ? l : 0
              },
              src: n,
              alt: "",
              "aria-hidden": true
            }, e.src + i)
          }
          return (0, r.jsx)(m.Z, {
            layerConfig: e,
            animationType: g.animationType,
            ticking: x.current,
            time: P,
            hasPlayedThrough: k,
            setHasPlayedThrough: j,
            urlQueryString: p,
            maxLoops: n,
            loopEnd: N,
            bannerAdjustment: t
          }, e.src + i)
        })
      })
    })
  },
  I = e => {
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
  T = e => {
    let t = (0, s.e7)([u.Z], () => u.Z.isFocused()),
      n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
      [a, o] = i.useState(false),
      d = (0, p.V)(e.profileEffectId),
      _ = (0, c.ex)(null == d ? true : d.config),
      m = (0, h.C)(null == d ? true : d.config),
      E = null != _ ? _ : m;
    return null != d && null != E && (t || e.shopPreview || d.config.animationType !== f.Q.INTERMITTENT) ? !t && e.shopPreview || !t && d.config.animationType === f.Q.PERSISTENT || n || false === e.autoPlay && false === e.isHovering ? (0, r.jsx)(I, {
      useThumbnail: e.useThumbnail,
      config: E,
      bannerAdjustment: e.bannerAdjustment,
      noBorderRadius: e.noBorderRadius,
      isHovering: e.isHovering,
      useOpacityOnHover: e.useOpacityOnHover
    }) : a ? (0, r.jsx)(v, O({
      profileEffectConfig: E
    }, e)) : (0, r.jsx)(g.Z, {
      profileEffectConfig: E,
      onReady: () => {
        o(true)
      }
    }) : null
  }