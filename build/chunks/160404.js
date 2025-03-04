/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120), n(789020);
var r, i = n(442837),
  o = n(570140),
  a = n(430824),
  s = n(630388),
  l = n(251625),
  c = n(709054),
  u = n(225675),
  d = n(981631),
  f = n(526761);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
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
let m = {};

function E(e) {
  let {
    guildId: t,
    data: n
  } = e;
  delete n.roles[c.default.castGuildIdAsEveryoneGuildRoleId(t)], m[t] = g(p({}, n), {
    timestamp: Date.now()
  })
}

function v(e) {
  let {
    guildId: t
  } = e;
  if (null == m[t]) return !1;
  delete m[t]
}

function b(e) {
  let {
    guildId: t,
    roleId: n
  } = e;
  if (null == m[t]) return !1;
  delete m[t].roles[n]
}

function y(e) {
  var t;
  let {
    guildId: n,
    overrides: r
  } = e;
  if (null == n || null == m[n]) return !1;
  let i = m[n];
  if (null == i || i.type !== u.z.NEW_MEMBER) return !1;
  let o = null !== (t = i.optInChannels) && void 0 !== t ? t : new Set;
  return c.default.keys(r).forEach(e => {
    var t;
    let n = r[e];
    s.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ic.OPT_IN_ENABLED) ? o.add(e) : o.delete(e)
  }), i.optInChannels = o, !0
}

function O(e) {
  var t;
  let {
    guildId: n,
    optionId: r,
    selected: i,
    removedOptionIds: o
  } = e;
  if (null == n || null == m[n]) return !1;
  let a = m[n];
  if (null == a || a.type !== u.z.NEW_MEMBER) return !1;
  let s = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
  return null != o && o.length > 0 && o.forEach(e => s.delete(e)), i ? s.add(r) : s.delete(r), a.onboardingResponses = s, !0
}

function S(e) {
  let {
    guildId: t,
    roles: n,
    flags: r
  } = e;
  if (null == t) return !1;
  let i = m[t];
  return null != i && (null != n && (i.roles = n.reduce((e, n) => {
    let r = a.Z.getRole(t, n);
    return null != r && (e[n] = r), e
  }, {})), null != r && i.type === u.z.NEW_MEMBER && (i.memberOptions.flags = r), !0)
}
class I extends(r = i.ZP.Store) {
  hasViewingRoles() {
    return !(0, l.ld)(m)
  }
  isViewingRoles(e) {
    return null != e && null != m[e]
  }
  getViewingRoles(e) {
    var t;
    return null === (t = m[e]) || void 0 === t ? void 0 : t.roles
  }
  getViewingRolesTimestamp(e) {
    var t;
    return null != e ? null === (t = m[e]) || void 0 === t ? void 0 : t.timestamp : null
  }
  getData(e) {
    return m[e]
  }
  isFullServerPreview(e) {
    var t;
    return (null === (t = m[e]) || void 0 === t ? void 0 : t.type) === u.z.NEW_MEMBER
  }
  isOptInEnabled(e) {
    let t = m[e];
    return null != t && t.type === u.z.NEW_MEMBER && t.optInEnabled
  }
  isOnboardingEnabled(e) {
    let t = m[e];
    return null != t && t.type === u.z.NEW_MEMBER && t.onboardingEnabled
  }
  getViewingChannels(e) {
    let t = m[e];
    return null == t || t.type !== u.z.NEW_MEMBER ? null : t.optInChannels
  }
  getOnboardingResponses(e) {
    let t = m[e];
    return null == t || t.type !== u.z.NEW_MEMBER ? null : t.onboardingResponses
  }
  getMemberOptions(e) {
    let t = m[e];
    return null == t || t.type !== u.z.NEW_MEMBER ? null : t.memberOptions
  }
  isChannelOptedIn(e, t) {
    let n = this.getViewingChannels(e);
    return null != n && n.has(t)
  }
  isViewingServerShop(e) {
    var t;
    return null != e && (null === (t = m[e]) || void 0 === t ? void 0 : t.type) === u.z.SERVER_SHOP
  }
  getImpersonateType(e) {
    if (null == e) return null;
    let t = m[e];
    return null == t ? null : t.type
  }
  getBackNavigationSection(e) {
    if (null == e) return d.pNK.ROLES;
    let t = m[e];
    if (null == t) return d.pNK.ROLES;
    switch (t.type) {
      case u.z.ROLES:
      case u.z.SERVER_SHOP:
        return t.returnToSection;
      case u.z.NEW_MEMBER:
        return d.pNK.ONBOARDING;
      default:
        return d.pNK.ROLES
    }
  }
}
_(I, "displayName", "ImpersonateStore");
let T = new I(o.Z, {
  IMPERSONATE_UPDATE: E,
  IMPERSONATE_STOP: v,
  GUILD_ROLE_DELETE: b,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: y,
  GUILD_ONBOARDING_SELECT_OPTION: O,
  GUILD_MEMBER_UPDATE_LOCAL: S
})