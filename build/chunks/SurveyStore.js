/** Chunk was on web.js **/
/** chunk id: 558724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => N,
  Z: () => q
}), require("./388685.js");
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk491428 = require("./491428.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  v = O,
  I = false,
  T = false,
  S = {},
  A = null,
  C = false,
  N = 864e5,
  R = 7;
var P = function(e) {
  return e.IS_OWNER = "is_owner", e.IS_ADMIN = "is_admin", e.IS_COMMUNITY = "is_community", e.GUILD_SIZE = "guild_size", e.IS_HUB = "is_hub", e.IS_VIEWING = "is_viewing", e.GUILD_PERMISSIONS = "guild_permissions", e.GUILD_SIZE_ALL = "guild_size_all", e
}(P || {});
let D = new Set(Object.values(P));

function w() {
  return null == v.lastFetched || Date.now() - v.lastFetched >= N
}

function L() {
  !C && (w() || null != v.surveyOverride) && (C = true, (0, Chunk491428.wk)(v.surveyOverride, true))
}

function x(e) {
  return j(e) && M(e)
}

function M(e) {
  let {
    guild_requirements: t = [],
    guild_size: n = [null, null],
    guild_permissions: r = []
  } = e;
  if (0 === t.length) returntrue;
  for (let e of t)
    if (!D.has(e)) returnfalse;
  let i = t.includes("guild_size_all"),
    a = true;
  for (let s of f.Z.getGuildsArray()) {
    if (i || t.includes("guild_size")) {
      let e = d.Z.getMemberCount(s.id);
      if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
        a = false;
        continue
      }
    }
    if (t.includes("is_community") && !s.features.has(m.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !s.features.has(m.GuildFeatures.HUB)) continue;
    if (t.includes("guild_permissions")) {
      if (0 === r.length) continue;
      let e = false;
      for (let t of r) try {
        let n = o.vB(t);
        if (_.Z.can(n, s)) {
          e = true;
          break
        }
      } catch (e) {}
      if (!e) continue
    }
    let l = h.default.getCurrentUser(),
      c = (null == l ? true : l.id) === s.ownerId,
      u = _.Z.can(m.Plq.ADMINISTRATOR, s);
    if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
    null == (S = null != S ? S : {})[e.key] && (S[e.key] = e);
    let f = p.Z.getGuildId(),
      g = null != f && f === s.id;
    if ((!t.includes("is_viewing") || g) && !i) returntrue
  }
  return !!i && !!a
}

function j(e) {
  returntrue
}

function k(e) {
  let t = l.K.get(m.z7k);
  return null == t || a()().diff(t, "day") < e
}

function U(e) {
  let {
    survey: t
  } = e;
  C = false, v.lastFetched = Date.now(), null == v.hiddenSurveys && (v.hiddenSurveys = {});
  let n = null != t,
    r = n && null == v.hiddenSurveys[t.key],
    i = n && x(t);
  k(R);
  let a = false;
  A = r && i && !a ? t : null
}

function G(e) {
  let {
    id: t
  } = e;
  v.surveyOverride = t, null != t && delete v.hiddenSurveys[t], (0, u.wk)(v.surveyOverride, true)
}

function B() {
  I = true
}

function Z() {
  T = true
}

function F(e) {
  let {
    key: t
  } = e;
  v.hiddenSurveys[t] = true, A = null, S = null != S ? S : {}, delete S[t]
}

function V() {
  v.hiddenSurveys = {}
}

function H(e) {
  return !!x(e) || (A = null, false)
}

function Y() {
  let e = Object.values(S = null != S ? S : {})[0];
  return null != module && x(module) ? void U({
    type: "SURVEY_FETCHED",
    survey: module
  }) : null != A && void(A = null)
}

function W() {
  if (null != A && H(A)) returnfalse;
  Y()
}

function K() {
  v.lastSeen = Date.now()
}
class z extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(d.Z, f.Z, _.Z, p.Z, h.default), v = null != e ? e : O, this.syncWith([p.Z], W)
  }
  getState() {
    return v
  }
  getCurrentSurvey() {
    return w() ? null : A
  }
  getSurveyOverride() {
    return v.surveyOverride
  }
  getLastSeenTimestamp() {
    return v.lastSeen
  }
}
g(z, "displayName", "SurveyStore"), g(z, "persistKey", "SurveyStore"), g(z, "migrations", [e => {
  let t = E({}, e);
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return y(E({}, e), {
    lastSeen: null != (t = e.lastSeen) ? t : null
  })
}, e => {
  var t;
  return y(E({}, e), {
    hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
  })
}]);
let q = new z(Chunk570140.Z, {
  CONNECTION_OPEN: L,
  CONNECTION_RESUMED: L,
  SURVEY_FETCHED: U,
  SURVEY_HIDE: F,
  SURVEY_OVERRIDE: G,
  PUSH_NOTIFICATION_CLICK: B,
  DISPLAYED_INVITE_SHOW: Z,
  LOGOUT: V,
  SURVEY_SEEN: K
})