/** Chunk was on web.js **/
/** chunk id: 274459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
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
  Chunk209767 = require("./209767.js");
let _ = false,
  p = 6 * Chunk70956.Z.Millis.SECOND,
  h = 2 * Chunk70956.Z.Millis.SECOND,
  m = 2 * Chunk70956.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - e / _, ") rotate(").concat(e, "deg)");

function E(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: u
  } = e, {
    emoji: E,
    sentAt: b
  } = n, y = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), [O, v] = i.useState(true), I = !y, T = (0, s.Yzy)(O, {
    from: {
      rotate: _
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: _
    },
    config: o.config.default,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && u()
    }
  });
  return (i.useEffect(() => {
    let e;
    return Date.now() - b >= m ? (0, d.H)(t) : e = setTimeout(() => {
      v(false), I && (0, d.H)(t)
    }, I ? h : p), () => {
      null != e && clearTimeout(e)
    }
  }, [b, t, I]), I) ? null : T((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, r.jsx)(o.animated.div, {
      className: f.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(g)
      },
      children: (0, r.jsx)(l.Z, {
        className: f.voiceChannelEffectEmoji,
        emojiId: E.id,
        emojiName: E.name,
        animated: null != (n = E.animated) && n
      })
    })
  })
}