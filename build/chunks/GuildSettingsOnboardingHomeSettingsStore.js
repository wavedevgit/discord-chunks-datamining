/** Chunk was on 9536 **/
/** chunk id: 969632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk563534 = require("./563534.js"),
  Chunk999382 = require("./999382.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
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
let g = {
    enabled: false
  },
  m = null,
  f = Object.assign({}, g),
  p = false,
  b = {};

function h() {
  m = null, f = Object.assign({}, g), p = false, m = Chunk999382.Z.getGuildId(), f = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
}

function x(e, t) {
  if (null == f.newMemberActions) returnfalse;
  let n = f.newMemberActions.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  f.newMemberActions[n] = u({}, t), f.newMemberActions = [...f.newMemberActions]
}

function j(e, t) {
  if (null == f.resourceChannels) returnfalse;
  let n = f.resourceChannels.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  f.resourceChannels[n] = u({}, t), f.resourceChannels = [...f.resourceChannels]
}

function v() {
  p = false, f = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
}
class O extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (b = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: b
    }
  }
  getSettings() {
    return null != f ? f : g
  }
  hasChanges() {
    return null != m && !l().isEqual(f, Chunk563534.Z.getSettings(m))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return p
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null != (t = b[e]) ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = f.resourceChannels) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = f.newMemberActions) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
}
d(O, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), d(O, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let C = new O(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: h,
  GUILD_SETTINGS_SET_SECTION: h,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: h,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    f = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    p = true
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: v,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: v,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: t
    } = e;
    return x(t.channelId, t)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: t
    } = e;
    j(t.channelId, t)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: t
    } = e;
    if (null == t) f.welcomeMessage = true;
    else {
      var n, r, i, l, a, s;
      f.welcomeMessage = {
        authorIds: null != (l = null != (i = t.authorIds) ? i : null == (n = f.welcomeMessage) ? true : n.authorIds) ? l : [],
        message: null != (s = null != (a = t.message) ? a : null == (r = f.welcomeMessage) ? true : r.message) ? s : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t,
      action: n
    } = e;
    return x(t, n)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var t;
    let {
      action: n
    } = e;
    f.newMemberActions = null != (t = f.newMemberActions) ? t : [], f.newMemberActions = [...f.newMemberActions, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == f.newMemberActions) returnfalse;
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
    j(t, n)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var t;
    let {
      resourceChannel: n
    } = e;
    f.resourceChannels = (null != (t = f.resourceChannels) ? t : []).filter(e => e.channelId !== n.channelId), f.resourceChannels = [...f.resourceChannels, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == f.resourceChannels) returnfalse;
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
    b[n] = [...null != (t = b[n]) ? t : [], ...r]
  }
})