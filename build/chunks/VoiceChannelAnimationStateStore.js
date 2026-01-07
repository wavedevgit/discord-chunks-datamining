/** Chunk was on 39206 **/
/** chunk id: 454135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  i: () => g
}), require("./388685.js");
var l, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk914010 = require("./914010.js"),
  Chunk979651 = require("./979651.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = ((i = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT", i.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO", i.HIGH_CONTRAST = "HIGH_CONTRAST", i);
let f = {},
  h = {},
  m = null;

function N(e) {
  null != h[e] && (clearTimeout(h[e]), delete h[e])
}

function E(e) {
  N(e), h[e] = setTimeout(() => {
    let t = f[e];
    null != t && (f[e] = d(c({}, t), {
      style: "GENTLE_AMBIENT"
    }), O.emitChange()), delete h[e]
  }, 2e3)
}

function p() {
  for (let e of Object.keys(h)) clearTimeout(h[e]);
  h = {}, f = {}
}

function v() {
  return p(), true
}
class T extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, o.Z)
  }
  getAnimationStyle(e) {
    var t, n;
    return null != (n = null == (t = f[e]) ? true : t.style) ? n : "GENTLE_AMBIENT"
  }
  getUserCount(e) {
    var t, n;
    return null != (n = null == (t = f[e]) ? true : t.userCount) ? n : 0
  }
}
u(T, "displayName", "VoiceChannelAnimationStateStore");
let O = new T(Chunk570140.Z, {
    VOICE_STATE_UPDATES: function(e) {
      let {
        voiceStates: t
      } = e, n = o.Z.getGuildId();
      n !== m && null != n && (m = n);
      let l = {};
      for (let e of t) {
        var i, r;
        e.guildId === n && (null != e.oldChannelId && (l[e.oldChannelId] = (null != (i = l[e.oldChannelId]) ? i : 0) - 1), null != e.channelId && (l[e.channelId] = (null != (r = l[e.channelId]) ? r : 0) + 1))
      }
      let a = false;
      for (let [e, t] of Object.entries(l))(function(e, t) {
        var n;
        let l = f[e],
          i = null != (n = null == l ? true : l.userCount) ? n : 0,
          r = Math.max(0, i + t);
        return 0 === i && r > 0 ? (f[e] = {
          style: "GENTLE_AMBIENT_WITH_INTRO",
          userCount: r
        }, E(e), true) : i > 0 && r > i ? (f[e] = {
          style: "HIGH_CONTRAST",
          userCount: r
        }, E(e), true) : 0 === r ? (N(e), delete f[e], true) : null != l && r !== i && (f[e] = d(c({}, l), {
          userCount: r
        }), true)
      })(e, t) && (a = true);
      return a
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t
      } = e;
      if (t === m || null == t) returnfalse;
      m = t, p();
      let n = s.Z.getVoiceStates(t),
        l = {};
      for (let e of Object.values(n))
        if (null != e.channelId) {
          var i;
          l[e.channelId] = (null != (i = l[e.channelId]) ? i : 0) + 1
        } for (let [e, t] of Object.entries(l)) t > 0 && (f[e] = {
        style: "GENTLE_AMBIENT",
        userCount: t
      });
      returntrue
    },
    CONNECTION_OPEN: v,
    LOGOUT: v
  }),
  y = O