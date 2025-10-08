/** Chunk was on 38319 **/
/** chunk id: 456631, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  H: () => b,
  Z: () => S
}), require("./388685.js"), require("./290780.js");
var i, l, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");
let p = [],
  _ = {},
  m = [],
  b = e => {
    null != e && s.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  E = [],
  g = 10 * Chunk70956.Z.Millis.SECOND,
  v = (0, Chunk392711.debounce)(() => {
    let e = (0, Chunk963838.cX)(m);
    Chunk780384.uv.announce(module, "polite"), m = []
  }, 500);
class h extends(i = Chunk442837.ZP.Store) {
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
    return _[e]
  }
}(l = "displayName") in h ? Object.defineProperty(h, l, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[l] = "VoiceChannelEffectsStore";
let S = new h(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != _[t] && delete _[t]
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
    null != t && null != r && (_[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: r
    }, m = [...m, {
      emojiName: t.name,
      userId: n
    }], v())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((E = [module, ...E].slice(0, 20)).length >= 20) {
      let t = E[E.length - 1],
        n = module.getTime() - exports.getTime();
      require < g && (r = new Date(module.getTime() + g - require))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  }
})