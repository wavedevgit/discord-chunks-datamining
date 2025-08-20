/** Chunk was on 26434 **/
/** chunk id: 223606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk673750 = require("./673750.js"),
  Chunk786761 = require("./786761.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk709054 = require("./709054.js"),
  Chunk539573 = require("./539573.js"),
  Chunk825829 = require("./825829.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = {},
  _ = 0,
  h = {},
  b = {},
  E = e => {
    null != g[e] && delete g[e], _++
  };

function C(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e, r = (0, o.hc)(t), i = {
    id: r,
    isBlockedEdit: (0, o.Bz)(t),
    messageData: t,
    errorMessage: (0, d.uF)(t, n)
  };
  return g[r] = i, _++, true
}

function v(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null == (t = s.Z.getChannel(n)) ? true : t.getGuildId();
  if (null == i) returnfalse;
  let l = b[i],
    o = r.reduce((e, t) => {
      var n;
      return t.type === m.uaV.AUTO_MODERATION_ACTION && (null == (n = t.embeds) ? true : n.some(e => {
        let {
          type: t
        } = e;
        return t === m.hBH.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || false === u.default.compare(e, t.id) ? t.id : true : e
    }, l);
  return null != o && b[i] !== o && (b[i] = o, true)
}
class O extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(c.Z), null != e && (g = e.automodFailedMessages, h = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: g,
      mentionRaidDetectionByGuild: h,
      lastIncidentAlertMessage: b
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null != (t = g[e]) ? t : null
  }
  getMessagesVersion() {
    return _
  }
  getMentionRaidDetected(e) {
    var t;
    return null != (t = h[e]) ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null != (t = b[e]) ? t : null
  }
}
f(O, "displayName", "GuildAutomodMessageStore"), f(O, "persistKey", "GuildAutomodMessages");
let y = new O(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    return 0 !== Object.keys(g).length && (g = {}, _++, true)
  },
  LOAD_MESSAGES_SUCCESS: v,
  LOCAL_MESSAGES_LOADED: v,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== m.uaV.AUTO_MODERATION_ACTION) returnfalse;
    let r = (0, a.e5)(n);
    return !!(0, p.nY)(r) && !!(0, p.OP)(r) && (b[t] = r.id, true)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: C,
  MESSAGE_EDIT_FAILED_AUTOMOD: C,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return E(t), true
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? true : t.body) == null || t.body.code === m.evJ.AUTOMOD_MESSAGE_BLOCKED) returnfalse;
    let n = t.body.id;
    if (null == n) returnfalse;
    E(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    } = e;
    return h[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    }, true
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete h[t], true
  }
})