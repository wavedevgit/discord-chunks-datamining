/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(119617);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let u = [n(123353)],
  d = ["#FFFFFF"],
  f = 6,
  p = 1e3 / 60,
  _ = {
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
        z: -5
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
    firing: n = !0,
    wind: a = 2,
    sprites: l = u,
    spriteColors: h = d,
    confettiConfig: m
  } = e, [g, E] = i.useState(null), [v, b] = i.useState(null), y = (0, o.uR)(v, g), O = i.useMemo(() => new o.qA({
    wind: a
  }), [a]), S = i.useCallback(() => {
    let e = null == v ? void 0 : v.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    y.createConfetti(c(s({}, _, m), {
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
  }, [y, v, m]);
  return i.useEffect(() => {
    let e = n ? setInterval(S, p) : null;
    return () => clearInterval(e)
  }, [n, S]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.O_, {
      ref: b,
      className: t,
      environment: O
    }), (0, r.jsx)(o.Ji, {
      ref: E,
      colors: h,
      sprites: l,
      spriteWidth: f,
      spriteHeight: f
    })]
  })
}