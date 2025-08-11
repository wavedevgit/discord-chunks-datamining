/** Chunk was on web.js **/
/** chunk id: 456631, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  H: () => m,
  Z: () => N
}), require("./388685.js"), require("./290780.js");
var i, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk963838 = require("./963838.js"),
  Chunk354459 = require("./354459.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = [],
  p = {},
  h = [],
  m = e => {
    null != e && l.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  g = [],
  E = 20,
  b = 10 * Chunk70956.Z.Millis.SECOND,
  y = () => {
    let e = new Date;
    if ((g = [module, ...g].slice(0, E)).length >= E) {
      let t = g[g.length - 1],
        n = module.getTime() - exports.getTime();
      require < b && (r = new Date(module.getTime() + b - require))
    }
  },
  O = e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    r = new Date(Date.now() + t)
  },
  v = (0, Chunk392711.debounce)(() => {
    let e = (0, Chunk963838.cX)(h);
    Chunk780384.uv.announce(module, "polite"), h = []
  }, 500),
  I = e => {
    let {
      emoji: t,
      userId: n,
      animationType: r
    } = e;
    null != t && null != r && (p[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: r
    }, h = [...h, {
      emojiName: t.name,
      userId: n
    }], v())
  },
  T = e => {
    let {
      emoji: t
    } = e;
    null != t && (_.unshift(t), (_ = (0, o.uniqBy)(_, "name")).length > d.e5 + 1 && _.pop())
  },
  S = e => {
    let {
      userId: t
    } = e;
    null != p[t] && delete p[t]
  };
class A extends(i = Chunk442837.ZP.Store) {
  get recentlyUsedEmojis() {
    return _
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
}
f(A, "displayName", "VoiceChannelEffectsStore");
let N = new A(Chunk570140.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: S,
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: T,
  VOICE_CHANNEL_EFFECT_SEND: I,
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: y,
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: O
})