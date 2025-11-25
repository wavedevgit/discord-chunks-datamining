/** Chunk was on web.js **/
/** chunk id: 558724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => R,
  Z: () => Q
}), require("./388685.js");
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk491428 = require("./491428.js"),
  Chunk947245 = require("./947245.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  I = v,
  T = false,
  S = false,
  A = {},
  C = null,
  N = false,
  R = 864e5,
  P = 7;
var D = function(e) {
  return e.IS_OWNER = "is_owner", e.IS_ADMIN = "is_admin", e.IS_COMMUNITY = "is_community", e.GUILD_SIZE = "guild_size", e.IS_HUB = "is_hub", e.IS_VIEWING = "is_viewing", e.GUILD_PERMISSIONS = "guild_permissions", e.GUILD_SIZE_ALL = "guild_size_all", e
}(D || {});
let w = new Set(Object.values(D));

function L() {
  return null == I.lastFetched || Date.now() - I.lastFetched >= R
}

function x() {
  !N && (L() || null != I.surveyOverride) && (N = true, (0, Chunk491428.wk)(I.surveyOverride, true))
}

function M(e) {
  return j(e) && k(e)
}

function k(e) {
  let {
    guild_requirements: t = [],
    guild_size: n = [null, null],
    guild_permissions: r = []
  } = e;
  if (0 === t.length) returntrue;
  for (let e of t)
    if (!w.has(e)) returnfalse;
  let i = t.includes("guild_size_all"),
    a = true;
  for (let s of _.Z.getGuildsArray()) {
    if (i || t.includes("guild_size")) {
      let e = f.Z.getMemberCount(s.id);
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
        let n = o.vB(t);
        if (p.Z.can(n, s)) {
          e = true;
          break
        }
      } catch (e) {}
      if (!e) continue
    }
    let l = m.default.getCurrentUser(),
      c = (null == l ? true : l.id) === s.ownerId,
      u = p.Z.can(g.Plq.ADMINISTRATOR, s);
    if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
    null == (A = null != A ? A : {})[e.key] && (A[e.key] = e);
    let d = h.Z.getGuildId(),
      _ = null != d && d === s.id;
    if ((!t.includes("is_viewing") || _) && !i) returntrue
  }
  return !!i && !!a
}

function j(e) {
  returntrue
}

function U(e) {
  let t = l.K.get(g.z7k);
  return null == t || a()().diff(t, "day") < e
}

function G(e) {
  let {
    survey: t
  } = e;
  N = false, I.lastFetched = Date.now(), null == I.hiddenSurveys && (I.hiddenSurveys = {});
  let n = null != t,
    r = n && null == I.hiddenSurveys[t.key],
    i = n && M(t);
  U(P);
  let a = false;
  C = r && i && !a ? t : null
}

function B(e) {
  let {
    id: t
  } = e;
  I.surveyOverride = t, null != t && delete I.hiddenSurveys[t], (0, u.wk)(I.surveyOverride, true)
}

function Z() {
  T = true
}

function F() {
  S = true
}

function V(e) {
  let {
    key: t
  } = e;
  I.hiddenSurveys[t] = true, C = null, A = null != A ? A : {}, delete A[t]
}

function H() {
  I.hiddenSurveys = {}
}

function W(e) {
  return !!M(e) || (C = null, false)
}

function Y() {
  let e = Object.values(A = null != A ? A : {})[0];
  return null != module && M(module) ? void G({
    type: "SURVEY_FETCHED",
    survey: module
  }) : null != C && void(C = null)
}

function K() {
  if (null != C && W(C)) returnfalse;
  Y()
}

function z() {
  I.lastSeen = Date.now()
}

function q(e) {
  let {
    trigger: t
  } = e;
  if ("nitro_unsub" !== t || !d.E.getConfig({
      location: "surveystore"
    }).enableNitroUnsubSurvey) returnfalse;
  (0, u.wk)("1439042286574112799", true)
}
class X extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(f.Z, _.Z, p.Z, h.Z, m.default), I = null != e ? e : v, this.syncWith([h.Z], K)
  }
  getState() {
    return I
  }
  getCurrentSurvey() {
    return L() ? null : C
  }
  getSurveyOverride() {
    return I.surveyOverride
  }
  getLastSeenTimestamp() {
    return I.lastSeen
  }
}
E(X, "displayName", "SurveyStore"), E(X, "persistKey", "SurveyStore"), E(X, "migrations", [e => {
  let t = b({}, e);
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return O(b({}, e), {
    lastSeen: null != (t = e.lastSeen) ? t : null
  })
}, e => {
  var t;
  return O(b({}, e), {
    hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
  })
}]);
let Q = new X(Chunk570140.Z, {
  CONNECTION_OPEN: x,
  CONNECTION_RESUMED: x,
  SURVEY_FETCHED: G,
  SURVEY_HIDE: V,
  SURVEY_OVERRIDE: B,
  PUSH_NOTIFICATION_CLICK: Z,
  DISPLAYED_INVITE_SHOW: F,
  LOGOUT: H,
  SURVEY_SEEN: z,
  EMBEDDED_SURVEY_TRIGGER: q
})