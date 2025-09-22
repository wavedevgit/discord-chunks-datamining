/** Chunk was on 69634 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js"),
  Chunk456631 = require("./456631.js"),
  Chunk181201 = require("./181201.js");
let p = 6 * Chunk70956.Z.Millis.SECOND,
  m = 2 * Chunk70956.Z.Millis.SECOND,
  E = 2 * Chunk70956.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function b(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: c
  } = e, {
    emoji: b,
    sentAt: S
  } = n, v = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [h, O] = l.useState(true), y = !v, _ = (0, o.Yzy)(h, {
    from: {
      rotate: false
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: false
    },
    config: i.config.default,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && c()
    }
  });
  return (l.useEffect(() => {
    let e;
    return Date.now() - S >= E ? (0, d.H)(t) : e = setTimeout(() => {
      O(false), y && (0, d.H)(t)
    }, y ? m : p), () => {
      null != e && clearTimeout(e)
    }
  }, [S, t, y]), y) ? null : _((e, t) => {
    var n;
    let {
      rotate: l
    } = e;
    return t && (0, r.jsx)(i.animated.div, {
      className: f.voiceChannelEffectEmojiContainer,
      style: {
        transform: l.to(g)
      },
      children: (0, r.jsx)(u.Z, {
        className: f.voiceChannelEffectEmoji,
        emojiId: b.id,
        emojiName: b.name,
        animated: null != (n = b.animated) && n
      })
    })
  })
}