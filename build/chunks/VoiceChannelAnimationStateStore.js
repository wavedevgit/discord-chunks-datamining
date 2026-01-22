/** Chunk was on 60989 **/
/** chunk id: 25639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O,
  s: () => f
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
var f = ((r = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT", r.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO", r.HIGH_CONTRAST = "HIGH_CONTRAST", r);
let g = {},
  h = {},
  m = null;

function b(e) {
  null != h[e] && (clearTimeout(h[e]), delete h[e])
}

function y(e) {
  b(e), h[e] = setTimeout(() => {
    let t = g[e];
    null != t && (g[e] = d(c({}, t), {
      style: "GENTLE_AMBIENT"
    }), p.emitChange()), delete h[e]
  }, 2e3)
}

function N() {
  for (let e of Object.keys(h)) clearTimeout(h[e]);
  h = {}, g = {}
}

function A() {
  return N(), true
}
class E extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, s.A)
  }
  getAnimationStyle(e) {
    var t, n;
    return null != (t = null == (n = g[e]) ? true : n.style) ? t : "GENTLE_AMBIENT"
  }
  getUserCount(e) {
    var t, n;
    return null != (t = null == (n = g[e]) ? true : n.userCount) ? t : 0
  }
}
u(E, "displayName", "VoiceChannelAnimationStateStore");
let p = new E(Chunk73153.h, {
    VOICE_STATE_UPDATES: function(e) {
      let {
        voiceStates: t
      } = e, n = s.A.getGuildId();
      n !== m && null != n && (m = n);
      let l = {};
      for (let e of t) {
        var r, i;
        e.guildId === n && (null != e.oldChannelId && (l[e.oldChannelId] = (null != (r = l[e.oldChannelId]) ? r : 0) - 1), null != e.channelId && (l[e.channelId] = (null != (i = l[e.channelId]) ? i : 0) + 1))
      }
      let a = false;
      for (let [e, t] of Object.entries(l))(function(e, t) {
        var n;
        let l = g[e],
          r = null != (n = null == l ? true : l.userCount) ? n : 0,
          i = Math.max(0, r + t);
        return 0 === r && i > 0 ? (g[e] = {
          style: "GENTLE_AMBIENT_WITH_INTRO",
          userCount: i
        }, y(e), true) : r > 0 && i > r ? (g[e] = {
          style: "HIGH_CONTRAST",
          userCount: i
        }, y(e), true) : 0 === i ? (b(e), delete g[e], true) : null != l && i !== r && (g[e] = d(c({}, l), {
          userCount: i
        }), true)
      })(e, t) && (a = true);
      return a
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t
      } = e;
      if (t === m || null == t) returnfalse;
      m = t, N();
      let n = o.A.getVoiceStates(t),
        l = {};
      for (let e of Object.values(n))
        if (null != e.channelId) {
          var r;
          l[e.channelId] = (null != (r = l[e.channelId]) ? r : 0) + 1
        } for (let [e, t] of Object.entries(l)) t > 0 && (g[e] = {
        style: "GENTLE_AMBIENT",
        userCount: t
      });
      returntrue
    },
    CONNECTION_OPEN: A,
    LOGOUT: A
  }),
  O = p