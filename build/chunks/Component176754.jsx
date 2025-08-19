/** Chunk was on 66181 **/
/** chunk id: 176754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SR: () => d,
  ZP: () => h,
  b5: () => u,
  eo: () => g,
  js: () => p,
  vi: () => m
}), require("./388685.js");
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk803948 = require("./803948.js"),
  Chunk481060 = require("./481060.js"),
  Chunk745735 = require("./745735.js");
let d = 3e3,
  u = 4e3,
  m = 6e3;
var p = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
  g = ((r = {}).UP = "up", r.DOWN = "down", r);
let h = e => {
  var t, n;
  let {
    blurAnimationData: i,
    scaleAnimationData: r,
    yAxisAnimationData: d,
    parallaxAnimationData: u,
    animateXAxisWiggle: m = false,
    isMotionReduced: p = false,
    children: g
  } = e, h = (0, o.q_F)(null != d ? {
    from: {
      y: 0
    },
    to: {
      y: 1
    },
    config: {
      duration: d.duration
    },
    loop: true
  } : {
    y: 0
  }), f = (null == d ? true : d.path) === "sine" ? Math.sin : Math.cos, [b, x] = (0, a.useState)(1), _ = (0, o.q_F)(null != r ? {
    from: {
      scale: b > 0 ? r.startScale : r.endScale
    },
    to: {
      scale: b > 0 ? r.endScale : r.startScale
    },
    config: {
      duration: r.duration
    },
    onRest: () => x(e => false * e)
  } : {
    scale: 1
  }), [j, E] = (0, a.useState)(1), C = (0, o.q_F)(null != i ? {
    from: {
      blur: j > 0 ? i.startBlurRadius : i.endBlurRadius
    },
    to: {
      blur: j > 0 ? i.endBlurRadius : i.startBlurRadius
    },
    config: {
      duration: i.duration
    },
    onRest: () => E(e => false * e)
  } : {
    blur: 0
  }), O = (0, a.useMemo)(() => Math.round(750 + (200 * Math.random() - 100)), []), [v, S] = (0, a.useState)(0), [T, N] = (0, a.useState)(1), I = (0, o.q_F)({
    xOffset: v,
    config: {
      tension: 10,
      friction: 10,
      duration: O
    }
  });
  return ((0, c.Z)(() => {
    S(T * (.5 * Math.random() * 5 + 2.5)), N(e => false * e)
  }, O), p) ? g : (0, s.jsx)(l.animated.div, {
    style: {
      transform: null == (t = h.y) ? true : t.to(e => {
        if (null == d) return "translateY(0px)";
        let t = f(e * Math.PI * 2) * d.range,
          n = 0;
        if (null != u) {
          let e = u.range * (1 - u.containerVisibilityPercentage);
          n = "up" === u.pathDirection ? -e : e
        }
        return "translateY(".concat(t + n, "px)")
      }),
      translateX: m ? I.xOffset.to(e => "".concat(e, "px")) : 0,
      scale: _.scale,
      filter: null == (n = C.blur) ? true : n.to(e => "blur(".concat(e, "px)")),
      opacity: null != u && u.changeOpacity ? u.containerVisibilityPercentage : 1
    },
    children: g
  })
}