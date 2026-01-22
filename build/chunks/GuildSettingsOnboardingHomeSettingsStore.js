/** Chunk was on 98700 **/
/** chunk id: 132514, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var l, Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk701785 = require("./701785.js"),
  Chunk555337 = require("./555337.js");

function c(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      c(e, n, t[n])
    })
  }
  return e
}
let d = {
    enabled: false
  },
  I = null,
  _ = Object.assign({}, d),
  A = false,
  S = {},
  O = {};

function N(e) {
  try {
    return new URL(null != e ? e : ""), true
  } catch (e) {
    returnfalse
  }
}

function g() {
  I = null, _ = Object.assign({}, d), A = false, O = {}, I = a.A.getGuildId(), _ = r().cloneDeep(Object.assign({}, u.h.getSettings(I)))
}

function G(e, n) {
  if (null == _.newMemberActions) returnfalse;
  let t = _.newMemberActions.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  _.newMemberActions[t] = E({}, n), _.newMemberActions = [..._.newMemberActions]
}

function f(e, n) {
  if (null == _.resourceChannels) returnfalse;
  let t = _.resourceChannels.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  _.resourceChannels[t] = E({}, n), _.resourceChannels = [..._.resourceChannels]
}

function T() {
  A = false, _ = r().cloneDeep(Object.assign({}, u.h.getSettings(I)))
}
class h extends(l = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (S = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(a.A, u.h)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: S
    }
  }
  getSettings() {
    return null != _ ? _ : d
  }
  hasChanges() {
    return null != I && !r().isEqual(_, u.h.getSettings(I))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return A
  }
  getDismissedSuggestedChannelIds(e) {
    var n;
    return null == e ? [] : null != (n = S[e]) ? n : []
  }
  getResourceChannel(e) {
    var n;
    if (null == e) return null;
    let t = null == (n = _.resourceChannels) ? true : n.find(n => n.channelId === e);
    return null == t ? null : t
  }
  getNewMemberAction(e) {
    var n;
    if (null == e) return null;
    let t = null == (n = _.newMemberActions) ? true : n.find(n => n.channelId === e);
    return null == t ? null : t
  }
  getPendingData() {
    return O
  }
  getPendingDataForChannel(e) {
    if (null != e) return O[e]
  }
}
c(h, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), c(h, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let b = new h(Chunk73153.h, {
  GUILD_SETTINGS_INIT: g,
  GUILD_SETTINGS_SET_SECTION: g,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: g,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    _ = r().cloneDeep(Object.assign({}, u.h.getSettings(I)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    A = true
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: T,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: T,
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
    f(n.channelId, n)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: n
    } = e;
    if (null == n) _.welcomeMessage = true;
    else {
      var t, l, i, r, s, o;
      _.welcomeMessage = {
        authorIds: null != (t = null != (l = n.authorIds) ? l : null == (s = _.welcomeMessage) ? true : s.authorIds) ? t : [],
        message: null != (i = null != (r = n.message) ? r : null == (o = _.welcomeMessage) ? true : o.message) ? i : ""
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
      action: t,
      pendingData: l
    } = e;
    _.newMemberActions = null != (n = _.newMemberActions) ? n : [], _.newMemberActions = [..._.newMemberActions, t], O[t.channelId] = {
      iconData: l.icon,
      isUrl: N(l.icon),
      emoji: l.emoji
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
    let {
      channelId: n,
      pendingData: t
    } = e;
    O[n] = {
      iconData: t.icon,
      isUrl: N(t.icon),
      emoji: t.emoji
    }
  },
  GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
    let {
      channelId: n
    } = e;
    null == n ? O = {} : delete O[n]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: n
    } = e;
    if (null == _.newMemberActions) returnfalse;
    _.newMemberActions = [..._.newMemberActions.filter(e => e.channelId !== n)], delete O[n]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: n
    } = e;
    _.newMemberActions = n
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: n,
      resourceChannel: t
    } = e;
    f(n, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var n;
    let {
      resourceChannel: t
    } = e;
    _.resourceChannels = (null != (n = _.resourceChannels) ? n : []).filter(e => e.channelId !== t.channelId), _.resourceChannels = [..._.resourceChannels, t]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: n
    } = e;
    if (null == _.resourceChannels) returnfalse;
    _.resourceChannels = [..._.resourceChannels.filter(e => e.channelId !== n)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: n
    } = e;
    _.resourceChannels = n
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var n;
    let {
      guildId: t,
      channelIds: l
    } = e;
    S[t] = [...null != (n = S[t]) ? n : [], ...l]
  }
})