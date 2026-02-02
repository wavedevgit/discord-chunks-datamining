/** Chunk was on 17537 **/
/** chunk id: 25639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E,
  s: () => h
}), require("./896048.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk967198 = require("./967198.js"),
  Chunk977997 = require("./977997.js");

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
var h = ((r = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT", r.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO", r.HIGH_CONTRAST = "HIGH_CONTRAST", r);
let f = {},
  g = {},
  p = null;

function b(e) {
  null != g[e] && (clearTimeout(g[e]), delete g[e])
}

function m(e) {
  b(e), g[e] = setTimeout(() => {
    let t = f[e];
    null != t && (f[e] = d(c({}, t), {
      style: "GENTLE_AMBIENT"
    }), j.emitChange()), delete g[e]
  }, 2e3)
}

function y() {
  for (let e of Object.keys(g)) clearTimeout(g[e]);
  g = {}, f = {}
}

function v() {
  return y(), true
}
class O extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A, o.A)
  }
  getAnimationStyle(e) {
    var t, n;
    return null != (t = null == (n = f[e]) ? true : n.style) ? t : "GENTLE_AMBIENT"
  }
  getUserCount(e) {
    var t, n;
    return null != (t = null == (n = f[e]) ? true : n.userCount) ? t : 0
  }
}
u(O, "displayName", "VoiceChannelAnimationStateStore");
let j = new O(Chunk73153.h, {
    VOICE_STATE_UPDATES: function(e) {
      let {
        voiceStates: t
      } = e, n = o.A.getGuildId();
      n !== p && null != n && (p = n);
      let l = {};
      for (let e of t) {
        var r, i;
        e.guildId === n && (null != e.oldChannelId && (l[e.oldChannelId] = (null != (r = l[e.oldChannelId]) ? r : 0) - 1), null != e.channelId && (l[e.channelId] = (null != (i = l[e.channelId]) ? i : 0) + 1))
      }
      let a = false;
      for (let [e, t] of Object.entries(l))(function(e, t) {
        var n;
        let l = f[e],
          r = null != (n = null == l ? true : l.userCount) ? n : 0,
          i = Math.max(0, r + t);
        return 0 === r && i > 0 ? (f[e] = {
          style: "GENTLE_AMBIENT_WITH_INTRO",
          userCount: i
        }, m(e), true) : r > 0 && i > r ? (f[e] = {
          style: "HIGH_CONTRAST",
          userCount: i
        }, m(e), true) : 0 === i ? (b(e), delete f[e], true) : null != l && i !== r && (f[e] = d(c({}, l), {
          userCount: i
        }), true)
      })(e, t) && (a = true);
      return a
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t
      } = e;
      if (t === p || null == t) returnfalse;
      p = t, y();
      let n = s.A.getVoiceStates(t),
        l = {};
      for (let e of Object.values(n))
        if (null != e.channelId) {
          var r;
          l[e.channelId] = (null != (r = l[e.channelId]) ? r : 0) + 1
        } for (let [e, t] of Object.entries(l)) t > 0 && (f[e] = {
        style: "GENTLE_AMBIENT",
        userCount: t
      });
      returntrue
    },
    CONNECTION_OPEN: v,
    LOGOUT: v
  }),
  E = j