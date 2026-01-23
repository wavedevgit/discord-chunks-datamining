/** Chunk was on web.js **/
/** chunk id: 187584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk531301 = require("./531301.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk129185 = require("./129185.jsx"),
  Chunk652215 = require("./652215.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
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
  y = [require("./426560.js"), ...(0, Chunk531301.A)(["snowflake"])];

function b(e) {
  let {
    children: t
  } = e, [n, o] = i.useState(false), d = (0, l.Us)(), [p, b] = i.useState(null), {
    confettiCanvas: O
  } = i.useContext(s.x), v = (0, a.f9)(O, p), A = i.useMemo(() => ({
    triggerAnimation: () => o(true),
    untriggerAnimation: () => o(false)
  }), []), I = i.useCallback(() => {
    let e = null == O ? true : O.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    v.createConfetti(_(f({}, g), {
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
    let e = n ? setInterval(I, h) : null;
    return () => clearInterval(e)
  }, [n, I]), d === u.BRT.OVERLAY) ? t : (0, r.jsxs)(c.wE.Provider, {
    value: A,
    children: [t, (0, r.jsx)(a.K_, {
      ref: b,
      colors: E,
      sprites: y,
      spriteWidth: m,
      spriteHeight: m
    })]
  })
}