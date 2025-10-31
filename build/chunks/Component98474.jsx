/** Chunk was on web.js **/
/** chunk id: 98474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk13941 = require("./13941.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk745510 = require("./745510.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk912893 = require("./912893.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk675654 = require("./675654.js"),
  Chunk42868 = require("./42868.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 450,
  v = .5,
  I = [];

function T(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: g,
    targetPosition: b
  } = e, [T, S] = i.useState(0), [A, C] = i.useState(0), [N, R] = i.useState(null), {
    confettiCanvas: P
  } = i.useContext(u.h), w = (0, a.uR)(P, N), D = i.useMemo(() => [{
    src: null == n.id ? p.ZP.getURL(n.name) : _.ZP.getEmojiURL({
      id: n.id,
      animated: false,
      size: 22
    }),
    colorize: false
  }], [n.name, n.id]), x = b.x - b.width / 2 * v, L = b.y - b.height / 2 * v, M = (0, l.q_F)({
    from: {
      y: g.y
    },
    to: {
      y: L
    },
    config: {
      duration: O,
      easing: s.Z.Easing.in(s.Z.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      C(t)
    }
  }), j = (0, l.q_F)({
    from: {
      x: g.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: x,
      scale: v,
      opacity: .4
    },
    config: {
      duration: O,
      easing: s.Z.Easing.in(s.Z.Easing.ease)
    },
    onRest: () => {
      (0, f.G)(t, n.name, n.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      S(t)
    }
  });
  return i.useEffect(() => {
    T > 0 && A > 0 && w.createConfetti(y(E({}, h.We), {
      position: {
        type: "static",
        value: {
          x: T,
          y: A
        }
      }
    }))
  }, [w, T, A]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Ji, {
      ref: R,
      sprites: D,
      colors: I,
      spriteWidth: h.Ko,
      spriteHeight: h.Ko
    }), (0, r.jsx)(d.ZP, {
      children: (0, r.jsx)(o.animated.div, {
        style: E({}, M),
        className: m.emojiContainer,
        children: (0, r.jsx)(o.animated.div, {
          style: y(E({}, j), {
            opacity: j.opacity
          }),
          children: (0, r.jsx)(c.Z, {
            className: m.emoji,
            emojiId: n.id,
            emojiName: n.name,
            animated: n.animated,
            size: "jumbo"
          })
        })
      })
    })]
  })
}