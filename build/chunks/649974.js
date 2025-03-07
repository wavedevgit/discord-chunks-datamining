/** Chunk was on 24491 **/
n.d(t, {
  Z: () => S
});
var r, i = n(442837),
  l = n(570140),
  u = n(656063),
  o = n(814443),
  c = n(158776),
  a = n(594174),
  s = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
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
let O = !1,
  y = {},
  p = {};

function E(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== P(e) || t
  }), t
}

function h(e) {
  let t = p[e];
  if (null == t) return !1;
  let n = t.gameId;
  return null != y[n] && (y = f({}, y), delete y[n][e], 0 === Object.values(y[n]).length && delete y[n]), p = f({}, p), delete p[e], !0
}

function P(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) return !1;
  let r = n.filter(e => e.type !== s.IIU.CUSTOM_STATUS);
  if (0 === r.length) return h(t.id);
  let i = !1;
  return r.forEach(e => {
    (function(e, t) {
      var n, r;
      let i = (0, u.Z)(e);
      if (null == i) return h(t.id);
      let l = p[t.id];
      null != l && l.gameId !== i && h(t.id);
      let o = null !== (r = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : Date.now(),
        c = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return y = g(f({}, y), {
        [i]: g(f({}, y[i]), {
          [c.userId]: c
        })
      }), p = g(f({}, p), {
        [c.userId]: {
          gameId: i,
          startedPlaying: c.startedPlaying
        }
      }), !0
    })(e, t) && (i = !0)
  }), i
}

function I() {
  let e = !1;
  if (!o.Z.needsRefresh() && !O) {
    let t;
    y = {}, p = {}, t = !1, c.Z.getUserIds().forEach(e => {
      let n = a.default.getUser(e);
      null != n && (t = P({
        user: n,
        activities: c.Z.getActivities(e)
      }) || t)
    }), e = t
  }
  return O = !o.Z.needsRefresh(), e
}
class v extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(o.Z), this.syncWith([o.Z], I)
  }
  get games() {
    return y
  }
  get usersPlaying() {
    return p
  }
  get gameIds() {
    return Object.keys(y)
  }
  getNowPlaying(e) {
    return y[e]
  }
  getUserGame(e) {
    return p[e]
  }
}
d(v, "displayName", "NowPlayingStore");
let S = new v(l.Z, {
  CONNECTION_OPEN: function() {
    y = {}, p = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, r = !1;
    return t.forEach(e => {
      E(e.presences) && (r = !0)
    }), E(n) && (r = !0), r
  },
  LOGOUT: function() {
    y = {}, p = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => P(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return E(t)
  }
})