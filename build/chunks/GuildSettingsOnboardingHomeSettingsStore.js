/** Chunk was on 95140 **/
/** chunk id: 969632, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var l, Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
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

function d(e) {
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
let E = {
    enabled: false
  },
  I = null,
  _ = Object.assign({}, E),
  S = false,
  N = {},
  O = {};

function g(e) {
  try {
    return new URL(null != e ? e : ""), true
  } catch (e) {
    returnfalse
  }
}

function f() {
  I = null, _ = Object.assign({}, E), S = false, O = {}, I = Chunk999382.Z.getGuildId(), _ = r().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
}

function T(e, n) {
  if (null == _.newMemberActions) returnfalse;
  let t = _.newMemberActions.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  _.newMemberActions[t] = d({}, n), _.newMemberActions = [..._.newMemberActions]
}

function G(e, n) {
  if (null == _.resourceChannels) returnfalse;
  let t = _.resourceChannels.findIndex(n => n.channelId === e);
  if (t < 0) returnfalse;
  _.resourceChannels[t] = d({}, n), _.resourceChannels = [..._.resourceChannels]
}

function h() {
  S = false, _ = r().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
}
class A extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (N = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(a.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: N
    }
  }
  getSettings() {
    return null != _ ? _ : E
  }
  hasChanges() {
    return null != I && !r().isEqual(_, Chunk563534.Z.getSettings(I))
  }
  canCloseEarly() {
    return !this.hasChanges()
  }
  showNotice() {
    return this.hasChanges()
  }
  getSubmitting() {
    return S
  }
  getDismissedSuggestedChannelIds(e) {
    var n;
    return null == e ? [] : null != (n = N[e]) ? n : []
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
  getPendingIconData() {
    return O
  }
  getPendingIconDataForChannel(e) {
    if (null != e) return O[e]
  }
}
c(A, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), c(A, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let D = new A(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: f,
  GUILD_SETTINGS_SET_SECTION: f,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: f,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    _ = r().cloneDeep(Object.assign({}, Chunk563534.Z.getSettings(I)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    S = true
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: h,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: h,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: n
    } = e;
    return T(n.channelId, n)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: n
    } = e;
    G(n.channelId, n)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: n
    } = e;
    if (null == n) _.welcomeMessage = true;
    else {
      var t, l, i, r, s, u;
      _.welcomeMessage = {
        authorIds: null != (r = null != (i = n.authorIds) ? i : null == (t = _.welcomeMessage) ? true : t.authorIds) ? r : [],
        message: null != (u = null != (s = n.message) ? s : null == (l = _.welcomeMessage) ? true : l.message) ? u : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: n,
      action: t
    } = e;
    return T(n, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var n;
    let {
      action: t,
      pendingIconData: l
    } = e;
    _.newMemberActions = null != (n = _.newMemberActions) ? n : [], _.newMemberActions = [..._.newMemberActions, t], true !== l && (O[t.channelId] = {
      iconData: l,
      isUrl: g(l)
    })
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function(e) {
    let {
      channelId: n,
      pendingIconData: t
    } = e;
    O[n] = {
      iconData: t,
      isUrl: g(t)
    }
  },
  GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_ICON_DATA: function(e) {
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
    G(n, t)
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
    N[t] = [...null != (n = N[t]) ? n : [], ...l]
  }
})