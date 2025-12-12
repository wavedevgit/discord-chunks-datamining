/** Chunk was on web.js **/
/** chunk id: 98474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk467721 = require("./467721.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk745510 = require("./745510.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk912893 = require("./912893.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk675654 = require("./675654.js"),
  Chunk700700 = require("./700700.js");

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
  S = [];

function I(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: g,
    targetPosition: b
  } = e, [I, T] = i.useState(0), [C, A] = i.useState(0), [N, P] = i.useState(null), {
    confettiCanvas: R
  } = i.useContext(u.h), w = (0, a.uR)(R, N), D = i.useMemo(() => [{
    src: null == n.id ? _.ZP.getURL(n.name) : p.ZP.getEmojiURL({
      id: n.id,
      animated: false,
      size: 22
    }),
    colorize: false
  }], [n.name, n.id]), x = b.x - b.width / 2 * v, L = b.y - b.height / 2 * v, j = (0, l.q_F)({
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
      A(t)
    }
  }), M = (0, l.q_F)({
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
      T(t)
    }
  });
  return i.useEffect(() => {
    I > 0 && C > 0 && w.createConfetti(y(E({}, m.We), {
      position: {
        type: "static",
        value: {
          x: I,
          y: C
        }
      }
    }))
  }, [w, I, C]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Ji, {
      ref: P,
      sprites: D,
      colors: S,
      spriteWidth: m.Ko,
      spriteHeight: m.Ko
    }), (0, r.jsx)(d.ZP, {
      children: (0, r.jsx)(o.animated.div, {
        style: E({}, j),
        className: h.emojiContainer,
        children: (0, r.jsx)(o.animated.div, {
          style: y(E({}, M), {
            opacity: M.opacity
          }),
          children: (0, r.jsx)(c.Z, {
            className: h.emoji,
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