/** Chunk was on web.js **/
/** chunk id: 572680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk108531 = require("./108531.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk21161 = require("./21161.jsx"),
  Chunk750506 = require("./750506.jsx"),
  Chunk147421 = require("./147421.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk851110 = require("./851110.js"),
  Chunk624085 = require("./624085.js");

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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 450,
  v = .5,
  A = [];

function I(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: g,
    targetPosition: y
  } = e, [I, S] = i.useState(0), [T, C] = i.useState(0), [N, w] = i.useState(null), {
    confettiCanvas: R
  } = i.useContext(u.x), P = (0, a.f9)(R, N), D = i.useMemo(() => [{
    src: null == n.id ? _.Ay.getURL(n.name) : p.Ay.getEmojiURL({
      id: n.id,
      animated: false,
      size: 22
    }),
    colorize: false
  }], [n.name, n.id]), x = y.x - y.width / 2 * v, L = y.y - y.height / 2 * v, j = (0, l.zhh)({
    from: {
      y: g.y
    },
    to: {
      y: L
    },
    config: {
      duration: O,
      easing: o.A.Easing.in(o.A.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      C(t)
    }
  }), M = (0, l.zhh)({
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
      easing: o.A.Easing.in(o.A.Easing.ease)
    },
    onRest: () => {
      (0, f.p)(t, n.name, n.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      S(t)
    }
  });
  return i.useEffect(() => {
    I > 0 && T > 0 && P.createConfetti(b(E({}, h.Mw), {
      position: {
        type: "static",
        value: {
          x: I,
          y: T
        }
      }
    }))
  }, [P, I, T]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.K_, {
      ref: w,
      sprites: D,
      colors: A,
      spriteWidth: h.wn,
      spriteHeight: h.wn
    }), (0, r.jsx)(d.Ay, {
      children: (0, r.jsx)(s.animated.div, {
        style: E({}, j),
        className: m.qq,
        children: (0, r.jsx)(s.animated.div, {
          style: b(E({}, M), {
            opacity: M.opacity
          }),
          children: (0, r.jsx)(c.A, {
            className: m.Zg,
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