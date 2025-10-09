/** Chunk was on web.js **/
/** chunk id: 131333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => j
}), require("./388685.js"), require("./35282.js"), require("./413496.js"), require("./433524.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk481060 = require("./481060.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk661637 = require("./661637.js"),
  Chunk549006 = require("./549006.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk146128 = require("./146128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk433661 = require("./433661.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = [],
  y = false,
  O = false,
  v = false,
  I = false,
  T = 11,
  S = 125,
  A = 20,
  C = 12,
  N = 48,
  R = .01,
  P = new Set(["jack_o_lantern", "nose"]),
  w = {
    jack_o_lantern: {
      sprites: (0, Chunk661637.Z)(["chocolate_bar", "lollipop", "candy"])
    },
    nose: {
      sprites: (0, Chunk661637.Z)(["foot"])
    }
  };

function D(e) {
  if (null == e) return null;
  for (let t of P)
    if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
  return null
}
let x = {
  enter: {
    BEG: 0,
    END: 22
  },
  confetti: {
    BEG: 23,
    END: 119
  },
  exit: {
    BEG: 164,
    END: 200
  }
};

function L() {
  return require.e("77843").then(require.t.bind(require, 931152, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function M(e) {
  if (null == e) return "enter";
  switch (e) {
    case "enter":
      return "confetti";
    case "confetti":
      return "exit";
    case "exit":
      return "enter"
  }
}
let k = Chunk647438.forwardRef(function(e, t) {
  let {
    sprites: n
  } = e, [o, l] = i.useState(null), {
    confettiCanvas: c
  } = i.useContext(s.h), u = (0, a.uR)(c, o);
  return i.useImperativeHandle(t, () => ({
    fireConfetti: (e, t) => {
      u.createMultipleConfetti(E(m({}, _.We), {
        position: {
          type: "static",
          value: {
            x: e,
            y: t
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: y,
            y: v
          },
          maxValue: {
            x: O,
            y: I
          }
        },
        size: {
          type: "static-random",
          minValue: C,
          maxValue: N
        },
        dragCoefficient: {
          type: "static",
          value: R
        }
      }), A)
    }
  }), [u]), (0, r.jsx)(a.Ji, {
    ref: l,
    colors: b,
    sprites: n,
    spriteWidth: N,
    spriteHeight: N
  })
});

function j(e) {
  let {
    children: t
  } = e, n = i.useRef({}), [a, s] = i.useState(null), l = M(a), _ = i.useRef(null), [h, m] = i.useState(false), g = i.useRef("jack_o_lantern"), E = (0, u.bp)(), b = i.useCallback(e => {
    if (!h) {
      let t = D(e);
      null != t && (g.current = t, m(true), s(null))
    }
  }, [h]), y = i.useMemo(() => ({
    triggerAnimation: b,
    untriggerAnimation: () => {}
  }), [b]), O = i.useCallback(e => {
    s(e)
  }, []), v = i.useCallback(e => {
    "exit" === e && m(false)
  }, []), I = i.useCallback(e => {
    _.current = e
  }, []);
  return (i.useEffect(() => {
    if ("confetti" === a) {
      if (null == _.current) return;
      let e = _.current.getBoundingClientRect(),
        t = e.left - T,
        r = e.top + S,
        i = n.current[g.current];
      null == i || i.fireConfetti(t, r)
    }
  }, [a]), E !== f.IlC.APP) ? t : (0, r.jsxs)(d.Rm.Provider, {
    value: y,
    children: [t, Object.keys(w).map(e => {
      let t = w[e];
      return (0, r.jsx)(k, {
        ref: t => {
          null != t ? n.current[e] = t : delete n.current[e]
        },
        sprites: t.sprites
      }, e)
    }), h ? (0, r.jsx)(c.ZP, {
      children: (0, r.jsx)("div", {
        className: p.animationWrapper,
        children: (0, r.jsx)(o.kci, {
          animationRef: I,
          className: p.lottieAnimation,
          nextScene: l,
          sceneSegments: x,
          onScenePlay: O,
          onSceneComplete: v,
          importData: L,
          pauseWhileUnfocused: false
        })
      })
    }) : null]
  })
}