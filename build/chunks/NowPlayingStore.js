/** Chunk was on 29709 **/
/** chunk id: 649974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function f(e) {
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

function p(e, t) {
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
  h = {},
  y = {};

function m(e) {
  let t = false;
  return e.forEach(e => {
    t = false !== N(e) || t
  }), t
}

function O(e) {
  let t = y[e];
  if (null == t) returnfalse;
  let n = t.gameId;
  return null != h[n] && (h = f({}, h), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]), y = f({}, y), delete y[e], true
}

function N(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) returnfalse;
  let i = n.filter(e => e.type !== u.IIU.CUSTOM_STATUS);
  if (0 === i.length) return O(t.id);
  let r = false;
  return i.forEach(e => {
    (function(e, t) {
      var n, i;
      let r = (0, a.Z)(e);
      if (null == r) return O(t.id);
      let l = y[t.id];
      null != l && l.gameId !== r && O(t.id);
      let s = null != (i = null == (n = e.timestamps) ? true : n.start) ? i : Date.now(),
        o = {
          userId: t.id,
          activity: e,
          startedPlaying: s
        };
      return h = p(f({}, h), {
        [r]: p(f({}, h[r]), {
          [o.userId]: o
        })
      }), y = p(f({}, y), {
        [o.userId]: {
          gameId: r,
          startedPlaying: o.startedPlaying
        }
      }), true
    })(e, t) && (r = true)
  }), r
}

function b() {
  let e, t = false;
  return Chunk752048.Z.shouldFetch() || g || (h = {}, y = {}, e = false, Chunk158776.Z.getUserIds().forEach(t => {
    let n = c.default.getUser(t);
    null != n && (e = N({
      user: n,
      activities: o.Z.getActivities(t)
    }) || e)
  }), t = module), g = !Chunk752048.Z.shouldFetch(), exports
}
class v extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk158776.Z, Chunk752048.Z, Chunk594174.default), this.syncWith([Chunk752048.Z], b)
  }
  get games() {
    return h
  }
  get usersPlaying() {
    return y
  }
  get gameIds() {
    return Object.keys(h)
  }
  getNowPlaying(e) {
    return h[e]
  }
  getUserGame(e) {
    return y[e]
  }
}
d(v, "displayName", "NowPlayingStore");
let _ = new v(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    h = {}, y = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, i = false;
    return t.forEach(e => {
      m(e.presences) && (i = true)
    }), m(n) && (i = true), i
  },
  LOGOUT: function() {
    h = {}, y = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => N(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return m(t)
  }
})