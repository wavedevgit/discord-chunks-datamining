/** Chunk was on 31748 **/
/** chunk id: 614518, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => _,
  a: () => g
}), require("./896048.js"), require("./667532.js");
var r, i, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk667050 = require("./667050.js");
require("./806931.js");
let f = [],
  p = {},
  b = [],
  g = e => {
    null != e && c.h.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  m = [],
  h = 10 * Chunk927813.A.Millis.SECOND,
  A = (0, Chunk735438.debounce)(() => {
    let e = (0, d.fr)(b);
    o.OR.announce(e, "polite"), b = []
  }, 500);
class y extends(r = Chunk311907.Ay.Store) {
  get recentlyUsedEmojis() {
    return f
  }
  get isOnCooldown() {
    return null != l && new Date < l
  }
  get effectCooldownEndTime() {
    return l
  }
  getEffectForUserId(e) {
    return p[e]
  }
}(i = "displayName") in y ? Object.defineProperty(y, i, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[i] = "VoiceChannelEffectsStore";
let _ = new y(Chunk73153.h, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != p[t] && delete p[t]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: t
    } = e;
    null != t && (f.unshift(t), (f = (0, a.uniqBy)(f, "name")).length > 9 && f.pop())
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: t,
      userId: n,
      animationType: l
    } = e;
    null != t && null != l && (p[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: l
    }, b = [...b, {
      emojiName: t.name,
      userId: n
    }], A())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((m = [e, ...m].slice(0, 20)).length >= 20) {
      let t = m[m.length - 1],
        n = e.getTime() - t.getTime();
      n < h && (l = new Date(e.getTime() + h - n))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    l = new Date(Date.now() + t)
  }
})