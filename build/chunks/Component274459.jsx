/** Chunk was on 46931 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442748 = require("./442748.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js"),
  Chunk456631 = require("./456631.js"),
  Chunk181201 = require("./181201.js");
let p = 6 * Chunk70956.Z.Millis.SECOND,
  m = 2 * Chunk70956.Z.Millis.SECOND,
  _ = 2 * Chunk70956.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function v(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: v,
    sentAt: b
  } = n, E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [h, y] = i.useState(true), S = !E, O = (0, o.Yzy)(h, {
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
    return Date.now() - b >= _ ? (0, d.H)(t) : e = setTimeout(() => {
      y(false), S && (0, d.H)(t)
    }, S ? m : p), () => {
      null != e && clearTimeout(e)
    }
  }, [b, t, S]), S) ? null : O((e, t) => {
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