/** Chunk was on 86642 **/
/** chunk id: 456631, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  H: () => g,
  Z: () => v
}), require("./388685.js"), require("./290780.js");
var r, l, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");
let f = [],
  h = {},
  m = [],
  g = e => {
    null != e && c.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  b = [],
  y = 10 * Chunk70956.Z.Millis.SECOND,
  C = (0, Chunk392711.debounce)(() => {
    let e = (0, Chunk963838.cX)(m);
    Chunk780384.uv.announce(module, "polite"), m = []
  }, 500);
class _ extends(r = Chunk442837.ZP.Store) {
  get recentlyUsedEmojis() {
    return f
  }
  get isOnCooldown() {
    return null != i && new Date < i
  }
  get effectCooldownEndTime() {
    return i
  }
  getEffectForUserId(e) {
    return h[e]
  }
}(l = "displayName") in _ ? Object.defineProperty(_, l, {
  value: "VoiceChannelEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[l] = "VoiceChannelEffectsStore";
let v = new _(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != h[t] && delete h[t]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: t
    } = e;
    null != t && (f.unshift(t), (f = (0, a.uniqBy)(f, "name")).length > p.e5 + 1 && f.pop())
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: t,
      userId: n,
      animationType: i
    } = e;
    null != t && null != i && (h[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: i
    }, m = [...m, {
      emojiName: t.name,
      userId: n
    }], C())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((b = [module, ...b].slice(0, 20)).length >= 20) {
      let t = b[b.length - 1],
        n = module.getTime() - exports.getTime();
      require < y && (i = new Date(module.getTime() + y - require))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    i = new Date(Date.now() + t)
  }
})