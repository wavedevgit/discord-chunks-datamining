/** Chunk was on web.js **/
/** chunk id: 563534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => l,
  Z: () => v
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let l = {
    enabled: false
  },
  c = [],
  u = {},
  d = new Set,
  f = {};

function p(e) {
  var t;
  let n = null == (t = u[e]) ? true : t.newMemberActions;
  return null == n ? null : (f[e] = n, f[e])
}

function _(e) {
  let {
    homeSettings: t,
    guildId: n
  } = e;
  null != n && (null == t && (u[n] = l), u[n] = t, p(n), d.delete(n))
}

function m(e) {
  let {
    guildId: t
  } = e;
  d.add(t)
}

function h(e) {
  let {
    guildId: t
  } = e;
  d.delete(t)
}

function g(e) {
  let {
    guildId: t,
    enabled: n
  } = e, r = u[t];
  if (null == r) returnfalse;
  r.enabled = n
}

function E(e) {
  let {
    guild: t
  } = e;
  if (null == u[t.id]) returnfalse;
  delete u[t.id], delete f[t.id]
}

function b(e) {
  var t;
  let {
    guildId: n,
    resourceChannel: r
  } = e, i = u[n];
  if (null == i) returnfalse;
  i.resourceChannels = null != (t = i.resourceChannels) ? t : [];
  let a = i.resourceChannels.findIndex(e => e.channelId === r.channelId);
  return false !== a && (i.resourceChannels[a] = s({}, r), true)
}

function y(e) {
  var t;
  let {
    guildId: n,
    action: r
  } = e, i = u[n];
  if (null == i) returnfalse;
  i.newMemberActions = null != (t = i.newMemberActions) ? t : [];
  let a = i.newMemberActions.findIndex(e => e.channelId === r.channelId);
  return false !== a && (i.newMemberActions[a] = s({}, r), true)
}
class O extends(r = Chunk442837.ZP.Store) {
  getSettings(e) {
    var t;
    return null == e ? null : null != (t = u[e]) ? t : l
  }
  getNewMemberActions(e) {
    var t;
    return null == e || (null == (t = this.getSettings(e)) ? true : t.newMemberActions) == null ? null : null == f[e] ? p(e) : f[e]
  }
  getActionForChannel(e, t) {
    var n;
    let r = this.getSettings(e);
    return null == r ? null : (null != (n = r.newMemberActions) ? n : []).find(e => e.channelId === t)
  }
  hasMemberAction(e, t) {
    return null != this.getActionForChannel(e, t)
  }
  getResourceChannels(e) {
    var t, n;
    return null != (n = null == (t = u[e]) ? true : t.resourceChannels) ? n : c
  }
  getResourceForChannel(e, t) {
    if (null == e) return null;
    let n = this.getResourceChannels(e);
    return n === c ? null : n.find(e => e.channelId === t)
  }
  getIsLoading(e) {
    return null != e && d.has(e)
  }
  getWelcomeMessage(e) {
    var t;
    if (null != e) return null == (t = u[e]) ? true : t.welcomeMessage
  }
  hasSettings(e) {
    return null != e && null != u[e]
  }
  getEnabled(e) {
    var t, n;
    return null != e && null != (n = null == (t = u[e]) ? true : t.enabled) && n
  }
  getNewMemberAction(e, t) {
    var n, r, i;
    return null == e || null == t ? null : null != (i = null == (r = u[e]) || null == (n = r.newMemberActions) ? true : n.find(e => e.channelId === t)) ? i : null
  }
}
o(O, "displayName", "GuildOnboardingHomeSettingsStore");
let v = new O(Chunk570140.Z, {
  GUILD_HOME_SETTINGS_FETCH_START: m,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: _,
  GUILD_HOME_SETTINGS_FETCH_FAIL: h,
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: _,
  GUILD_HOME_SETTINGS_TOGGLE_ENABLED: g,
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: b,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: y,
  GUILD_DELETE: E
})