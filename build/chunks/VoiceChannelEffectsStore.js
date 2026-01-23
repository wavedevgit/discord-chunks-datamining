/** Chunk was on 31748 **/
/** chunk id: 614518, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => b,
  a: () => m
}), require("./896048.js"), require("./667532.js");
var l, i, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk667050 = require("./667050.js");
require("./806931.js");
let f = [],
  p = {},
  g = [],
  m = e => {
    null != e && c.h.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  _ = [],
  h = 10 * Chunk927813.A.Millis.SECOND,
  y = (0, Chunk735438.debounce)(() => {
    let e = (0, d.fr)(g);
    s.OR.announce(e, "polite"), g = []
  }, 500);
class A extends(l = Chunk311907.Ay.Store) {
  get recentlyUsedEmojis() {
    return f
  }
  get isOnCooldown() {
    return null != r && new Date < r
  }
  get effectCooldownEndTime() {
    return r
  }
  getEffectForUserId(e) {
    return p[e]
  }
}(i = "displayName") in A ? Object.defineProperty(A, i, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[i] = "VoiceChannelEffectsStore";
let b = new A(Chunk73153.h, {
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
      animationType: r
    } = e;
    null != t && null != r && (p[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: r
    }, g = [...g, {
      emojiName: t.name,
      userId: n
    }], y())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((_ = [e, ..._].slice(0, 20)).length >= 20) {
      let t = _[_.length - 1],
        n = e.getTime() - t.getTime();
      n < h && (r = new Date(e.getTime() + h - n))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  }
})