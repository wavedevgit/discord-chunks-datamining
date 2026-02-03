/** Chunk was on 7034 **/
/** chunk id: 572680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk92674 = require("./92674.js"),
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

function y(e, t) {
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

function v(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: v,
    targetPosition: j
  } = e, [A, T] = l.useState(0), [E, I] = l.useState(0), [S, x] = l.useState(null), {
    confettiCanvas: N
  } = l.useContext(c.x), R = (0, r.f9)(N, S), P = l.useMemo(() => [{
    src: null == n.id ? m.Ay.getURL(n.name) : h.Ay.getEmojiURL({
      id: n.id,
      animated: false,
      size: 22
    }),
    colorize: false
  }], [n.name, n.id]), C = j.x - j.width / 2 * .5, w = j.y - j.height / 2 * .5, _ = (0, s.zhh)({
    from: {
      y: v.y
    },
    to: {
      y: w
    },
    config: {
      duration: 450,
      easing: a.A.Easing.in(a.A.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      I(t)
    }
  }), M = (0, s.zhh)({
    from: {
      x: v.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: C,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: a.A.Easing.in(a.A.Easing.ease)
    },
    onRest: () => {
      (0, p.p)(t, n.name, n.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      T(t)
    }
  });
  return l.useEffect(() => {
    A > 0 && E > 0 && R.createConfetti(y(b({}, f.Mw), {
      position: {
        type: "static",
        value: {
          x: A,
          y: E
        }
      }
    }))
  }, [R, A, E]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.K_, {
      ref: x,
      sprites: P,
      colors: O,
      spriteWidth: f.wn,
      spriteHeight: f.wn
    }), (0, i.jsx)(d.Ay, {
      children: (0, i.jsx)(o.animated.div, {
        style: b({}, _),
        className: g.qq,
        children: (0, i.jsx)(o.animated.div, {
          style: y(b({}, M), {
            opacity: M.opacity
          }),
          children: (0, i.jsx)(u.A, {
            className: g.Zg,
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