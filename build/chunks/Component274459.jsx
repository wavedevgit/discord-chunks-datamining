/** Chunk was on 11010 **/
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
  m = 2 * Chunk70956.Z.Millis.SECOND,
  b = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: h,
    sentAt: v
  } = n, E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [y, _] = i.useState(true), O = !E, C = (0, o.Yzy)(y, {
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
    return Date.now() - v >= m ? (0, d.H)(t) : e = setTimeout(() => {
      _(false), O && (0, d.H)(t)
    }, O ? g : p), () => {
      null != e && clearTimeout(e)
    }
  }, [v, t, O]), O) ? null : C((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, r.jsx)(l.animated.div, {
      className: f.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(b)
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