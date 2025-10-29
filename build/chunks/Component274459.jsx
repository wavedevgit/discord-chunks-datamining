/** Chunk was on 73726 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk13941 = require("./13941.js"),
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
    sentAt: _
  } = n, y = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), [C, v] = i.useState(true), x = !y, O = (0, o.Yzy)(C, {
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
    return Date.now() - _ >= m ? (0, d.H)(t) : e = setTimeout(() => {
      v(false), x && (0, d.H)(t)
    }, x ? h : f), () => {
      null != e && clearTimeout(e)
    }
  }, [_, t, x]), x) ? null : O((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, r.jsx)(l.animated.div, {
      className: p.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(g)
      },
      children: (0, r.jsx)(s.Z, {
        className: p.voiceChannelEffectEmoji,
        emojiId: b.id,
        emojiName: b.name,
        animated: null != (n = b.animated) && n
      })
    })
  })
}