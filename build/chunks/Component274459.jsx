/** Chunk was on 86642 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js"),
  Chunk456631 = require("./456631.js"),
  Chunk181201 = require("./181201.js");
let f = 6 * Chunk70956.Z.Millis.SECOND,
  h = 2 * Chunk70956.Z.Millis.SECOND,
  m = 2 * Chunk70956.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function b(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: b,
    sentAt: y
  } = n, C = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), [_, v] = r.useState(true), x = !C, O = (0, o.Yzy)(_, {
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
  return (r.useEffect(() => {
    let e;
    return Date.now() - y >= m ? (0, d.H)(t) : e = setTimeout(() => {
      v(false), x && (0, d.H)(t)
    }, x ? h : f), () => {
      null != e && clearTimeout(e)
    }
  }, [y, t, x]), x) ? null : O((e, t) => {
    var n;
    let {
      rotate: r
    } = e;
    return t && (0, i.jsx)(l.animated.div, {
      className: p.voiceChannelEffectEmojiContainer,
      style: {
        transform: r.to(g)
      },
      children: (0, i.jsx)(s.Z, {
        className: p.voiceChannelEffectEmoji,
        emojiId: b.id,
        emojiName: b.name,
        animated: null != (n = b.animated) && n
      })
    })
  })
}