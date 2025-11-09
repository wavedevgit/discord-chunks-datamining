/** Chunk was on 29679 **/
/** chunk id: 969632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  p = Object.assign({}, g),
  f = false,
  h = {};

function b() {
  m = null, p = Object.assign({}, g), f = false, m = Chunk999382.Z.getGuildId(), p = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
}

function x(e, t) {
  if (null == p.newMemberActions) returnfalse;
  let n = p.newMemberActions.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  p.newMemberActions[n] = u({}, t), p.newMemberActions = [...p.newMemberActions]
}

function j(e, t) {
  if (null == p.resourceChannels) returnfalse;
  let n = p.resourceChannels.findIndex(t => t.channelId === e);
  if (n < 0) returnfalse;
  p.resourceChannels[n] = u({}, t), p.resourceChannels = [...p.resourceChannels]
}

function _() {
  f = false, p = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
}
class v extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: h
    }
  }
  getSettings() {
    return null != p ? p : g
  }
  hasChanges() {
    return null != m && !l().isEqual(p, Chunk563534.Z.getSettings(m))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return f
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null != (t = h[e]) ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = p.resourceChannels) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = p.newMemberActions) ? true : t.find(t => t.channelId === e);
    return null == n ? null : n
  }
}
d(v, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), d(v, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let O = new v(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: b,
  GUILD_SETTINGS_SET_SECTION: b,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: b,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    p = l().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(m)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    f = true
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: _,
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
    if (null == t) p.welcomeMessage = true;
    else {
      var n, r, i, l, a, s;
      p.welcomeMessage = {
        authorIds: null != (l = null != (i = t.authorIds) ? i : null == (n = p.welcomeMessage) ? true : n.authorIds) ? l : [],
        message: null != (s = null != (a = t.message) ? a : null == (r = p.welcomeMessage) ? true : r.message) ? s : ""
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
    p.newMemberActions = null != (t = p.newMemberActions) ? t : [], p.newMemberActions = [...p.newMemberActions, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == p.newMemberActions) returnfalse;
    p.newMemberActions = [...p.newMemberActions.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: t
    } = e;
    p.newMemberActions = t
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
    p.resourceChannels = (null != (t = p.resourceChannels) ? t : []).filter(e => e.channelId !== n.channelId), p.resourceChannels = [...p.resourceChannels, n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == p.resourceChannels) returnfalse;
    p.resourceChannels = [...p.resourceChannels.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: t
    } = e;
    p.resourceChannels = t
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var t;
    let {
      guildId: n,
      channelIds: r
    } = e;
    h[n] = [...null != (t = h[n]) ? t : [], ...r]
  }
})