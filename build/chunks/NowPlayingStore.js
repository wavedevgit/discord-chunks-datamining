/** Chunk was on 46636 **/
/** chunk id: 783592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk294857 = require("./294857.js"),
  Chunk21119 = require("./21119.js"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = false,
  h = {},
  m = {};

function O(e) {
  let t = false;
  return e.forEach(e => {
    t = false !== A(e) || t
  }), t
}

function E(e) {
  let t = m[e];
  if (null == t) returnfalse;
  let n = t.gameId;
  return null != h[n] && (h = p({}, h), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]), m = p({}, m), delete m[e], true
}

function A(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) returnfalse;
  let r = n.filter(e => e.type !== c.$pd.CUSTOM_STATUS);
  if (0 === r.length) return E(t.id);
  let i = false;
  return r.forEach(e => {
    (function(e, t) {
      var n, r;
      let i = (0, s.A)(e);
      if (null == i) return E(t.id);
      let l = m[t.id];
      null != l && l.gameId !== i && E(t.id);
      let o = null != (n = null == (r = e.timestamps) ? true : r.start) ? n : Date.now(),
        a = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return h = g(p({}, h), {
        [i]: g(p({}, h[i]), {
          [a.userId]: a
        })
      }), m = g(p({}, m), {
        [a.userId]: {
          gameId: i,
          startedPlaying: a.startedPlaying
        }
      }), true
    })(e, t) && (i = true)
  }), i
}

function y() {
  let e, t = false;
  return o.A.shouldFetch() || f || (h = {}, m = {}, e = false, a.A.getUserIds().forEach(t => {
    let n = u.default.getUser(t);
    null != n && (e = A({
      user: n,
      activities: a.A.getActivities(t)
    }) || e)
  }), t = e), f = !o.A.shouldFetch(), t
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A, o.A, u.default), this.syncWith([o.A], y)
  }
  get games() {
    return h
  }
  get usersPlaying() {
    return m
  }
  get gameIds() {
    return Object.keys(h)
  }
  getNowPlaying(e) {
    return h[e]
  }
  getUserGame(e) {
    return m[e]
  }
}
d(N, "displayName", "NowPlayingStore");
let v = new N(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    h = {}, m = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, r = false;
    return t.forEach(e => {
      O(e.presences) && (r = true)
    }), O(n) && (r = true), r
  },
  LOGOUT: function() {
    h = {}, m = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => A(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return O(t)
  }
})