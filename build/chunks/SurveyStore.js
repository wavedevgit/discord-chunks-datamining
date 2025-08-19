/** Chunk was on 91173 **/
/** chunk id: 558724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => I,
  Z: () => D
}), require("./388685.js");
var r, i, Chunk913527 = require("./913527.js"),
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

function b(e, t, n) {
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
      b(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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
let v = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  O = v,
  y = {},
  x = null,
  j = false,
  I = 864e5;
var S = ((i = S || {}).IS_OWNER = "is_owner", i.IS_ADMIN = "is_admin", i.IS_COMMUNITY = "is_community", i.GUILD_SIZE = "guild_size", i.IS_HUB = "is_hub", i.IS_VIEWING = "is_viewing", i.GUILD_PERMISSIONS = "guild_permissions", i.GUILD_SIZE_ALL = "guild_size_all", i);
let T = new Set(Object.values(S));

function P() {
  return null == O.lastFetched || Date.now() - O.lastFetched >= I
}

function N() {
  !j && (P() || null != O.surveyOverride) && (j = true, (0, Chunk491428.wk)(O.surveyOverride, true))
}

function A(e) {
  return function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: r = []
    } = e;
    if (0 === t.length) returntrue;
    for (let e of t)
      if (!T.has(e)) returnfalse;
    let i = t.includes("guild_size_all"),
      l = true;
    for (let a of m.Z.getGuildsArray()) {
      if (i || t.includes("guild_size")) {
        let e = p.Z.getMemberCount(a.id);
        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
          l = false;
          continue
        }
      }
      if (t.includes("is_community") && !a.features.has(h.oNc.COMMUNITY) || t.includes("is_hub") && !a.features.has(h.oNc.HUB)) continue;
      if (t.includes("guild_permissions")) {
        if (0 === r.length) continue;
        let e = false;
        for (let t of r) try {
          let n = o.vB(t);
          if (f.Z.can(n, a)) {
            e = true;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let s = _.default.getCurrentUser(),
        c = (null == s ? true : s.id) === a.ownerId,
        u = f.Z.can(h.Plq.ADMINISTRATOR, a);
      if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
      null == (y = null != y ? y : {})[e.key] && (y[e.key] = e);
      let d = g.Z.getGuildId(),
        m = null != d && d === a.id;
      if ((!t.includes("is_viewing") || m) && !i) returntrue
    }
    return !!i && !!l
  }(e)
}

function w(e) {
  let {
    survey: t
  } = e;
  j = false, O.lastFetched = Date.now(), null == O.hiddenSurveys && (O.hiddenSurveys = {});
  let n = null != t,
    r = n && null == O.hiddenSurveys[t.key],
    i = n && A(t),
    l = c.K.get(h.z7k);
  null == l || a()().diff(l, "day"), x = r && i && 1 ? t : null
}

function Z() {
  if (null != x && (A(x) || (x = null, 0))) returnfalse;
  let e = Object.values(y = null != y ? y : {})[0];
  null != module && A(module) ? w({
    type: "SURVEY_FETCHED",
    survey: module
  }) : null != x && (x = null)
}
class R extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    O = null != e ? e : v, this.syncWith([g.Z], Z)
  }
  getState() {
    return O
  }
  getCurrentSurvey() {
    return P() ? null : x
  }
  getSurveyOverride() {
    return O.surveyOverride
  }
  getLastSeenTimestamp() {
    return O.lastSeen
  }
}
b(R, "displayName", "SurveyStore"), b(R, "persistKey", "SurveyStore"), b(R, "migrations", [e => {
  let t = E({}, e);
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return C(E({}, e), {
    lastSeen: null != (t = e.lastSeen) ? t : null
  })
}, e => {
  var t;
  return C(E({}, e), {
    hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
  })
}]);
let D = new R(Chunk570140.Z, {
  CONNECTION_OPEN: N,
  CONNECTION_RESUMED: N,
  SURVEY_FETCHED: w,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    O.hiddenSurveys[t] = true, x = null, y = null != y ? y : {}, delete y[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    O.surveyOverride = t, null != t && delete O.hiddenSurveys[t], (0, d.wk)(O.surveyOverride, true)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    O.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    O.lastSeen = Date.now()
  }
})