/** Chunk was on web.js **/
/** chunk id: 55373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SR: () => l,
  ZP: () => _,
  b5: () => c,
  eo: () => f,
  js: () => d,
  vi: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk203463 = require("./203463.js"),
  Chunk481060 = require("./481060.js"),
  Chunk745735 = require("./745735.js");
let l = 3e3,
  c = 4e3,
  u = 6e3;
var d = function(e) {
    return e.SINE = "sine", e.COSINE = "cosine", e
  }({}),
  f = function(e) {
    return e.UP = "up", e.DOWN = "down", e
  }({});
let _ = e => {
  var t, n;
  let {
    blurAnimationData: l,
    scaleAnimationData: c,
    yAxisAnimationData: u,
    parallaxAnimationData: d,
    animateXAxisWiggle: f = false,
    isMotionReduced: _ = false,
    animationSpeedScale: p = 1,
    children: h
  } = e, m = (0, o.q_F)(null != u ? {
    from: {
      y: 0
    },
    to: {
      y: 1
    },
    config: {
      duration: u.duration * p
    },
    loop: true
  } : {
    y: 0
  }), g = (null == u ? true : u.path) === "sine" ? Math.sin : Math.cos, [E, b] = (0, i.useState)(1), y = (0, o.q_F)(null != c ? {
    from: {
      scale: E > 0 ? c.startScale : c.endScale
    },
    to: {
      scale: E > 0 ? c.endScale : c.startScale
    },
    config: {
      duration: c.duration * p
    },
    onRest: () => b(e => false * e)
  } : {
    scale: 1
  }), [O, v] = (0, i.useState)(1), I = (0, o.q_F)(null != l ? {
    from: {
      blur: O > 0 ? l.startBlurRadius : l.endBlurRadius
    },
    to: {
      blur: O > 0 ? l.endBlurRadius : l.startBlurRadius
    },
    config: {
      duration: l.duration * p
    },
    onRest: () => v(e => false * e)
  } : {
    blur: 0
  }), T = (0, i.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * p), [p]), S = 5, [A, C] = (0, i.useState)(0), [N, R] = (0, i.useState)(1), P = (0, o.q_F)({
    xOffset: A,
    config: {
      tension: 10,
      friction: 10,
      duration: T
    }
  });
  return ((0, s.Z)(() => {
    C(N * (.5 * Math.random() * S + S / 2)), R(e => false * e)
  }, T), _) ? h : (0, r.jsx)(a.animated.div, {
    style: {
      transform: null == (t = m.y) ? true : t.to(e => {
        if (null == u) return "translateY(0px)";
        let t = g(e * Math.PI * 2) * u.range,
          n = 0;
        if (null != d) {
          let e = d.range * (1 - d.containerVisibilityPercentage);
          n = "up" === d.pathDirection ? -e : e
        }
        return "translateY(".concat(t + n, "px)")
      }),
      translateX: f ? P.xOffset.to(e => "".concat(e, "px")) : 0,
      scale: y.scale,
      filter: null == (n = I.blur) ? true : n.to(e => "blur(".concat(e, "px)")),
      opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1
    },
    children: h
  })
}