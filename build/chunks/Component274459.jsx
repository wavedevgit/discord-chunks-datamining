/** Chunk was on 24255 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
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

function S(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: c
  } = e, {
    emoji: S,
    sentAt: v
  } = n, h = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [b, O] = l.useState(true), y = !h, _ = (0, o.Yzy)(b, {
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
    return Date.now() - v >= E ? (0, d.H)(t) : e = setTimeout(() => {
      O(false), y && (0, d.H)(t)
    }, y ? m : p), () => {
      null != e && clearTimeout(e)
    }
  }, [v, t, y]), y) ? null : _((e, t) => {
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
        emojiId: S.id,
        emojiName: S.name,
        animated: null != (n = S.animated) && n
      })
    })
  })
}