/** Chunk was on web.js **/
/** chunk id: 108989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = [require("./123353.js")],
  d = ["#FFFFFF"],
  f = 6,
  _ = 1e3 / 60,
  p = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 0,
        y: 1
      },
      maxValue: {
        x: 3,
        y: 3
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
      maxValue: 6
    },
    dragCoefficient: {
      type: "static",
      value: 830
    },
    opacity: {
      type: "static",
      value: .3
    }
  };

function h(e) {
  let {
    className: t,
    firing: n = true,
    wind: a = 2,
    sprites: l = u,
    spriteColors: h = d,
    confettiConfig: m
  } = e, [g, E] = i.useState(null), [b, y] = i.useState(null), O = (0, o.uR)(b, g), v = i.useMemo(() => new o.qA({
    wind: a
  }), [a]), I = i.useCallback(() => {
    let e = null == b ? true : b.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    O.createConfetti(c(s({}, p, m), {
      position: {
        type: "static-random",
        minValue: {
          x: -t.width / 2,
          y: -f
        },
        maxValue: {
          x: t.width,
          y: -f
        }
      }
    }))
  }, [O, b, m]);
  return i.useEffect(() => {
    let e = n ? setInterval(I, _) : null;
    return () => clearInterval(e)
  }, [n, I]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.O_, {
      ref: y,
      className: t,
      environment: v
    }), (0, r.jsx)(o.Ji, {
      ref: E,
      colors: h,
      sprites: l,
      spriteWidth: f,
      spriteHeight: f
    })]
  })
}