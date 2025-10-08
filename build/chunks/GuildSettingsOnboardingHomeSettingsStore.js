/** Chunk was on 81257 **/
/** chunk id: 969632, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk563534 = require("./563534.js"),
  Chunk999382 = require("./999382.js");

function c(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}

function _(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      c(e, n, t[n])
    })
  }
  return e
}
let E = {
    enabled: false
  },
  I = null,
  S = Object.assign({}, E),
  N = false,
  d = {};

function O() {
  I = null, S = Object.assign({}, E), N = false, I = Chunk999382.Z.getGuildId(), S = o().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
}

function G(e, n) {
  if (null == S.newMemberActions) returnfalse;
  let t = S.newMemberActions.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  S.newMemberActions[t] = _({}, n), S.newMemberActions = [...S.newMemberActions]
}

function T(e, n) {
  if (null == S.resourceChannels) returnfalse;
  let t = S.resourceChannels.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  S.resourceChannels[t] = _({}, n), S.resourceChannels = [...S.resourceChannels]
}

function g() {
  N = false, S = o().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (d = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(a.Z, i.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: d
    }
  }
  getSettings() {
    return null != S ? S : E
  }
  hasChanges() {
    return null != I && !o().isEqual(S, Chunk563534.Z.getSettings(I))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return N
  }
  getDismissedSuggestedChannelIds(e) {
    var n;
    return null == e ? [] : null != (n = d[e]) ? n : []
  }
  getResourceChannel(e) {
    var n;
    if (null == e) return null;
    let t = null == (n = S.resourceChannels) ? true : n.find(n => n.channelId === e);
    return null == t ? null : t
  }
  getNewMemberAction(e) {
    var n;
    if (null == e) return null;
    let t = null == (n = S.newMemberActions) ? true : n.find(n => n.channelId === e);
    return null == t ? null : t
  }
}
c(h, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), c(h, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let C = new h(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: O,
  GUILD_SETTINGS_SET_SECTION: O,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: O,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    S = o().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    N = true
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: g,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: g,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: n
    } = e;
    return G(n.channelId, n)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: n
    } = e;
    T(n.channelId, n)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: n
    } = e;
    if (null == n) S.welcomeMessage = true;
    else {
      var t, r, l, o, u, s;
      S.welcomeMessage = {
        authorIds: null != (o = null != (l = n.authorIds) ? l : null == (t = S.welcomeMessage) ? true : t.authorIds) ? o : [],
        message: null != (s = null != (u = n.message) ? u : null == (r = S.welcomeMessage) ? true : r.message) ? s : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: n,
      action: t
    } = e;
    return G(n, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var n;
    let {
      action: t
    } = e;
    S.newMemberActions = null != (n = S.newMemberActions) ? n : [], S.newMemberActions = [...S.newMemberActions, t]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: n
    } = e;
    if (null == S.newMemberActions) returnfalse;
    S.newMemberActions = [...S.newMemberActions.filter(e => e.channelId !== n)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: n
    } = e;
    S.newMemberActions = n
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: n,
      resourceChannel: t
    } = e;
    T(n, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var n;
    let {
      resourceChannel: t
    } = e;
    S.resourceChannels = (null != (n = S.resourceChannels) ? n : []).filter(e => e.channelId !== t.channelId), S.resourceChannels = [...S.resourceChannels, t]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: n
    } = e;
    if (null == S.resourceChannels) returnfalse;
    S.resourceChannels = [...S.resourceChannels.filter(e => e.channelId !== n)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: n
    } = e;
    S.resourceChannels = n
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var n;
    let {
      guildId: t,
      channelIds: r
    } = e;
    d[t] = [...null != (n = d[t]) ? n : [], ...r]
  }
})