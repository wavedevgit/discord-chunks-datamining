/** Chunk was on 1636 **/
/** chunk id: 400528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./446912.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk967198 = require("./967198.js");

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
  d = {
    reportedMessages: {}
  };

function u() {
  let e = o.A.getLastSelectedGuildId();
  e !== c && (s = null, c = null != e ? e : null)
}
class f extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (d.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
      let [t, n] = e;
      return [t, new Set(n)]
    }))), this.syncWith([o.A], u)
  }
  getState() {
    return d
  }
  isUserBanned(e) {
    var t;
    return null != (t = null == s ? true : s.get(e)) ? t : null
  }
  getReportedMessages() {
    return d.reportedMessages
  }
  hasReportedMessage(e, t) {
    var n, r;
    return null != (n = null == (r = d.reportedMessages[e]) ? true : r.has(t)) && n
  }
}
a(f, "displayName", "ReportToModStore"), a(f, "persistKey", "ReportToModStore"), a(f, "migrations", [e => {
  var t;
  return {
    reportedMessages: null != (t = null == e ? true : e.reportedMessages) ? t : {}
  }
}]);
let g = new f(Chunk73153.h, {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e;
    null == d.reportedMessages[t] && (d.reportedMessages[t] = new Set), d.reportedMessages[t].add(n)
  },
  GUILD_BAN_ADD: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    n !== c || null != s && s.set(t.id, true)
  },
  GUILD_BAN_REMOVE: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    n !== c || null != s && s.set(t.id, false)
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t,
      guildId: n,
      userIds: r
    } = e;
    if (n !== c) return;
    let l = new Set(t.map(e => {
        var t;
        return null == (t = e.user) ? true : t.id
      })),
      i = Array.from(new Set(null != r ? r : [])).filter(e => !l.has(e));
    null == s && (s = new Map), l.forEach(e => {
      null == s || s.set(e, true)
    }), i.forEach(e => {
      null == s || s.set(e, false)
    })
  },
  LOGOUT: function() {
    c = null, s = null, d.reportedMessages = {}
  }
})