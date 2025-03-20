/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120);
var r, i = n(392711),
  s = n.n(i),
  a = n(442837),
  l = n(570140),
  o = n(563534),
  A = n(999382);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
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
let u = {
    enabled: !1
  },
  g = null,
  f = Object.assign({}, u),
  m = !1,
  p = {};

function h() {
  g = null, f = Object.assign({}, u), m = !1, g = A.Z.getGuildId(), f = s().cloneDeep(Object.assign({}, o.Z.getSettings(g)))
}

function C(e, t) {
  if (null == f.newMemberActions) return !1;
  let n = f.newMemberActions.findIndex(t => t.channelId === e);
  if (n < 0) return !1;
  f.newMemberActions[n] = d({}, t), f.newMemberActions = [...f.newMemberActions]
}

function b(e, t) {
  if (null == f.resourceChannels) return !1;
  let n = f.resourceChannels.findIndex(t => t.channelId === e);
  if (n < 0) return !1;
  f.resourceChannels[n] = d({}, t), f.resourceChannels = [...f.resourceChannels]
}

function v() {
  m = !1, f = s().cloneDeep(Object.assign({}, o.Z.getSettings(g)))
}
class x extends(r = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && (p = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(A.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: p
    }
  }
  getSettings() {
    return null != f ? f : u
  }
  hasChanges() {
    return null != g && !s().isEqual(s().omit(f, "newMemberActions"), s().omit(o.Z.getSettings(g), "newMemberActions"))
  }
  getSubmitting() {
    return m
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null !== (t = p[e]) && void 0 !== t ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let n = null === (t = f.resourceChannels) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let n = null === (t = f.newMemberActions) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
}
c(x, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), c(x, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let N = new x(l.Z, {
  GUILD_SETTINGS_INIT: h,
  GUILD_SETTINGS_SET_SECTION: h,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: h,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    f = s().cloneDeep(Object.assign({}, o.Z.getSettings(g)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    m = !0
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: v,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: v,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: t
    } = e;
    return C(t.channelId, t)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: t
    } = e;
    b(t.channelId, t)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: t
    } = e;
    if (null == t) f.welcomeMessage = void 0;
    else {
      var n, r, i, s, a, l;
      f.welcomeMessage = {
        authorIds: null !== (s = null !== (i = t.authorIds) && void 0 !== i ? i : null === (n = f.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== s ? s : [],
        message: null !== (l = null !== (a = t.message) && void 0 !== a ? a : null === (r = f.welcomeMessage) || void 0 === r ? void 0 : r.message) && void 0 !== l ? l : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t,
      action: n
    } = e;
    return C(t, n)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var t;
    let {
      action: n
    } = e;
    f.newMemberActions = null !== (t = f.newMemberActions) && void 0 !== t ? t : [], f.newMemberActions = [...f.newMemberActions, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == f.newMemberActions) return !1;
    f.newMemberActions = [...f.newMemberActions.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: t
    } = e;
    f.newMemberActions = t
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      resourceChannel: n
    } = e;
    b(t, n)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var t;
    let {
      resourceChannel: n
    } = e;
    f.resourceChannels = (null !== (t = f.resourceChannels) && void 0 !== t ? t : []).filter(e => e.channelId !== n.channelId), f.resourceChannels = [...f.resourceChannels, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == f.resourceChannels) return !1;
    f.resourceChannels = [...f.resourceChannels.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: t
    } = e;
    f.resourceChannels = t
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var t;
    let {
      guildId: n,
      channelIds: r
    } = e;
    p[n] = [...null !== (t = p[n]) && void 0 !== t ? t : [], ...r]
  }
})