/** Chunk was on 61344 **/
/** chunk id: 614518, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => y,
  a: () => m
}), require("./896048.js"), require("./667532.js");
var r, i, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk667050 = require("./667050.js");
require("./806931.js");
let h = [],
  p = {},
  f = [],
  m = e => {
    null != e && c.h.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  g = [],
  A = 10 * Chunk927813.A.Millis.SECOND,
  b = (0, Chunk735438.debounce)(() => {
    let e = (0, d.fr)(f);
    o.OR.announce(e, "polite"), f = []
  }, 500);
class _ extends(r = Chunk311907.Ay.Store) {
  get recentlyUsedEmojis() {
    return h
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
}(i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[i] = "VoiceChannelEffectsStore";
let y = new _(Chunk73153.h, {
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
    null != t && (h.unshift(t), (h = (0, a.uniqBy)(h, "name")).length > 9 && h.pop())
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
    }, f = [...f, {
      emojiName: t.name,
      userId: n
    }], b())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((g = [e, ...g].slice(0, 20)).length >= 20) {
      let t = g[g.length - 1],
        n = e.getTime() - t.getTime();
      n < A && (l = new Date(e.getTime() + A - n))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    l = new Date(Date.now() + t)
  }
})