/** Chunk was on 92917 **/
/** chunk id: 93474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk884384 = require("./884384.js"),
  Chunk141468 = require("./141468.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk661191 = require("./661191.js"),
  Chunk753738 = require("./753738.js"),
  Chunk785823 = require("./785823.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = {},
  h = 0,
  _ = {},
  b = {},
  A = e => {
    null != g[e] && delete g[e], h++
  };

function y(e) {
  let t, n, {
    messageData: r,
    errorResponseBody: i
  } = e;
  return n = {
    id: t = (0, a.cR)(r),
    isBlockedEdit: (0, a.Qn)(r),
    messageData: r,
    errorMessage: (0, d.PD)(r, i)
  }, g[t] = n, h++, true
}

function v(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null == (t = o.A.getChannel(n)) ? true : t.getGuildId();
  if (null == i) returnfalse;
  let l = b[i],
    a = r.reduce((e, t) => {
      var n;
      return t.type === m.lAJ.AUTO_MODERATION_ACTION && (null == (n = t.embeds) ? true : n.some(e => {
        let {
          type: t
        } = e;
        return t === m.Auw.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || false === u.default.compare(e, t.id) ? t.id : true : e
    }, l);
  return null != a && b[i] !== a && (b[i] = a, true)
}
class x extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(o.A, c.A), null != e && (g = e.automodFailedMessages, _ = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: g,
      mentionRaidDetectionByGuild: _,
      lastIncidentAlertMessage: b
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null != (t = g[e]) ? t : null
  }
  getMessagesVersion() {
    return h
  }
  getMentionRaidDetected(e) {
    var t;
    return null != (t = _[e]) ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null != (t = b[e]) ? t : null
  }
}
f(x, "displayName", "GuildAutomodMessageStore"), f(x, "persistKey", "GuildAutomodMessages");
let O = new x(Chunk73153.h, {
  CONNECTION_OPEN: function(e) {
    return 0 !== Object.keys(g).length && (g = {}, h++, true)
  },
  LOAD_MESSAGES_SUCCESS: v,
  LOCAL_MESSAGES_LOADED: v,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== m.lAJ.AUTO_MODERATION_ACTION) returnfalse;
    let r = (0, s.rh)(n);
    return !!(0, p.ER)(r) && !!(0, p.de)(r) && (b[t] = r.id, true)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: y,
  MESSAGE_EDIT_FAILED_AUTOMOD: y,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return A(t), true
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? true : t.body) == null || t.body.code === m.t02.AUTOMOD_MESSAGE_BLOCKED) returnfalse;
    let n = t.body.id;
    if (null == n) returnfalse;
    A(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    } = e;
    return _[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    }, true
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete _[t], true
  }
})