/** Chunk was on web.js **/
/** chunk id: 160404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./997841.js");
var r, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk251625 = require("./251625.js"),
  Chunk709054 = require("./709054.js"),
  Chunk225675 = require("./225675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = {};

function b(e) {
  let {
    guildId: t,
    data: n
  } = e;
  delete n.roles[u.default.castGuildIdAsEveryoneGuildRoleId(t)], E[t] = g(m({}, n), {
    timestamp: Date.now()
  })
}

function y(e) {
  let {
    guildId: t
  } = e;
  if (null == E[t]) returnfalse;
  delete E[t]
}

function O(e) {
  let {
    guildId: t,
    roleId: n
  } = e;
  if (null == E[t]) returnfalse;
  delete E[t].roles[n]
}

function v(e) {
  var t;
  let {
    guildId: n,
    overrides: r
  } = e;
  if (null == n || null == E[n]) returnfalse;
  let a = E[n];
  if (null == a || a.type !== d.z.NEW_MEMBER) returnfalse;
  let o = null != (t = a.optInChannels) ? t : new Set;
  return u.default.keys(r).forEach(e => {
    var t;
    let n = r[e];
    i.yE(null != (t = n.flags) ? t : 0, p.ic.OPT_IN_ENABLED) ? o.add(e) : o.delete(e)
  }), a.optInChannels = o, true
}

function S(e) {
  var t;
  let {
    guildId: n,
    optionId: r,
    selected: i,
    removedOptionIds: a
  } = e;
  if (null == n || null == E[n]) returnfalse;
  let o = E[n];
  if (null == o || o.type !== d.z.NEW_MEMBER) returnfalse;
  let s = null != (t = o.onboardingResponses) ? t : new Set;
  return null != a && a.length > 0 && a.forEach(e => s.delete(e)), i ? s.add(r) : s.delete(r), o.onboardingResponses = s, true
}

function I(e) {
  let {
    guildId: t,
    roles: n,
    flags: r
  } = e;
  if (null == t) returnfalse;
  let i = E[t];
  return null != i && (null != n && (i.roles = n.reduce((e, n) => {
    let r = s.Z.getRole(t, n);
    return null != r && (e[n] = r), e
  }, {})), null != r && i.type === d.z.NEW_MEMBER && (i.memberOptions.flags = r), true)
}
class T extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(l.Z, s.Z)
  }
  hasViewingRoles() {
    return !(0, c.ld)(E)
  }
  isViewingRoles(e) {
    return null != e && null != E[e]
  }
  getViewingRoles(e) {
    var t;
    return null == (t = E[e]) ? true : t.roles
  }
  getViewingRolesTimestamp(e) {
    var t;
    return null != e ? null == (t = E[e]) ? true : t.timestamp : null
  }
  getData(e) {
    return E[e]
  }
  isFullServerPreview(e) {
    var t;
    return (null == (t = E[e]) ? true : t.type) === d.z.NEW_MEMBER
  }
  isOptInEnabled(e) {
    let t = E[e];
    return null != t && t.type === d.z.NEW_MEMBER && t.optInEnabled
  }
  isOnboardingEnabled(e) {
    let t = E[e];
    return null != t && t.type === d.z.NEW_MEMBER && t.onboardingEnabled
  }
  getViewingChannels(e) {
    let t = E[e];
    return null == t || t.type !== d.z.NEW_MEMBER ? null : t.optInChannels
  }
  getOnboardingResponses(e) {
    let t = E[e];
    return null == t || t.type !== d.z.NEW_MEMBER ? null : t.onboardingResponses
  }
  getMemberOptions(e) {
    let t = E[e];
    return null == t || t.type !== d.z.NEW_MEMBER ? null : t.memberOptions
  }
  isChannelOptedIn(e, t) {
    let n = this.getViewingChannels(e);
    return null != n && n.has(t)
  }
  isViewingServerShop(e) {
    var t;
    return null != e && (null == (t = E[e]) ? true : t.type) === d.z.SERVER_SHOP
  }
  getImpersonateType(e) {
    if (null == e) return null;
    let t = E[e];
    return null == t ? null : t.type
  }
  getBackNavigationSection(e) {
    if (null == e) return f.pNK.ROLES;
    let t = E[e];
    if (null == t) return f.pNK.ROLES;
    switch (t.type) {
      case d.z.ROLES:
      case d.z.SERVER_SHOP:
        return t.returnToSection;
      case d.z.NEW_MEMBER:
        return f.pNK.ONBOARDING;
      default:
        return f.pNK.ROLES
    }
  }
}
_(T, "displayName", "ImpersonateStore");
let C = new T(Chunk570140.Z, {
  IMPERSONATE_UPDATE: b,
  IMPERSONATE_STOP: y,
  GUILD_ROLE_DELETE: O,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: v,
  GUILD_ONBOARDING_SELECT_OPTION: S,
  GUILD_MEMBER_UPDATE_LOCAL: I
})