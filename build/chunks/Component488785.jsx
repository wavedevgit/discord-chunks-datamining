/** Chunk was on 57336 **/
/** chunk id: 488785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk604729 = require("./604729.js");
let f = [Chunk604729.emoji1, Chunk604729.emoji2, Chunk604729.emoji3, Chunk604729.emoji4],
  m = Chunk647438.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: l
    } = e, s = (0, o.sample)(f), c = r.useCallback(() => {
      l(n.key)
    }, [n.key, l]);
    return (0, i.jsx)("div", {
      className: a()(h.emoji, s),
      onAnimationEnd: c,
      children: (0, i.jsx)(d.Z, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null != (t = n.animated) && t
      })
    })
  });

function g(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), [a, o] = r.useState([]);
  r.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: i
      } = e;
      n !== t || l || null == i || o(e => [...e, function(e) {
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
      }({
        key: (0, s.Z)()
      }, i)])
    }
    return u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, l]);
  let d = r.useCallback(e => {
    o(t => t.filter(t => t.key !== e))
  }, []);
  return l ? null : (0, i.jsx)("div", {
    className: h.container,
    style: {
      top: n - 50,
      left: "52%"
    },
    "aria-hidden": true,
    children: a.map(e => (0, i.jsx)(m, {
      emoji: e,
      onAnimationEnd: d
    }, e.key))
  })
}