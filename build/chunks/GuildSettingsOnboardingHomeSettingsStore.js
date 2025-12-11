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
  f = null,
  m = Object.assign({}, g),
  b = false,
  p = {};

function h() {
  f = null, m = Object.assign({}, g), b = false, f = Chunk999382.Z.getGuildId(), m = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(f)))
}

function x(e, t) {
  if (null == m.newMemberActions) returnfalse;
  let n = m.newMemberActions.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  m.newMemberActions[n] = u({}, t), m.newMemberActions = [...m.newMemberActions]
}

function j(e, t) {
  if (null == m.resourceChannels) returnfalse;
  let n = m.resourceChannels.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  m.resourceChannels[n] = u({}, t), m.resourceChannels = [...m.resourceChannels]
}

function v() {
  b = false, m = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(f)))
}
class O extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (p = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: p
    }
  }
  getSettings() {
    return null != m ? m : g
  }
  hasChanges() {
    return null != f && !l().isEqual(m, Chunk563534.Z.getSettings(f))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return b
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null != (t = p[e]) ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = m.resourceChannels) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = m.newMemberActions) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
}
d(O, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), d(O, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let C = new O(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: h,
  GUILD_SETTINGS_SET_SECTION: h,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: h,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    m = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(f)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    b = true
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
    if (null == t) m.welcomeMessage = true;
    else {
      var n, r, i, l, a, s;
      m.welcomeMessage = {
        authorIds: null != (l = null != (i = t.authorIds) ? i : null == (n = m.welcomeMessage) ? true : n.authorIds) ? l : [],
        message: null != (s = null != (a = t.message) ? a : null == (r = m.welcomeMessage) ? true : r.message) ? s : ""
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
    m.newMemberActions = null != (t = m.newMemberActions) ? t : [], m.newMemberActions = [...m.newMemberActions, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == m.newMemberActions) returnfalse;
    m.newMemberActions = [...m.newMemberActions.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: t
    } = e;
    m.newMemberActions = t
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
    m.resourceChannels = (null != (t = m.resourceChannels) ? t : []).filter(e => e.channelId !== n.channelId), m.resourceChannels = [...m.resourceChannels, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == m.resourceChannels) returnfalse;
    m.resourceChannels = [...m.resourceChannels.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: t
    } = e;
    m.resourceChannels = t
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var t;
    let {
      guildId: n,
      channelIds: r
    } = e;
    p[n] = [...null != (t = p[n]) ? t : [], ...r]
  }
})