/** Chunk was on 57010 **/
/** chunk id: 783592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk294857 = require("./294857.js"),
  Chunk21119 = require("./21119.js"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
let g = false,
  I = {},
  A = {};

function S(e) {
  let t = false;
  return e.forEach(e => {
    t = false !== p(e) || t
  }), t
}

function E(e) {
  let t = A[e];
  if (null == t) returnfalse;
  let n = t.gameId;
  return null != I[n] && (I = h({}, I), delete I[n][e], 0 === Object.values(I[n]).length && delete I[n]), A = h({}, A), delete A[e], true
}

function p(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) returnfalse;
  let r = n.filter(e => e.type !== d.$pd.CUSTOM_STATUS);
  if (0 === r.length) return E(t.id);
  let i = false;
  return r.forEach(e => {
    (function(e, t) {
      var n, r;
      let i = (0, s.A)(e);
      if (null == i) return E(t.id);
      let l = A[t.id];
      null != l && l.gameId !== i && E(t.id);
      let a = null != (n = null == (r = e.timestamps) ? true : r.start) ? n : Date.now(),
        u = {
          userId: t.id,
          activity: e,
          startedPlaying: a
        };
      return I = f(h({}, I), {
        [i]: f(h({}, I[i]), {
          [u.userId]: u
        })
      }), A = f(h({}, A), {
        [u.userId]: {
          gameId: i,
          startedPlaying: u.startedPlaying
        }
      }), true
    })(e, t) && (i = true)
  }), i
}

function y() {
  let e, t = false;
  return a.A.shouldFetch() || g || (I = {}, A = {}, e = false, u.A.getUserIds().forEach(t => {
    let n = o.default.getUser(t);
    null != n && (e = p({
      user: n,
      activities: u.A.getActivities(t)
    }) || e)
  }), t = e), g = !a.A.shouldFetch(), t
}
class v extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, a.A, o.default), this.syncWith([a.A], y)
  }
  get games() {
    return I
  }
  get usersPlaying() {
    return A
  }
  get gameIds() {
    return Object.keys(I)
  }
  getNowPlaying(e) {
    return I[e]
  }
  getUserGame(e) {
    return A[e]
  }
}
c(v, "displayName", "NowPlayingStore");
let _ = new v(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    I = {}, A = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, r = false;
    return t.forEach(e => {
      S(e.presences) && (r = true)
    }), S(n) && (r = true), r
  },
  LOGOUT: function() {
    I = {}, A = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => p(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return S(t)
  }
})