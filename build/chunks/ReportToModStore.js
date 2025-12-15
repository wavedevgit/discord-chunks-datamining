/** Chunk was on 37220 **/
/** chunk id: 993706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./467055.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk914010 = require("./914010.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null,
  s = null,
  u = {
    reportedMessages: {}
  };

function d() {
  let e = Chunk914010.Z.getLastSelectedGuildId();
  module !== c && (s = null, c = null != module ? module : null)
}
class f extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (u.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
      let [t, n] = e;
      return [t, new Set(n)]
    }))), this.syncWith([o.Z], d)
  }
  getState() {
    return u
  }
  isUserBanned(e) {
    var t;
    return null != (t = null == s ? true : s.get(e)) ? t : null
  }
  getReportedMessages() {
    return u.reportedMessages
  }
  hasReportedMessage(e, t) {
    var n, r;
    return null != (r = null == (n = u.reportedMessages[e]) ? true : n.has(t)) && r
  }
}
a(f, "displayName", "ReportToModStore"), a(f, "persistKey", "ReportToModStore"), a(f, "migrations", [e => {
  var t;
  return {
    reportedMessages: null != (t = null == e ? true : e.reportedMessages) ? t : {}
  }
}]);
let g = new f(Chunk570140.Z, {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e;
    null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set), u.reportedMessages[t].add(n)
  },
  GUILD_BAN_ADD: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    n === c && null != s && s.set(t.id, true)
  },
  GUILD_BAN_REMOVE: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    n === c && null != s && s.set(t.id, false)
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t,
      guildId: n,
      userIds: r
    } = e;
    if (n !== c) return;
    let i = new Set(t.map(e => {
        var t;
        return null == (t = e.user) ? true : t.id
      })),
      l = Array.from(new Set(null != r ? r : [])).filter(e => !i.has(e));
    null == s && (s = new Map), i.forEach(e => {
      null == s || s.set(e, true)
    }), l.forEach(e => {
      null == s || s.set(e, false)
    })
  },
  LOGOUT: function() {
    c = null, s = null, u.reportedMessages = {}
  }
})