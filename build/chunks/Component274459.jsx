/** Chunk was on 48615 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk807794 = require("./807794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js"),
  Chunk456631 = require("./456631.js"),
  Chunk516846 = require("./516846.js");
let p = 6 * Chunk70956.Z.Millis.SECOND,
  b = 2 * Chunk70956.Z.Millis.SECOND,
  m = 2 * Chunk70956.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function v(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: v,
    sentAt: h
  } = n, E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [_, y] = i.useState(true), S = !E, O = (0, o.Yzy)(_, {
    from: {
      rotate: false
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: false
    },
    config: l.config.default,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && u()
    }
  });
  return (i.useEffect(() => {
    let e;
    return Date.now() - h >= m ? (0, d.H)(t) : e = setTimeout(() => {
      y(false), S && (0, d.H)(t)
    }, S ? b : p), () => {
      null != e && clearTimeout(e)
    }
  }, [h, t, S]), S) ? null : O((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, r.jsx)(l.animated.div, {
      className: f.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(g)
      },
      children: (0, r.jsx)(c.Z, {
        className: f.voiceChannelEffectEmoji,
        emojiId: v.id,
        emojiName: v.name,
        animated: null != (n = v.animated) && n
      })
    })
  })
}