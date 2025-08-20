/** Chunk was on web.js **/
/** chunk id: 176754, original params: e,t,n (module,exports,re quire) **/
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
  Chunk803948 = require("./803948.js"),
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
    children: p
  } = e, h = (0, o.q_F)(null != u ? {
    from: {
      y: 0
    },
    to: {
      y: 1
    },
    config: {
      duration: u.duration
    },
    loop: true
  } : {
    y: 0
  }), m = (null == u ? true : u.path) === "sine" ? Math.sin : Math.cos, [g, E] = (0, i.useState)(1), b = (0, o.q_F)(null != c ? {
    from: {
      scale: g > 0 ? c.startScale : c.endScale
    },
    to: {
      scale: g > 0 ? c.endScale : c.startScale
    },
    config: {
      duration: c.duration
    },
    onRest: () => E(e => false * e)
  } : {
    scale: 1
  }), [y, O] = (0, i.useState)(1), v = (0, o.q_F)(null != l ? {
    from: {
      blur: y > 0 ? l.startBlurRadius : l.endBlurRadius
    },
    to: {
      blur: y > 0 ? l.endBlurRadius : l.startBlurRadius
    },
    config: {
      duration: l.duration
    },
    onRest: () => O(e => false * e)
  } : {
    blur: 0
  }), I = (0, i.useMemo)(() => Math.round(750 + (200 * Math.random() - 100)), []), T = 5, [S, A] = (0, i.useState)(0), [C, N] = (0, i.useState)(1), R = (0, o.q_F)({
    xOffset: S,
    config: {
      tension: 10,
      friction: 10,
      duration: I
    }
  });
  return ((0, s.Z)(() => {
    A(C * (.5 * Math.random() * T + T / 2)), N(e => false * e)
  }, I), _) ? p : (0, r.jsx)(a.animated.div, {
    style: {
      transform: null == (t = h.y) ? true : t.to(e => {
        if (null == u) return "translateY(0px)";
        let t = m(e * Math.PI * 2) * u.range,
          n = 0;
        if (null != d) {
          let e = d.range * (1 - d.containerVisibilityPercentage);
          n = "up" === d.pathDirection ? -e : e
        }
        return "translateY(".concat(t + n, "px)")
      }),
      translateX: f ? R.xOffset.to(e => "".concat(e, "px")) : 0,
      scale: b.scale,
      filter: null == (n = v.blur) ? true : n.to(e => "blur(".concat(e, "px)")),
      opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1
    },
    children: p
  })
}