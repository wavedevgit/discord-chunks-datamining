/** Chunk was on 38626 **/
/** chunk id: 98474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk815061 = require("./815061.js"),
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

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = [];

function y(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: y,
    targetPosition: v
  } = e, [T, S] = r.useState(0), [x, E] = r.useState(0), [R, I] = r.useState(null), {
    confettiCanvas: N
  } = r.useContext(u.h), P = (0, l.uR)(N, R), C = r.useMemo(() => [{
    src: null == n.id ? m.ZP.getURL(n.name) : p.ZP.getEmojiURL({
      id: n.id,
      animated: false,
      size: 22
    }),
    colorize: false
  }], [n.name, n.id]), w = v.x - v.width / 2 * .5, Z = v.y - v.height / 2 * .5, A = (0, s.q_F)({
    from: {
      y: y.y
    },
    to: {
      y: Z
    },
    config: {
      duration: 450,
      easing: a.Z.Easing.in(a.Z.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      E(t)
    }
  }), M = (0, s.q_F)({
    from: {
      x: y.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: w,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: a.Z.Easing.in(a.Z.Easing.ease)
    },
    onRest: () => {
      (0, h.G)(t, n.name, n.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      S(t)
    }
  });
  return r.useEffect(() => {
    T > 0 && x > 0 && P.createConfetti(j(b({}, f.We), {
      position: {
        type: "static",
        value: {
          x: T,
          y: x
        }
      }
    }))
  }, [P, T, x]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Ji, {
      ref: I,
      sprites: C,
      colors: O,
      spriteWidth: f.Ko,
      spriteHeight: f.Ko
    }), (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)(o.animated.div, {
        style: b({}, A),
        className: g.emojiContainer,
        children: (0, i.jsx)(o.animated.div, {
          style: j(b({}, M), {
            opacity: M.opacity
          }),
          children: (0, i.jsx)(c.Z, {
            className: g.emoji,
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