/** Chunk was on 68051 **/
n.d(t, {
  J: () => E,
  Z: () => P
}), n(47120), n(913527);
var r, i, a = n(149765),
  o = n(442837);
n(433517);
var l = n(570140),
  s = n(491428),
  c = n(650774),
  d = n(430824),
  u = n(496675),
  p = n(914010),
  m = n(594174),
  f = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
let b = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  v = b,
  y = {},
  x = null,
  E = 864e5;
var O = ((i = O || {}).IS_OWNER = "is_owner", i.IS_ADMIN = "is_admin", i.IS_COMMUNITY = "is_community", i.GUILD_SIZE = "guild_size", i.IS_HUB = "is_hub", i.IS_VIEWING = "is_viewing", i.GUILD_PERMISSIONS = "guild_permissions", i.GUILD_SIZE_ALL = "guild_size_all", i);
let j = new Set(Object.values(O));

function N(e) {
  var t;
  return t = 0,
    function(e) {
      let {
        guild_requirements: t = [],
        guild_size: n = [null, null],
        guild_permissions: r = []
      } = e;
      if (0 === t.length) return !0;
      for (let e of t)
        if (!j.has(e)) return !1;
      let i = t.includes("guild_size_all"),
        o = !0;
      for (let l of Object.values(d.Z.getGuilds())) {
        if (i || t.includes("guild_size")) {
          let e = c.Z.getMemberCount(l.id);
          if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
            o = !1;
            continue
          }
        }
        if (t.includes("is_community") && !l.hasFeature(f.oNc.COMMUNITY) || t.includes("is_hub") && !l.hasFeature(f.oNc.HUB)) continue;
        if (t.includes("guild_permissions")) {
          if (0 === r.length) continue;
          let e = !1;
          for (let t of r) try {
            let n = a.vB(t);
            if (u.Z.can(n, l)) {
              e = !0;
              break
            }
          } catch (e) {}
          if (!e) continue
        }
        let s = m.default.getCurrentUser(),
          d = (null == s ? void 0 : s.id) === l.ownerId,
          h = u.Z.can(f.Plq.ADMINISTRATOR, l);
        if (t.includes("is_owner") && !d || t.includes("is_admin") && !h) continue;
        null == (y = null != y ? y : {})[e.key] && (y[e.key] = e);
        let g = p.Z.getGuildId(),
          _ = null != g && g === l.id;
        if ((!t.includes("is_viewing") || _) && !i) return !0
      }
      return !!i && !!o
    }(e)
}

function C(e) {
  let {
    survey: t
  } = e;
  if (v.lastFetched = Date.now(), null == v.hiddenSurveys && (v.hiddenSurveys = {}), null != t && null == v.hiddenSurveys[t.key]) {
    if (!N(t)) return;
    x = t
  }
}

function I() {
  if (null != x && (N(x) || (x = null, 0))) return !1;
  ! function() {
    let e = Object.values(y = null != y ? y : {})[0];
    if (null != e && N(e)) {
      C({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null != x) x = null
  }()
}
class S extends(r = o.ZP.PersistedStore) {
  initialize(e) {
    v = null != e ? e : b, this.syncWith([p.Z], I)
  }
  getState() {
    return v
  }
  getCurrentSurvey() {
    return x
  }
  getSurveyOverride() {
    return v.surveyOverride
  }
  getLastSeenTimestamp() {
    return v.lastSeen
  }
}
h(S, "displayName", "SurveyStore"), h(S, "persistKey", "SurveyStore"), h(S, "migrations", [e => {
  let t = g({}, e);
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return _(g({}, e), {
    lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
  })
}, e => {
  var t;
  return _(g({}, e), {
    hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
  })
}]);
let P = new S(l.Z, {
  CONNECTION_OPEN: function() {
    var e;
    (!(null != v.lastFetched && Date.now() - (null !== (e = v.lastFetched) && void 0 !== e ? e : 0) < E) || null != v.surveyOverride) && (0, s.wk)(v.surveyOverride, !0)
  },
  SURVEY_FETCHED: C,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    v.hiddenSurveys[t] = !0, x = null, y = null != y ? y : {}, delete y[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    v.surveyOverride = t, null != t && delete v.hiddenSurveys[t], (0, s.wk)(v.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    v.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    v.lastSeen = Date.now()
  }
})