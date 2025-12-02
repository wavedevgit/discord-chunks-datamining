/** Chunk was on 46931 **/
/** chunk id: 456631, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  H: () => g,
  Z: () => y
}), require("./388685.js"), require("./290780.js");
var i, l, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");
let p = [],
  m = {},
  _ = [],
  g = e => {
    null != e && s.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  v = [],
  b = 10 * Chunk70956.Z.Millis.SECOND,
  h = (0, Chunk392711.debounce)(() => {
    let e = (0, Chunk963838.cX)(_);
    Chunk780384.uv.announce(module, "polite"), _ = []
  }, 500);
class E extends(i = Chunk442837.ZP.Store) {
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
    return m[e]
  }
}(l = "displayName") in E ? Object.defineProperty(E, l, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[l] = "VoiceChannelEffectsStore";
let y = new E(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != m[t] && delete m[t]
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
    null != t && null != r && (m[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: r
    }, _ = [..._, {
      emojiName: t.name,
      userId: n
    }], h())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((v = [module, ...v].slice(0, 20)).length >= 20) {
      let t = v[v.length - 1],
        n = module.getTime() - exports.getTime();
      require < b && (r = new Date(module.getTime() + b - require))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  }
})