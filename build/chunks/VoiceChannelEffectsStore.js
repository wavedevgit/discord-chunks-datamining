/** Chunk was on 11010 **/
/** chunk id: 456631, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  H: () => b,
  Z: () => _
}), require("./388685.js"), require("./290780.js");
var i, l, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");
let p = [],
  g = {},
  m = [],
  b = e => {
    null != e && s.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  h = [],
  v = 10 * Chunk70956.Z.Millis.SECOND,
  E = (0, Chunk392711.debounce)(() => {
    let e = (0, d.cX)(m);
    c.uv.announce(e, "polite"), m = []
  }, 500);
class y extends(i = Chunk442837.ZP.Store) {
  get recentlyUsedEmojis() {
    return p
  }
  get isOnCooldown() {
    return null != r && new Date < r
  }
  get effectCooldownEndTime() {
    return r
  }
  getEffectForUserId(e) {
    return g[e]
  }
}(l = "displayName") in y ? Object.defineProperty(y, l, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[l] = "VoiceChannelEffectsStore";
let _ = new y(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != g[t] && delete g[t]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: t
    } = e;
    null != t && (p.unshift(t), (p = (0, a.uniqBy)(p, "name")).length > f.e5 + 1 && p.pop())
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: t,
      userId: n,
      animationType: r
    } = e;
    null != t && null != r && (g[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: r
    }, m = [...m, {
      emojiName: t.name,
      userId: n
    }], E())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((h = [e, ...h].slice(0, 20)).length >= 20) {
      let t = h[h.length - 1],
        n = e.getTime() - t.getTime();
      n < v && (r = new Date(e.getTime() + v - n))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  }
})