/** Chunk was on 37832 **/
/** chunk id: 456631, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  H: () => g,
  Z: () => O
}), require("./388685.js"), require("./290780.js");
var l, i, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");
let p = [],
  m = {},
  E = [],
  g = e => {
    null != e && s.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  b = [],
  S = 10 * Chunk70956.Z.Millis.SECOND,
  v = (0, Chunk392711.debounce)(() => {
    let e = (0, Chunk963838.cX)(E);
    Chunk780384.uv.announce(module, "polite"), E = []
  }, 500);
class h extends(l = Chunk442837.ZP.Store) {
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
}(i = "displayName") in h ? Object.defineProperty(h, i, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = "VoiceChannelEffectsStore";
let O = new h(Chunk570140.Z, {
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
    }, E = [...E, {
      emojiName: t.name,
      userId: n
    }], v())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((b = [module, ...b].slice(0, 20)).length >= 20) {
      let t = b[b.length - 1],
        n = module.getTime() - exports.getTime();
      require < S && (r = new Date(module.getTime() + S - require))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  }
})