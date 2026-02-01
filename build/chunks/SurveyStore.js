/** Chunk was on web.js **/
/** chunk id: 274184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => X,
  bh: () => w
}), require("./896048.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk246605 = require("./246605.js"),
  Chunk927813 = require("./927813.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null,
    lastActionTriggered: null
  },
  A = v,
  I = false,
  S = false,
  T = {},
  C = null,
  N = false,
  w = Chunk927813.A.Millis.DAY,
  R = 10 * Chunk927813.A.Millis.HOUR,
  P = 7;
var D = function(e) {
  return e.IS_OWNER = "is_owner", e.IS_ADMIN = "is_admin", e.IS_COMMUNITY = "is_community", e.GUILD_SIZE = "guild_size", e.IS_HUB = "is_hub", e.IS_VIEWING = "is_viewing", e.GUILD_PERMISSIONS = "guild_permissions", e.GUILD_SIZE_ALL = "guild_size_all", e
}(D || {});
let L = new Set(Object.values(D));

function x() {
  return null == A.lastFetched || Date.now() - A.lastFetched >= w
}

function M() {
  !N && (x() || null != A.surveyOverride) && (N = true, (0, u.BC)(A.surveyOverride, true))
}

function j(e) {
  return U(e) && k(e)
}

function k(e) {
  let {
    guild_requirements: t = [],
    guild_size: n = [null, null],
    guild_permissions: r = []
  } = e;
  if (0 === t.length) returntrue;
  for (let e of t)
    if (!L.has(e)) returnfalse;
  let i = t.includes("guild_size_all"),
    a = true;
  for (let s of p.A.getGuildsArray()) {
    if (i || t.includes("guild_size")) {
      let e = f.A.getMemberCount(s.id);
      if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
        a = false;
        continue
      }
    }
    if (t.includes("is_community") && !s.features.has(g.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !s.features.has(g.GuildFeatures.HUB)) continue;
    if (t.includes("guild_permissions")) {
      if (0 === r.length) continue;
      let e = false;
      for (let t of r) try {
        let n = o.iu(t);
        if (_.A.can(n, s)) {
          e = true;
          break
        }
      } catch (e) {}
      if (!e) continue
    }
    let l = m.default.getCurrentUser(),
      c = (null == l ? true : l.id) === s.ownerId,
      u = _.A.can(g.xBc.ADMINISTRATOR, s);
    if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
    null == (T = null != T ? T : {})[e.key] && (T[e.key] = e);
    let d = h.A.getGuildId(),
      p = null != d && d === s.id;
    if ((!t.includes("is_viewing") || p) && !i) returntrue
  }
  return !!i && !!a
}

function U(e) {
  returntrue
}

function G(e) {
  let t = l.w.get(g.gT8);
  return null == t || a()().diff(t, "day") < e
}

function V(e) {
  let {
    survey: t,
    isActionTriggered: n
  } = e;
  N = false, A.lastFetched = Date.now(), n && (A.lastActionTriggered = Date.now()), null == A.hiddenSurveys && (A.hiddenSurveys = {});
  let r = null != t,
    i = r && null == A.hiddenSurveys[t.key],
    a = r && j(t);
  G(P);
  let o = false;
  C = i && a && !o ? t : null
}

function F(e) {
  let {
    id: t
  } = e;
  A.surveyOverride = t, null != t && delete A.hiddenSurveys[t], (0, u.BC)(A.surveyOverride, true)
}

function B() {
  I = true
}

function H() {
  S = true
}

function Y(e) {
  let {
    key: t
  } = e;
  A.hiddenSurveys[t] = true, C = null, T = null != T ? T : {}, delete T[t]
}

function W() {
  A.hiddenSurveys = {}
}

function K(e) {
  return !!j(e) || (C = null, false)
}

function z() {
  let e = Object.values(T = null != T ? T : {})[0];
  return null != e && j(e) ? void V({
    type: "SURVEY_FETCHED",
    survey: e
  }) : null != C && void(C = null)
}

function q() {
  if (null != C && K(C)) returnfalse;
  z()
}

function Z() {
  A.lastSeen = Date.now()
}
class Q extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(f.A, p.A, _.A, h.A, m.default), A = null != e ? e : v, this.syncWith([h.A], q)
  }
  getState() {
    return A
  }
  getCurrentSurvey() {
    return x() ? null : C
  }
  getSurveyOverride() {
    return A.surveyOverride
  }
  getLastSeenTimestamp() {
    return A.lastSeen
  }
  shouldAllowSurveyAction() {
    var e;
    return Date.now() - (null != (e = A.lastActionTriggered) ? e : 0) >= R
  }
}
E(Q, "displayName", "SurveyStore"), E(Q, "persistKey", "SurveyStore"), E(Q, "migrations", [e => {
  let t = y({}, e);
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return O(y({}, e), {
    lastSeen: null != (t = e.lastSeen) ? t : null
  })
}, e => {
  var t;
  return O(y({}, e), {
    hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
  })
}]);
let X = new Q(Chunk73153.h, {
  CONNECTION_OPEN: M,
  CONNECTION_RESUMED: M,
  SURVEY_FETCHED: V,
  SURVEY_HIDE: Y,
  SURVEY_OVERRIDE: F,
  PUSH_NOTIFICATION_CLICK: B,
  DISPLAYED_INVITE_SHOW: H,
  LOGOUT: W,
  SURVEY_SEEN: Z
})