/** Chunk was on web.js **/
/** chunk id: 643420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk661637 = require("./661637.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk146128 = require("./146128.jsx"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = 1e3 / 60,
  m = 24,
  g = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 8,
        y: 0
      },
      maxValue: {
        x: 50,
        y: 0
      }
    },
    rotation: {
      type: "linear-random",
      minValue: {
        x: 0,
        y: 0,
        z: 0
      },
      maxValue: {
        x: 0,
        y: 0,
        z: 360
      },
      minAddValue: {
        x: 0,
        y: 0,
        z: false
      },
      maxAddValue: {
        x: 0,
        y: 0,
        z: 5
      }
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 24,
      uniformVectorValues: true
    },
    dragCoefficient: {
      type: "static",
      value: .8
    },
    opacity: {
      type: "static-random",
      minValue: .7,
      maxValue: .5
    }
  },
  E = ["#FFFFFF"],
  b = [require("./123353.js"), ...(0, Chunk661637.Z)(["snowflake"])];

function y(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(false), d = (0, l.bp)(), [_, y] = i.useState(null), {
    confettiCanvas: O
  } = i.useContext(o.h), v = (0, a.uR)(O, _), I = i.useMemo(() => ({
    triggerAnimation: () => s(true),
    untriggerAnimation: () => s(false)
  }), []), S = i.useCallback(() => {
    let e = null == O ? true : O.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    v.createConfetti(p(f({}, g), {
      position: {
        type: "static-random",
        minValue: {
          x: -t.width / 2,
          y: -m
        },
        maxValue: {
          x: t.width,
          y: -m
        }
      }
    }))
  }, [v, O]);
  return (i.useEffect(() => {
    let e = n ? setInterval(S, h) : null;
    return () => clearInterval(e)
  }, [n, S]), d === u.IlC.OVERLAY) ? t : (0, r.jsxs)(c.Rm.Provider, {
    value: I,
    children: [t, (0, r.jsx)(a.Ji, {
      ref: y,
      colors: E,
      sprites: b,
      spriteWidth: m,
      spriteHeight: m
    })]
  })
}