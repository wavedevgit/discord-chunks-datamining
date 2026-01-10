/** Chunk was on 81985 **/
/** chunk id: 488785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk577063 = require("./577063.js");
let h = [Chunk577063.emoji1, Chunk577063.emoji2, Chunk577063.emoji3, Chunk577063.emoji4],
  g = Chunk473749.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: l
    } = e, s = (0, o.sample)(h), c = i.useCallback(() => {
      l(n.key)
    }, [n.key, l]);
    return (0, r.jsx)("div", {
      className: a()(f.emoji, s),
      onAnimationEnd: c,
      children: (0, r.jsx)(d.Z, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null != (t = n.animated) && t
      })
    })
  });

function m(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), [a, o] = i.useState([]);
  i.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: r
      } = e;
      n !== t || l || null == r || o(e => [...e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        key: (0, s.Z)()
      }, r)])
    }
    return u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, l]);
  let d = i.useCallback(e => {
    o(t => t.filter(t => t.key !== e))
  }, []);
  return l ? null : (0, r.jsx)("div", {
    className: f.container,
    style: {
      top: n - 50,
      left: "52%"
    },
    "aria-hidden": true,
    children: a.map(e => (0, r.jsx)(g, {
      emoji: e,
      onAnimationEnd: d
    }, e.key))
  })
}