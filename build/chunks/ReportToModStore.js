/** Chunk was on web.js **/
/** chunk id: 993706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./467055.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk914010 = require("./914010.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = null,
  u = {
    reportedMessages: {}
  };

function d(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set), u.reportedMessages[t].add(n)
}

function f() {
  let e = Chunk914010.Z.getLastSelectedGuildId();
  module !== l && (c = null, l = null != module ? module : null)
}

function _(e) {
  let {
    user: t,
    guildId: n
  } = e;
  n === l && null != c && c.set(t.id, true)
}

function p(e) {
  let {
    user: t,
    guildId: n
  } = e;
  n === l && null != c && c.set(t.id, false)
}

function h(e) {
  let {
    bans: t,
    guildId: n,
    userIds: r
  } = e;
  if (n !== l) return;
  let i = new Set(t.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })),
    o = Array.from(new Set(null != r ? r : [])).filter(e => !i.has(e));
  null == c && (c = new Map), i.forEach(e => {
    null == c || c.set(e, true)
  }), o.forEach(e => {
    null == c || c.set(e, false)
  })
}

function m() {
  l = null, c = null, u.reportedMessages = {}
}
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (u.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
      let [t, n] = e;
      return [t, new Set(n)]
    }))), this.syncWith([a.Z], f)
  }
  getState() {
    return u
  }
  isUserBanned(e) {
    var t;
    return null != (t = null == c ? true : c.get(e)) ? t : null
  }
  getReportedMessages() {
    return u.reportedMessages
  }
  hasReportedMessage(e, t) {
    var n, r;
    return null != (r = null == (n = u.reportedMessages[e]) ? true : n.has(t)) && r
  }
}
s(g, "displayName", "ReportToModStore"), s(g, "persistKey", "ReportToModStore"), s(g, "migrations", [e => {
  var t;
  return {
    reportedMessages: null != (t = null == e ? true : e.reportedMessages) ? t : {}
  }
}]);
let E = new g(Chunk570140.Z, {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: d,
  GUILD_BAN_ADD: _,
  GUILD_BAN_REMOVE: p,
  GUILD_SETTINGS_LOADED_BANS_BATCH: h,
  LOGOUT: m
})