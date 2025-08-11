/** Chunk was on 29709 **/
/** chunk id: 649974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk656063 = require("./656063.js"),
  Chunk752048 = require("./752048.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = false,
  N = {},
  O = {};

function h(e) {
  let t = false;
  return e.forEach(e => {
    t = false !== y(e) || t
  }), t
}

function m(e) {
  let t = O[e];
  if (null == t) returnfalse;
  let n = t.gameId;
  return null != N[n] && (N = p({}, N), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), O = p({}, O), delete O[e], true
}

function y(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) returnfalse;
  let i = n.filter(e => e.type !== u.IIU.CUSTOM_STATUS);
  if (0 === i.length) return m(t.id);
  let r = false;
  return i.forEach(e => {
    (function(e, t) {
      var n, i;
      let r = (0, s.Z)(e);
      if (null == r) return m(t.id);
      let l = O[t.id];
      null != l && l.gameId !== r && m(t.id);
      let a = null != (i = null == (n = e.timestamps) ? true : n.start) ? i : Date.now(),
        o = {
          userId: t.id,
          activity: e,
          startedPlaying: a
        };
      return N = f(p({}, N), {
        [r]: f(p({}, N[r]), {
          [o.userId]: o
        })
      }), O = f(p({}, O), {
        [o.userId]: {
          gameId: r,
          startedPlaying: o.startedPlaying
        }
      }), true
    })(e, t) && (r = true)
  }), r
}

function S() {
  let e, t = false;
  return Chunk752048.Z.shouldFetch() || g || (N = {}, O = {}, e = false, Chunk158776.Z.getUserIds().forEach(t => {
    let n = c.default.getUser(t);
    null != n && (e = y({
      user: n,
      activities: o.Z.getActivities(t)
    }) || e)
  }), t = module), g = !Chunk752048.Z.shouldFetch(), exports
}
class E extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk752048.Z), this.syncWith([Chunk752048.Z], S)
  }
  get games() {
    return N
  }
  get usersPlaying() {
    return O
  }
  get gameIds() {
    return Object.keys(N)
  }
  getNowPlaying(e) {
    return N[e]
  }
  getUserGame(e) {
    return O[e]
  }
}
d(E, "displayName", "NowPlayingStore");
let I = new E(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    N = {}, O = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, i = false;
    return t.forEach(e => {
      h(e.presences) && (i = true)
    }), h(n) && (i = true), i
  },
  LOGOUT: function() {
    N = {}, O = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => y(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return h(t)
  }
})