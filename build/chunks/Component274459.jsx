/** Chunk was on 69813 **/
/** chunk id: 274459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js"),
  Chunk456631 = require("./456631.js"),
  Chunk516846 = require("./516846.js");
let p = 6 * Chunk70956.Z.Millis.SECOND,
  g = 2 * Chunk70956.Z.Millis.SECOND,
  b = 2 * Chunk70956.Z.Millis.SECOND,
  m = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: h,
    sentAt: E
  } = n, _ = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [v, y] = l.useState(true), O = !_, S = (0, o.Yzy)(v, {
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
      "leave" === n && u()
    }
  });
  return (l.useEffect(() => {
    let e;
    return Date.now() - E >= b ? (0, d.H)(t) : e = setTimeout(() => {
      y(false), O && (0, d.H)(t)
    }, O ? g : p), () => {
      null != e && clearTimeout(e)
    }
  }, [E, t, O]), O) ? null : S((e, t) => {
    var n;
    let {
      rotate: l
    } = e;
    return t && (0, r.jsx)(i.animated.div, {
      className: f.voiceChannelEffectEmojiContainer,
      style: {
        transform: l.to(m)
      },
      children: (0, r.jsx)(c.Z, {
        className: f.voiceChannelEffectEmoji,
        emojiId: h.id,
        emojiName: h.name,
        animated: null != (n = h.animated) && n
      })
    })
  })
}